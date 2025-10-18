import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 bg-background">
        <div className="text-center max-w-md px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Search className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="font-serif text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. 
            It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" data-testid="button-home">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" data-testid="button-products">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
