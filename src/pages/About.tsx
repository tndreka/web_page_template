import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart, CheckCircle, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "1000+", label: "Zufriedene Kunden" },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Jahre Erfahrung" },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Kundenservice" },
    { icon: <Heart className="w-8 h-8" />, value: "100%", label: "Kundenzufriedenheit" }
  ];

  const values = [
    { title: "Qualität", description: "Höchste Standards bei jedem Umzug" },
    { title: "Zuverlässigkeit", description: "Pünktlich und planmäßig" },
    { title: "Sicherheit", description: "Ihr Eigentum in sicheren Händen" },
    { title: "Service", description: "Kundenorientiert und freundlich" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-teal-50"
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-teal-600">
            Über Umzug Meister
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seit über 15 Jahren sind wir Ihr vertrauenswürdiger Partner für stressfreie Umzüge in ganz Deutschland.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <Card className="text-center p-6 glass-panel">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary mb-4 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-teal-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Unsere Geschichte</h2>
            <p className="text-gray-600 leading-relaxed">
              Seit unserer Gründung im Jahr 2009 haben wir uns kontinuierlich weiterentwickelt und sind zu einem der führenden Umzugsunternehmen in Deutschland geworden. Unser Erfolg basiert auf der Zufriedenheit unserer Kunden und unserem Engagement für qualitativ hochwertige Dienstleistungen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel p-4 rounded-lg"
              >
                <Star className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-bold mb-1">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;