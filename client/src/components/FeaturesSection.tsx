import { Truck, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Hand-picked exotic and seasonal fruits sourced from the finest farms worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Wholesale Pricing",
    description: "Competitive wholesale rates for bulk orders without compromising on quality.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Fresh fruits delivered straight to your doorstep with care and convenience.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Alice Fruits?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the finest selection of exotic fruits with unmatched service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4a645]/10 mb-6">
                  <feature.icon className="h-8 w-8 text-[#d4a645]" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
