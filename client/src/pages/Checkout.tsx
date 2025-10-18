import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/cart-store";
import { ArrowLeft, CheckCircle, Loader2, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertOrderSchema, type InsertOrder } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";

export default function Checkout() {
  const [, setLocation] = useLocation();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const total = getTotalPrice();

  const form = useForm<InsertOrder>({
    resolver: zodResolver(insertOrderSchema),
    defaultValues: {
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      deliveryAddress: "",
      items: "",
      totalAmount: "0",
      status: "pending",
    },
  });

  const createOrderMutation = useMutation({
    mutationFn: async (data: InsertOrder) => {
      return await apiRequest("POST", "/api/orders", data);
    },
    onSuccess: () => {
      setOrderSuccess(true);
      clearCart();
    },
  });

  const onSubmit = (data: InsertOrder) => {
    const orderData = {
      ...data,
      items: JSON.stringify(items.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      }))),
      totalAmount: total.toFixed(2),
    };
    createOrderMutation.mutate(orderData);
  };

  if (items.length === 0 && !orderSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center py-20">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/40 mb-6" />
          <h2 className="font-serif text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8 max-w-md text-center">
            Add some delicious exotic fruits to your cart before checking out
          </p>
          <Link href="/products">
            <Button size="lg" data-testid="button-shop-now">
              Shop Now
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center py-20 bg-background">
          <div className="max-w-md text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-chart-3/10 mb-6">
              <CheckCircle className="h-12 w-12 text-chart-3" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">Order Placed Successfully!</h2>
            <p className="text-muted-foreground mb-2">
              Thank you for your order. We'll contact you shortly to confirm delivery details.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Check your phone for updates: {form.getValues("customerPhone")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button data-testid="button-continue-shopping">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" data-testid="button-back-home">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <Link href="/products">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shopping
            </Button>
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Delivery Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="customerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="customerPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="10-digit phone number" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="customerEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email (Optional)</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="deliveryAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Delivery Address *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Enter your complete delivery address including street, city, state, and PIN code" 
                                className="min-h-[100px]"
                                {...field} 
                                data-testid="input-address"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#d4a645] hover:bg-[#d4a645] text-primary border-2 border-[#c09635]"
                        disabled={createOrderMutation.isPending}
                        data-testid="button-place-order"
                      >
                        {createOrderMutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Placing Order...
                          </>
                        ) : (
                          "Place Order"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.product.name} × {item.quantity}
                        </span>
                        <span className="font-semibold">
                          ₹{(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₹{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span className="font-semibold text-chart-3">Free</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[#d4a645]" data-testid="text-order-total">₹{total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
