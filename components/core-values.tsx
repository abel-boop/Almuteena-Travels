'use client';

import { CheckCircle } from 'lucide-react';

const values = [
  {
    title: 'Expert Guidance',
    description: 'Our experienced team provides personalized travel advice and visa assistance to ensure a smooth journey.'
  },
  {
    title: 'Global Network',
    description: 'With partners worldwide, we offer exclusive access to premium accommodations and experiences.'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance to handle any travel emergencies or changes to your itinerary.'
  },
  {
    title: 'Competitive Pricing',
    description: 'Enjoy the best value with our competitive rates and exclusive deals on flights and accommodations.'
  },
  {
    title: 'Cultural Insight',
    description: 'Gain deeper cultural understanding with our local experts who know the hidden gems of each destination.'
  },
  {
    title: 'Hassle-Free Experience',
    description: 'From visa processing to itinerary planning, we handle all the details so you can focus on your journey.'
  }
];

export default function CoreValues() {
  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            Core Values We Offer
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence ensures you receive the highest quality travel experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
