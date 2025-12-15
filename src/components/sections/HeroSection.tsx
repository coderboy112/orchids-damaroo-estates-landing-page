"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/config/brand";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=2088&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <section ref={containerRef} id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Carousel */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
             <img 
               src={HERO_IMAGES[currentImageIndex]} 
               alt="Luxury Real Estate" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/40" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-medium leading-[1.1] text-white tracking-tight drop-shadow-lg">
              Find your next address with <span className="text-primary-foreground italic font-light">quiet confidence.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-xl leading-relaxed font-light drop-shadow-md">
              Experience a curated collection of premium properties. {BRAND.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#sell')}
                className="rounded-full px-10 text-lg h-14 bg-white text-black hover:bg-white/90 shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View Listings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('#contact')}
                className="rounded-full px-10 text-lg h-14 border-white text-white hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all duration-300"
              >
                Book a Visit
              </Button>
            </div>
            
            <div className="flex items-center gap-10 mt-10 pt-10 border-t border-white/20">
              <div>
                <p className="font-serif text-4xl font-medium text-white">250+</p>
                <p className="text-sm text-white/80 uppercase tracking-wider mt-1">Homes Sold</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <p className="font-serif text-4xl font-medium text-white">15+</p>
                <p className="text-sm text-white/80 uppercase tracking-wider mt-1">Years Exp.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - kept empty for view but with floating elements */}
          <div className="hidden lg:flex relative h-full min-h-[500px] items-center justify-center">
            {/* Floating Stats Cards - Repositioned */}
             <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute right-0 top-20 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-2xl max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-green-500/20 rounded-full text-green-300">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/80 uppercase tracking-wide">Rating</p>
                  <p className="text-xl font-bold text-white">4.9/5.0</p>
                </div>
              </div>
              <p className="text-xs text-white/60">Trusted by over 500+ happy families this year</p>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute right-10 bottom-20 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-2xl"
            >
               <div className="flex items-center gap-4">
                 <div className="p-2 bg-primary/20 rounded-full text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                 </div>
                 <div>
                   <p className="text-xs font-medium text-white/80 uppercase tracking-wide">New Listing</p>
                   <p className="text-lg font-semibold text-white">Beverly Hills, CA</p>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}