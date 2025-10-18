import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Minus, Plus, ArrowLeft, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";
import { useRoute, Link } from "wouter";
import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const productId = params?.id;
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCartStore();
  const { toast } = useToast();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const product = products?.find((p) => p.id === productId);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} ${product.unit} of ${product.name} added to your cart.`,
      });
      setTimeout(() => {
        openCart();
      }, 500);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
        <Footer />
        <CartDrawer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center py-20">
          <h2 className="font-serif text-2xl font-bold mb-4">Product not found</h2>
          <Link href="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
        <CartDrawer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <Link href="/products">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {!product.inStock && (
                <Badge 
                  variant="destructive" 
                  className="absolute top-4 right-4 text-base px-4 py-2"
                >
                  Out of Stock
                </Badge>
              )}
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                {product.category === "exotic" && (
                  <Badge className="bg-[#d4a645] text-primary border-[#c09635] mb-4">
                    Exotic Fruit
                  </Badge>
                )}
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-product-name">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Separator className="my-6" />

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-[#d4a645]" data-testid="text-product-price">
                    ₹{parseFloat(product.price).toFixed(2)}
                  </span>
                  <span className="text-xl text-muted-foreground">/ {product.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Wholesale pricing available for bulk orders
                </p>
              </div>

              <Separator className="my-6" />

              {product.inStock && (
                <div className="space-y-6 flex-1">
                  <div>
                    <label className="text-sm font-semibold mb-3 block">Quantity</label>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        data-testid="button-decrease-quantity"
                      >
                        <Minus className="h-5 w-5" />
                      </Button>
                      <span className="text-2xl font-bold w-16 text-center" data-testid="text-quantity">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12"
                        onClick={() => setQuantity(quantity + 1)}
                        data-testid="button-increase-quantity"
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-[#d4a645] hover:bg-[#d4a645] text-primary border-2 border-[#c09635] text-lg py-6"
                    onClick={handleAddToCart}
                    data-testid="button-add-to-cart"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
