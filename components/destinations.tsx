'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

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
    ]
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
    ]
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
    ]
  },
];

export default function Destinations() {
  const initialIndices = destinations.reduce<Record<number, number>>((acc, d) => {
    acc[d.id] = 0;
    return acc;
  }, {});

  const [currentImages, setCurrentImages] = useState<Record<number, number>>(initialIndices);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Create a ref to store the interval IDs
  const intervalRefs = useRef<Record<number, NodeJS.Timeout>>({});

  // Function to handle image change for a specific destination
  const nextImage = useCallback((destinationId: number, imageCount: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [destinationId]: (((prev[destinationId] ?? 0) + 1) % imageCount),
    }));
  }, []);

  // Set up intervals for each destination with images
  useEffect(() => {
    destinations.forEach(destination => {
      if (destination.images) {
        // Clear existing interval if any
        if (intervalRefs.current[destination.id]) {
          clearInterval(intervalRefs.current[destination.id]);
        }
        
        // Set up new interval
        intervalRefs.current[destination.id] = setInterval(() => {
          if (hoveredCard !== destination.id) {
            nextImage(destination.id, destination.images.length);
          }
        }, 3000);
      }
    });

    // Clean up intervals on unmount
    return () => {
      Object.values(intervalRefs.current).forEach(interval => clearInterval(interval));
    };
  }, [hoveredCard, nextImage]);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Our Featured Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 }}
            className="mt-4 text-xl text-gray-500 dark:text-gray-400"
          >
            Discover amazing places around the world with our expert guides
          </motion.p>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
            >
              <Card 
                className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700 flex flex-col group hover:ring-1 hover:ring-emerald-500/40"
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
                          className="object-cover transition-all duration-1000 ease-in-out group-hover:scale-105"
                          priority={destination.id === 1} // Only prioritize first destination for performance
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      {/* Gradient overlay and badge */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-90 pointer-events-none" />
                      <div className="absolute left-3 top-3">
                        <span className="inline-flex items-center rounded-full bg-white/85 dark:bg-gray-900/70 px-3 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          {destination.name}
                        </span>
                      </div>
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
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {destination.description}
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Did you know?</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {destination.facts.map((fact, index) => (
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
