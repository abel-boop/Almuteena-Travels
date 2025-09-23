'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Frequent Traveler',
    content: 'The visa processing was incredibly smooth and fast. The team was always available to answer my questions and made my trip planning stress-free!',
    rating: 5,
    image: '/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Executive',
    content: 'Professional service from start to finish. They handled all our corporate travel needs with precision and care. Highly recommended!',
    rating: 5,
    image: '/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Amina Al-Mansoori',
    role: 'Family Traveler',
    content: 'Traveling with family was never this easy. They took care of every detail, from flights to activities. The kids had a blast!',
    rating: 4,
    image: '/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Adventure Seeker',
    content: 'The tour guides were knowledgeable and the experiences were unforgettable. Will definitely book my next adventure with them!',
    rating: 5,
    image: '/testimonial-4.jpg'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 text-emerald-50 dark:text-emerald-900/20">
              <Quote className="h-32 w-32 -mt-8 -mr-8" />
            </div>
            
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill={i < testimonials[currentIndex].rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden">
                  <div className="h-full w-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-emerald-600 dark:text-emerald-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-emerald-600 w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
