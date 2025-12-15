"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/config/brand";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-secondary/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] text-foreground">
              Find your next address with <span className="text-primary italic">quiet confidence.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Experience a curated collection of premium properties. {BRAND.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#sell')}
                className="rounded-full px-8 text-base h-12 shadow-lg shadow-primary/10 hover:shadow-primary/20"
              >
                View Listings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('#contact')}
                className="rounded-full px-8 text-base h-12 border-primary/20 hover:bg-secondary"
              >
                Book a Visit
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-8 pt-8 border-t border-border/50">
              <div>
                <p className="font-serif text-3xl font-medium text-foreground">250+</p>
                <p className="text-sm text-muted-foreground">Homes Sold</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-serif text-3xl font-medium text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </div>
            </div>
          </motion.div>

          {/* Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] md:aspect-square bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 backdrop-blur-sm border border-white/50 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden p-8 flex items-center justify-center group">
              {/* Abstract Building Silhouette SVG */}
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full text-primary/20 group-hover:scale-105 transition-transform duration-700"
                fill="currentColor"
              >
                 <path d="M40 180 L40 60 L100 20 L160 60 L160 180 Z" opacity="0.5" />
                 <path d="M60 180 L60 80 L100 50 L140 80 L140 180 Z" opacity="0.8" />
                 <rect x="75" y="100" width="15" height="20" rx="2" fill="white" fillOpacity="0.6" />
                 <rect x="110" y="100" width="15" height="20" rx="2" fill="white" fillOpacity="0.6" />
                 <rect x="75" y="140" width="15" height="20" rx="2" fill="white" fillOpacity="0.6" />
                 <rect x="110" y="140" width="15" height="20" rx="2" fill="white" fillOpacity="0.6" />
              </svg>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl border border-border/50 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Client Rating</p>
                  <p className="text-sm font-bold">4.9/5.0</p>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground">Based on 500+ reviews</p>
            </motion.div>

            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute top-10 -right-4 md:top-20 md:-right-8 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl border border-border/50"
            >
               <div className="flex items-center gap-2">
                 <div className="p-1.5 bg-primary/10 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                 </div>
                 <div>
                   <p className="text-xs font-medium text-muted-foreground">New Listing</p>
                   <p className="text-sm font-semibold">Beverly Hills</p>
                 </div>
               </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
