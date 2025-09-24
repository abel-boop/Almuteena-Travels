"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, Globe, MapPin, Calendar, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-900 to-emerald-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Your Gateway to <span className="text-emerald-400">Extraordinary</span> Journeys
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Experience seamless travel planning with our expert visa services, luxury accommodations, and curated experiences worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
          >
            {[
              { icon: Plane, label: "Visa Services" },
              { icon: Globe, label: "Worldwide Coverage" },
              { icon: MapPin, label: "Local Experts" },
              { icon: Calendar, label: "24/7 Support" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <p className="font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/251970692215"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group border-2 border-white/20 hover:border-white/40"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2a10 10 0 0 0-9.95 11.54l-1.74 6.35 6.35-1.74A10 10 0 1 0 12 2zm5.5 15.12l-.4.24-2.23-.59a.75.75 0 0 0-.71.2l-1.06 1.07c-.17.18-.4.27-.62.27-.1 0-.2-.02-.3-.05a8.5 8.5 0 0 1-4.64-3.97 8.3 8.3 0 0 1-1.13-4.2c0-2.34 1.21-4.54 3.2-6.12a7.8 7.8 0 0 1 4.75-1.43c2.18 0 4.23.84 5.77 2.37a8.1 8.1 0 0 1 2.36 5.77 8.3 8.3 0 0 1-2.6 6.05z"/>
            <path fill="#fff" d="M17.47 15.2l.4-.24c.38-.22.6-.64.52-1.07l-.19-.9a.75.75 0 0 0-.54-.57l-.9-.22a.76.76 0 0 0-.75.2l-.7.7a.76.76 0 0 1-.75.2l-1.6-.43a7.5 7.5 0 0 1-1.5-4.5c0-.57.1-1.13.3-1.67l.4-.9a.75.75 0 0 0-.1-.8l-.5-.6a.76.76 0 0 0-.8-.23l-.9.3a6.8 6.8 0 0 0-2.1 12.4l.4.24 2.23-.6a.75.75 0 0 1 .7.2l1.06 1.07c.17.18.4.27.62.27.1 0 .2 0 .3-.05a8.5 8.5 0 0 0 4.64-3.97 8.3 8.3 0 0 0 1.13-4.2c0-.7-.1-1.4-.3-2.06l-.3-.9a.76.76 0 0 0-.52-.57z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
