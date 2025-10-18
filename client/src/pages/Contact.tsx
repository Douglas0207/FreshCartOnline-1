import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions? We're here to help! Reach out to us anytime.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#d4a645]/10 mb-4">
                    <Phone className="h-7 w-7 text-[#d4a645]" />
                  </div>
                  <h3 className="font-semibold mb-3">Call Us</h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:9566461298" 
                      className="block text-muted-foreground hover:text-[#d4a645] transition-colors"
                      data-testid="link-phone-1"
                    >
                      9566461298
                    </a>
                    <a 
                      href="tel:7305455757" 
                      className="block text-muted-foreground hover:text-[#d4a645] transition-colors"
                      data-testid="link-phone-2"
                    >
                      7305455757
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#d4a645]/10 mb-4">
                    <Mail className="h-7 w-7 text-[#d4a645]" />
                  </div>
                  <h3 className="font-semibold mb-3">Email</h3>
                  <a 
                    href="mailto:alice.fruitss@example.com" 
                    className="text-muted-foreground hover:text-[#d4a645] transition-colors"
                    data-testid="link-email"
                  >
                    alice.fruitss@example.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#d4a645]/10 mb-4">
                    <MapPin className="h-7 w-7 text-[#d4a645]" />
                  </div>
                  <h3 className="font-semibold mb-3">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Serving customers nationwide with fresh delivery
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#d4a645]/10 mb-4">
                    <Clock className="h-7 w-7 text-[#d4a645]" />
                  </div>
                  <h3 className="font-semibold mb-3">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 8AM - 8PM
                    <br />
                    Sunday: 9AM - 6PM
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl font-bold mb-4">Connect With Us</h2>
                    <p className="text-muted-foreground">
                      Follow us on social media for updates, special offers, and fruit inspiration!
                    </p>
                  </div>

                  <div className="flex justify-center gap-4 mb-8">
                    <a
                      href="https://instagram.com/alice.fruitss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card hover-elevate active-elevate-2 border border-card-border"
                      data-testid="link-instagram-card"
                    >
                      <SiInstagram className="h-12 w-12 text-[#d4a645]" />
                      <div className="text-center">
                        <div className="font-semibold">Instagram</div>
                        <div className="text-sm text-muted-foreground">@alice.fruitss</div>
                      </div>
                    </a>

                    <a
                      href="https://facebook.com/alice.fruitss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card hover-elevate active-elevate-2 border border-card-border"
                      data-testid="link-facebook-card"
                    >
                      <SiFacebook className="h-12 w-12 text-[#d4a645]" />
                      <div className="text-center">
                        <div className="font-semibold">Facebook</div>
                        <div className="text-sm text-muted-foreground">@alice.fruitss</div>
                      </div>
                    </a>
                  </div>

                  <div className="bg-[#d4a645]/5 rounded-lg p-6 text-center">
                    <h3 className="font-semibold mb-2">Have a question about wholesale orders?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Our team is ready to help you with bulk orders and special requests.
                      Call us today for competitive wholesale pricing!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a 
                        href="tel:9566461298" 
                        className="inline-flex items-center gap-2 text-[#d4a645] font-semibold hover:underline"
                      >
                        <Phone className="h-4 w-4" />
                        9566461298
                      </a>
                      <span className="text-muted-foreground">or</span>
                      <a 
                        href="tel:7305455757" 
                        className="inline-flex items-center gap-2 text-[#d4a645] font-semibold hover:underline"
                      >
                        <Phone className="h-4 w-4" />
                        7305455757
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
