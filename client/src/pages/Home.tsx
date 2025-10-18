import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

export default function Home() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const featuredProducts = products?.slice(0, 4) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FeaturesSection />

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our selection of premium exotic fruits
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="text-center">
                <Link href="/products">
                  <Button 
                    size="lg" 
                    className="bg-[#d4a645] hover:bg-[#d4a645] text-primary border-2 border-[#c09635] px-8"
                    data-testid="button-view-all"
                  >
                    View All Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Get fresh exotic fruits delivered to your doorstep. 
            Browse our collection and place your order today!
          </p>
          <Link href="/products">
            <Button 
              size="lg" 
              className="bg-[#d4a645] hover:bg-[#d4a645] text-primary border-2 border-[#c09635] text-lg px-8 py-6 rounded-full font-semibold"
              data-testid="button-shop-now"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
}
