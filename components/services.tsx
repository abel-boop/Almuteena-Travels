'use client';

import { Plane, Hotel, Globe, Briefcase, MapPin, Headset, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: <Plane className="h-8 w-8 text-emerald-500" />,
    title: 'Flight Bookings',
    description: 'Best deals on domestic and international flights with flexible booking options.',
    cta: 'Book Now',
    action: 'flight',
    amharic: 'አየር ማረፊያ ቦታ ማስያዝ'
  },
  {
    icon: <Hotel className="h-8 w-8 text-emerald-500" />,
    title: 'Hotel Reservations',
    description: 'Luxury to budget accommodations worldwide, handpicked for comfort and value.',
    cta: 'Find Stays',
    action: 'hotel',
    amharic: 'ሆቴል ማስያዝ'
  },
  {
    icon: <Globe className="h-8 w-8 text-emerald-500" />,
    title: 'Visa Assistance',
    description: 'Expert guidance and processing for all your visa requirements.',
    cta: 'Get Help',
    action: 'contact',
    amharic: 'ቪዛ አገልግሎት'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-emerald-500" />,
    title: 'Business Travel',
    description: 'Tailored corporate travel solutions for businesses of all sizes.',
    cta: 'Learn More',
    action: 'contact',
    amharic: 'ንግድ ጉዞ'
  },
  {
    icon: <MapPin className="h-8 w-8 text-emerald-500" />,
    title: 'Tour Packages',
    description: 'Curated travel experiences to the world\'s most exciting destinations.',
    cta: 'Explore Tours',
    action: 'contact',
    amharic: 'ጉዞ ፓኬጆች'
  },
  {
    icon: <Headset className="h-8 w-8 text-emerald-500" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs and emergencies.',
    cta: 'Contact Us',
    action: 'whatsapp',
    amharic: '24/7 እርዳታ'
  }
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceAction = (action: string) => {
    switch (action) {
      case 'flight':
        // Open flight booking modal
        const flightEvent = new CustomEvent('openFlightForm');
        window.dispatchEvent(flightEvent);
        break;
      case 'hotel':
        // Open hotel booking modal
        const hotelEvent = new CustomEvent('openHotelForm');
        window.dispatchEvent(hotelEvent);
        break;
      case 'contact':
        // Navigate to contact page
        window.location.href = '/contact';
        break;
      case 'whatsapp':
        // Open WhatsApp
        window.open('https://wa.me/251911289195', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full px-4 py-1.5 text-sm font-medium mb-4"
          >
            <Sparkles className="h-4 w-4" />
            What We Offer
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive travel solutions tailored to your unique needs and preferences.
            <span className="block mt-2 text-emerald-600 font-medium">ከአዲስ አበባ የምንሰራ - Operating from Addis Ababa</span>
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            show: { 
              opacity: 1, 
              transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{ 
                hidden: { opacity: 0, y: 30, scale: 0.9 }, 
                show: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: 'easeOut' }
                } 
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group"
            >
              <div 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 h-full flex flex-col group-hover:-translate-y-2"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                  {service.amharic}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  onClick={() => handleServiceAction(service.action)}
                  variant="outline" 
                  className="text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 w-full"
                >
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button 
            onClick={() => window.location.href = '/contact'}
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-medium shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 group"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
