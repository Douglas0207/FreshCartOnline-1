import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";
import { useState } from "react";

export default function Products() {
  const [filter, setFilter] = useState<"all" | "exotic" | "seasonal">("all");
  
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products?.filter((product) => {
    if (filter === "all") return true;
    return product.category === filter;
  }) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              Our Products
            </h1>
            <p className="text-center text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Browse our premium selection of exotic and seasonal fruits
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                data-testid="button-filter-all"
              >
                All Products
              </Button>
              <Button
                variant={filter === "exotic" ? "default" : "outline"}
                onClick={() => setFilter("exotic")}
                data-testid="button-filter-exotic"
              >
                Exotic Fruits
              </Button>
              <Button
                variant={filter === "seasonal" ? "default" : "outline"}
                onClick={() => setFilter("seasonal")}
                data-testid="button-filter-seasonal"
              >
                Seasonal Fruits
              </Button>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
