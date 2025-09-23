'use client';

import { Plane, Hotel, Globe, Briefcase, MapPin, Headset } from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Plane className="h-8 w-8 text-emerald-500" />,
    title: 'Flight Bookings',
    description: 'Best deals on domestic and international flights with flexible booking options.',
    cta: 'Book Now'
  },
  {
    icon: <Hotel className="h-8 w-8 text-emerald-500" />,
    title: 'Hotel Reservations',
    description: 'Luxury to budget accommodations worldwide, handpicked for comfort and value.',
    cta: 'Find Stays'
  },
  {
    icon: <Globe className="h-8 w-8 text-emerald-500" />,
    title: 'Visa Assistance',
    description: 'Expert guidance and processing for all your visa requirements.',
    cta: 'Get Help'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-emerald-500" />,
    title: 'Business Travel',
    description: 'Tailored corporate travel solutions for businesses of all sizes.',
    cta: 'Learn More'
  },
  {
    icon: <MapPin className="h-8 w-8 text-emerald-500" />,
    title: 'Tour Packages',
    description: 'Curated travel experiences to the world\'s most exciting destinations.',
    cta: 'Explore Tours'
  },
  {
    icon: <Headset className="h-8 w-8 text-emerald-500" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs and emergencies.',
    cta: 'Contact Us'
  }
];

export default function Services() {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive travel solutions tailored to your unique needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <Button 
                variant="outline" 
                className="text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-medium"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
