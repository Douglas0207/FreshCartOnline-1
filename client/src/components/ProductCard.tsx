import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus } from "lucide-react";
import type { Product } from "@shared/schema";
import { useCartStore } from "@/lib/cart-store";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    setTimeout(() => {
      openCart();
    }, 500);
  };

  return (
    <Link href={`/products/${product.id}`} data-testid={`link-product-${product.id}`}>
      <Card className="overflow-hidden hover-elevate transition-shadow duration-300 h-full flex flex-col cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-card">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {!product.inStock && (
            <Badge 
              variant="destructive" 
              className="absolute top-3 right-3"
            >
              Out of Stock
            </Badge>
          )}
          {product.inStock && product.category === "exotic" && (
            <Badge 
              className="absolute top-3 right-3 bg-[#d4a645] text-primary border-[#c09635]"
            >
              Exotic
            </Badge>
          )}
        </div>

        <CardContent className="flex-1 p-4">
          <h3 className="font-serif text-xl font-semibold mb-2 text-foreground" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {product.description}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#d4a645]" data-testid={`text-product-price-${product.id}`}>
              ₹{parseFloat(product.price).toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground">/ {product.unit}</span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full"
            disabled={!product.inStock}
            onClick={handleAddToCart}
            data-testid={`button-add-to-cart-${product.id}`}
          >
            {product.inStock ? (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            ) : (
              "Out of Stock"
            )}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
