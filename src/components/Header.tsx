import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import logoImage from "@/assets/dose-academy-logo.png";
import { APP_URL } from "@/lib/constants";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="DOSE Academy Logo" 
              className="h-12 w-12"
            />
            <span className="text-xl font-bold text-foreground">DOSE Academy</span>
          </div>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" className="text-foreground" asChild>
              <a href={`${APP_URL}/auth`} target="_blank" rel="noopener noreferrer">Sign In</a>
            </Button>
            <Button variant="brand" asChild>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">Get Started</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={logoImage} alt="DOSE Academy Logo" className="h-10 w-10" />
                    <span className="text-lg font-bold text-foreground">DOSE Academy</span>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-3 mt-4">
                    <Button variant="ghost" className="text-foreground justify-start" asChild>
                      <a href={`${APP_URL}/auth`} target="_blank" rel="noopener noreferrer">Sign In</a>
                    </Button>
                    <Button variant="brand" asChild>
                      <a href={APP_URL} target="_blank" rel="noopener noreferrer">Get Started</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
