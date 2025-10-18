import { Phone, Mail, MapPin, Leaf } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-serif font-bold text-[#d4a645]">alice</span>
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-serif text-primary-foreground/80">FRUITS</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted source for premium exotic and seasonal fruits. 
              We deliver fresh, quality fruits right to your doorstep.
            </p>
            <p className="mt-4 text-[#d4a645] font-semibold">
              Exotic fruits & Wholesale Dealer
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" data-testid="footer-link-home">
                <span className="text-primary-foreground/70 hover:text-[#d4a645] text-sm cursor-pointer transition-colors">
                  Home
                </span>
              </Link>
              <Link href="/products" data-testid="footer-link-products">
                <span className="text-primary-foreground/70 hover:text-[#d4a645] text-sm cursor-pointer transition-colors">
                  Products
                </span>
              </Link>
              <Link href="/about" data-testid="footer-link-about">
                <span className="text-primary-foreground/70 hover:text-[#d4a645] text-sm cursor-pointer transition-colors">
                  About Us
                </span>
              </Link>
              <Link href="/contact" data-testid="footer-link-contact">
                <span className="text-primary-foreground/70 hover:text-[#d4a645] text-sm cursor-pointer transition-colors">
                  Contact
                </span>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:9566461298" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-[#d4a645] text-sm transition-colors"
                data-testid="link-phone-1"
              >
                <Phone className="h-4 w-4" />
                <span>9566461298</span>
              </a>
              <a 
                href="tel:7305455757" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-[#d4a645] text-sm transition-colors"
                data-testid="link-phone-2"
              >
                <Phone className="h-4 w-4" />
                <span>7305455757</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail className="h-4 w-4" />
                <span>alice.fruitss@example.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/alice.fruitss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-md bg-primary-foreground/10"
                  data-testid="link-instagram"
                >
                  <SiInstagram className="h-5 w-5 text-[#d4a645]" />
                </a>
                <a
                  href="https://facebook.com/alice.fruitss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-md bg-primary-foreground/10"
                  data-testid="link-facebook"
                >
                  <SiFacebook className="h-5 w-5 text-[#d4a645]" />
                </a>
              </div>
              <p className="mt-2 text-xs text-primary-foreground/60">@alice.fruitss</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Alice Fruits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
