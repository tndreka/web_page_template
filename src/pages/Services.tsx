import { motion } from 'framer-motion';
import { Package2, Truck, Box, Shield, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Umzugsservice",
      description: "Professioneller Umzugsservice für Privat- und Geschäftskunden",
      details: ["Komplette Haushaltsumzüge", "Büroumzüge", "Internationale Umzüge"]
    },
    {
      icon: <Box className="w-12 h-12" />,
      title: "Verpackungsservice",
      description: "Sorgfältiges Verpacken und Auspacken Ihrer Gegenstände",
      details: ["Professionelles Verpackungsmaterial", "Sichere Verpackung", "Auspacken am Zielort"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Lagerung",
      description: "Sichere Lagerung Ihrer Möbel und Gegenstände",
      details: ["Klimatisierte Lagerräume", "24/7 Überwachung", "Flexible Lagerzeiten"]
    },
    {
      icon: <Package2 className="w-12 h-12" />,
      title: "Spezialverpackung",
      description: "Besondere Verpackung für empfindliche Gegenstände",
      details: ["Kunsttransport", "Antiquitäten", "Musikinstrumente"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 pt-24 pb-12"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Unsere Dienstleistungen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professionelle Umzugslösungen für jeden Bedarf
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-lg overflow-hidden"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-none">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-primary"
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    className="mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full button-primary">
                      Kostenlos anfragen
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;