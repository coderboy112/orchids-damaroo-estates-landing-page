"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Listings", href: "#sell" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Home className="h-5 w-5 text-primary" />
          </div>
          <span className="font-serif text-xl font-medium tracking-tight text-foreground">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={(e) => {
              // Create a synthetic event object that matches React.MouseEvent<HTMLAnchorElement>
              const syntheticEvent = {
                ...e,
                preventDefault: () => {},
              } as unknown as React.MouseEvent<HTMLAnchorElement>;
              scrollToSection(syntheticEvent, "#contact");
            }}
            className="rounded-full px-6 font-medium"
          >
            Schedule a Visit
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <div className="flex flex-col gap-8 mt-10">
              <Link
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="flex items-center gap-2"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <span className="font-serif text-xl font-medium tracking-tight">
                  {BRAND.name}
                </span>
              </Link>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/50 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  onClick={(e) => {
                     const syntheticEvent = {
                        ...e,
                        preventDefault: () => {},
                      } as unknown as React.MouseEvent<HTMLAnchorElement>;
                      scrollToSection(syntheticEvent, "#contact");
                  }}
                  className="mt-4 w-full rounded-full"
                >
                  Schedule a Visit
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
