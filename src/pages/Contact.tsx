import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Navigation from '../components/Navigation';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive"
      });
      return;
    }

    // Simulated form submission
    toast({
      title: "Nachricht gesendet!",
      description: "Wir werden uns in Kürze bei Ihnen melden.",
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: "Telefon", 
      content: "+49 123 456 789", 
      color: "from-purple-500 to-pink-500" 
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: "Email", 
      content: "info@umzug-meister.de", 
      color: "from-pink-500 to-rose-500" 
    },
    { 
      icon: <MapPin className="w-6 h-6" />, 
      title: "Adresse", 
      content: "Musterstraße 123, 12345 Berlin", 
      color: "from-rose-500 to-purple-500" 
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
      title: "Chat", 
      content: "Live Chat verfügbar", 
      color: "from-purple-500 to-pink-500" 
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wir sind für Sie da und freuen uns auf Ihre Nachricht
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-panel overflow-hidden">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Ihr Name"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Ihre Email"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2">Nachricht</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Ihre Nachricht"
                      required
                    ></textarea>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full button-primary flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Nachricht senden
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-panel flex items-center space-x-4 p-6 rounded-lg"
              >
                <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;