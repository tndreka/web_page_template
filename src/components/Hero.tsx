import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Package, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    title: 'Ihr Umzug ohne Stress',
    subtitle: 'Professionell. Zuverlässig. Effizient.',
    icon: <Truck className="w-8 h-8" />
  },
  {
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&q=80',
    title: 'Experten für Ihren Umzug',
    subtitle: 'Über 15 Jahre Erfahrung',
    icon: <Package className="w-8 h-8" />
  },
  {
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1920&q=80',
    title: 'Komplettservice',
    subtitle: 'Von der Planung bis zur Ausführung',
    icon: <Calendar className="w-8 h-8" />
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10 }}
                loading="lazy"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
                <motion.div
                  className="container px-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="mb-6 flex justify-center"
                  >
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                      {slide.icon}
                    </div>
                  </motion.div>
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="inline-block px-6 py-2 bg-accent/90 text-white rounded-full mb-4 text-sm backdrop-blur-sm"
                  >
                    Willkommen bei Umzug Meister
                  </motion.span>
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl text-white/90 mb-8"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.9 }}
                    className="button-primary backdrop-blur-sm"
                  >
                    Kostenlos anfragen
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;