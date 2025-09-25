'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Users, Star, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    name: 'Dubai, UAE',
    description: 'Experience the luxury and modern architecture of Dubai, where the future meets tradition.',
    images: [
      '/dubai1.jpeg',
      '/dubai2.jpeg',
      '/dubai3.jpeg',
      '/dubai4.jpg',
      '/dubai5.jpg',
      '/dubai6.jpeg',
      '/dubai7.jpeg',
      '/dubai8.jpg',
      '/dubai9.jpg',
      '/dubai10.jpg'
    ],
    facts: [
      'Home to the world\'s tallest building, the Burj Khalifa (828m)',
      'Has the world\'s largest shopping mall by total area',
      'Features the only 7-star hotel in the world, Burj Al Arab',
      '25% of the world\'s cranes are in Dubai at any given time'
    ],
    price: 'From $1,200',
    duration: '5-7 days',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Johannesburg, South Africa',
    description: 'Discover the vibrant culture and history of South Africa\'s largest city.',
    images: [
      '/johannesburg1.jpeg',
      '/johannesburg2.jpg',
      '/johannesburg3.jpeg',
      '/johannesburg4.jpg',
      '/johannesburg5.jpeg',
      '/johannesburg6.jpeg'
    ],
    facts: [
      'Home to the Cradle of Humankind, a UNESCO World Heritage Site',
      'One of the 50 largest metropolitan areas in the world',
      'Hosted the 2010 FIFA World Cup',
      'Stands at 1,753 meters (5,751 ft) above sea level'
    ],
    price: 'From $800',
    duration: '4-6 days',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Guangzhou, China',
    description: 'Explore the blend of ancient heritage and modern development in this bustling metropolis.',
    images: [
      '/Guangzhou1.jpeg',
      '/Guangzhou2.jpg',
      '/Guangzhou3.jpg',
      '/Guangzhou4.jpg',
      '/Guangzhou5.jpeg',
      '/Guangzhou6.jpeg',
      '/Guangzhou7.jpg',
      '/Guangzhou8.jpg',
      '/Guangzhou9.jpeg',
      '/Guangzhou10.jpeg'
    ],
    facts: [
      'Known as the "City of Flowers" for its year-round blooms',
      'Hosts the world\'s largest trade fair twice a year',
      'Home to the Canton Tower, one of the tallest structures in the world',
      'Has a history spanning over 2,200 years'
    ],
    price: 'From $600',
    duration: '3-5 days',
    rating: 4.8
  },
];

export default function Destinations() {
  const initialIndices = destinations.reduce<Record<number, number>>((acc, d) => {
    acc[d.id] = 0;
    return acc;
  }, {});

  const [currentImages, setCurrentImages] = useState<Record<number, number>>(initialIndices);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const intervalRefs = useRef<Record<number, NodeJS.Timeout>>({});
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  const nextImage = useCallback((destinationId: number, imageCount: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [destinationId]: (((prev[destinationId] ?? 0) + 1) % imageCount),
    }));
  }, []);

  useEffect(() => {
    destinations.forEach(destination => {
      if (destination.images) {
        if (intervalRefs.current[destination.id]) {
          clearInterval(intervalRefs.current[destination.id]);
        }
        
        intervalRefs.current[destination.id] = setInterval(() => {
          if (hoveredCard !== destination.id) {
            nextImage(destination.id, destination.images.length);
          }
        }, 3000);
      }
    });

    return () => {
      Object.values(intervalRefs.current).forEach(interval => clearInterval(interval));
    };
  }, [hoveredCard, nextImage]);

  const handleBookNow = (destination: typeof destinations[0]) => {
    const message = `🌍 *Travel Package Inquiry*

📍 *Destination:* ${destination.name}
💰 *Price:* ${destination.price}
📅 *Duration:* ${destination.duration}
⭐ *Rating:* ${destination.rating}/5

I'm interested in booking a trip to ${destination.name}. Please provide more details about available packages and pricing.

Thank you!`;

    const whatsappUrl = `https://wa.me/251911289195?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div style={{ y }} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full px-4 py-1.5 text-sm font-medium mb-4"
          >
            <MapPin className="h-4 w-4" />
            Featured Destinations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Featured</span> Destinations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4"
          >
            Discover amazing places around the world with our expert guides and curated experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full px-4 py-2 text-sm font-medium"
          >
            <Globe className="h-4 w-4" />
            <span>ከኢትዮጵያ ወደ ዓለም ዙሪያ - From Ethiopia to the World</span>
          </motion.div>
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
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={{ 
                hidden: { opacity: 0, y: 30, scale: 0.9 }, 
                show: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: 'easeOut' }
                } 
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card 
                className="h-full overflow-hidden transition-all duration-500 hover:shadow-2xl dark:hover:shadow-gray-700 flex flex-col group-hover:scale-105 hover:ring-2 hover:ring-emerald-500/40"
                onMouseEnter={() => destination.images && setHoveredCard(destination.id)}
                onMouseLeave={() => destination.images && setHoveredCard(null)}
              >
                <div className="relative h-64 w-full overflow-hidden -mt-6 rounded-t-xl">
                  {destination.images ? (
                    <>
                      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                        <Image
                          src={destination.images[(currentImages[destination.id] ?? 0)]}
                          alt={`${destination.name} - Image ${(currentImages[destination.id] ?? 0) + 1}`}
                          fill
                          className="object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                          priority={destination.id === 1}
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 pointer-events-none" />
                      
                      {/* Floating badge */}
                      <div className="absolute left-3 top-3">
                        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-900 dark:text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {destination.name}
                        </div>
                      </div>

                      {/* Rating badge */}
                      <div className="absolute right-3 top-3">
                        <div className="bg-emerald-500 text-white rounded-full px-2 py-1 text-xs font-medium flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          {destination.rating}
                        </div>
                      </div>

                      {/* Image counter */}
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {(currentImages[destination.id] ?? 0) + 1} / {destination.images.length}
                      </div>
                    </>
                  ) : (
                    <Image
                      src={(destination as any).image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {destination.name}
                    </h3>
                    <div className="text-right">
                      <p className="text-lg font-bold text-emerald-600">{destination.price}</p>
                      <p className="text-sm text-gray-500">{destination.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {destination.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      Did you know?
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {destination.facts.slice(0, 2).map((fact, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                          className="flex items-start"
                        >
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>{fact}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleBookNow(destination)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300"
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.open('https://wa.me/251911289195', '_blank')}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-emerald-600 hover:from-blue-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-medium shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
          >
            Explore All Destinations
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
