'use client';

import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-600 opacity-70 rounded-2xl"></div>
            <div className="absolute inset-0 bg-[url('/team.jpg')] bg-cover bg-center mix-blend-overlay rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2010, Almuteena Travels began as a small family-owned business with a passion for creating unforgettable travel experiences. What started as a modest travel agency has grown into a trusted name in the industry, serving thousands of satisfied customers worldwide.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our journey has been shaped by our commitment to excellence, attention to detail, and deep understanding of our clients' needs. We believe that travel has the power to transform lives, and we're dedicated to making every journey extraordinary.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">10K+</h3>
                <p className="text-gray-600 dark:text-gray-300">Happy Travelers</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">50+</h3>
                <p className="text-gray-600 dark:text-gray-300">Destinations</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">15+</h3>
                <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">24/7</h3>
                <p className="text-gray-600 dark:text-gray-300">Customer Support</p>
              </div>
            </div>

            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
              Learn More About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
