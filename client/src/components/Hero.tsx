import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-5xl md:text-7xl font-serif font-bold text-[#d4a645]">
              alice
            </span>
            <Leaf className="h-8 w-8 md:h-12 md:w-12 text-primary-foreground" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Fresh Exotic Fruits
            <br />
            Delivered to Your Door
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium exotic and seasonal fruits from around the world. 
            Wholesale pricing available for all your fruit needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-[#d4a645] text-primary hover:bg-[#d4a645] border-2 border-[#c09635] text-lg px-8 py-6 rounded-full font-semibold shadow-lg"
                data-testid="button-order-now"
              >
                ORDER NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="backdrop-blur-sm bg-primary-foreground/20 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 text-lg px-8 py-6 rounded-full font-semibold"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
