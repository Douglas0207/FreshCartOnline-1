import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Quality First",
    description: "We source only the finest exotic fruits from trusted farms worldwide, ensuring freshness and superior taste.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We're committed to providing exceptional service and support.",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description: "Years of experience in wholesale fruit distribution make us your reliable partner for all fruit needs.",
  },
  {
    icon: Heart,
    title: "Passion for Fruits",
    description: "Our love for exotic fruits drives us to discover and deliver the most unique varieties to your door.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Alice Fruits
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for premium exotic and seasonal fruits, 
              delivering freshness and quality with every order.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Alice Fruits is a premier wholesale dealer specializing in exotic and seasonal fruits. 
                    We've built our reputation on delivering the highest quality fruits from around the 
                    world directly to your doorstep.
                  </p>
                  <p>
                    Our passion for exceptional produce drives us to carefully select each fruit, ensuring 
                    that only the freshest and most flavorful varieties reach our customers. Whether you're 
                    looking for everyday favorites or rare exotic delicacies, we've got you covered.
                  </p>
                  <p>
                    With our convenient home delivery service and competitive wholesale pricing, we make it 
                    easy for families and businesses alike to enjoy premium quality fruits without compromise.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="hover-elevate">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-[#d4a645] mb-2">100+</div>
                      <div className="text-sm text-muted-foreground">Happy Customers</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-elevate">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-[#d4a645] mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Fruit Varieties</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-elevate">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-[#d4a645] mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Customer Support</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-elevate">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-[#d4a645] mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Fresh Guarantee</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#d4a645]/10 mb-4">
                      <value.icon className="h-7 w-7 text-[#d4a645]" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Choose Us?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We're not just a fruit supplier – we're your partner in healthy living. Our commitment 
                to quality, reliability, and customer satisfaction sets us apart. Every fruit is 
                hand-picked and quality-checked to ensure you receive only the best.
              </p>
              <p className="text-[#d4a645] text-xl font-serif font-semibold">
                Exotic fruits & Wholesale Dealer
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
