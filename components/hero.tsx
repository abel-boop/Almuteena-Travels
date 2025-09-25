"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, Globe, MapPin, Calendar, Phone, Sparkles, Star } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-emerald-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Mouse-following cursor effect */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl pointer-events-none"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-24 md:py-32"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium">Trusted by 10,000+ Travelers</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Your Gateway to{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Extraordinary
            </motion.span>{" "}
            Journeys
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 text-emerald-200">
              <Globe className="h-5 w-5" />
              <span className="font-medium">ከኢትዮጵያ ወደ ዓለም ዙሪያ - From Ethiopia to the World</span>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Experience seamless travel planning with our expert visa services, luxury accommodations, and curated experiences worldwide. 
            <span className="text-emerald-300 font-medium"> ከአዲስ አበባ - from Addis Ababa</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 group shadow-2xl hover:shadow-emerald-500/25"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              onClick={() => window.open('https://wa.me/251911289195', '_blank')}
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-medium transition-all duration-300 group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              WhatsApp Chat
            </Button>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.8 },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
          >
            {[
              { icon: Plane, label: "Visa Services", color: "from-blue-400 to-cyan-400", amharic: "ቪዛ አገልግሎት" },
              { icon: Globe, label: "Worldwide Coverage", color: "from-emerald-400 to-teal-400", amharic: "ዓለም አቀፍ አገልግሎት" },
              { icon: MapPin, label: "Local Experts", color: "from-purple-400 to-pink-400", amharic: "የአካባቢ ባለሙያዎች" },
              { icon: Calendar, label: "24/7 Support", color: "from-orange-400 to-red-400", amharic: "24/7 እርዳታ" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" }
                  },
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </motion.div>
                <p className="font-semibold text-lg group-hover:text-emerald-400 transition-colors mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-gray-300 group-hover:text-emerald-300 transition-colors">
                  {item.amharic}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Enhanced WhatsApp Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.a
          href="https://wa.me/251911289195"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group border-2 border-white/20 hover:border-white/40"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path d="M12 2a10 10 0 0 0-9.95 11.54l-1.74 6.35 6.35-1.74A10 10 0 1 0 12 2zm5.5 15.12l-.4.24-2.23-.59a.75.75 0 0 0-.71.2l-1.06 1.07c-.17.18-.4.27-.62.27-.1 0-.2-.02-.3-.05a8.5 8.5 0 0 1-4.64-3.97 8.3 8.3 0 0 1-1.13-4.2c0-2.34 1.21-4.54 3.2-6.12a7.8 7.8 0 0 1 4.75-1.43c2.18 0 4.23.84 5.77 2.37a8.1 8.1 0 0 1 2.36 5.77 8.3 8.3 0 0 1-2.6 6.05z"/>
            <path fill="#fff" d="M17.47 15.2l.4-.24c.38-.22.6-.64.52-1.07l-.19-.9a.75.75 0 0 0-.54-.57l-.9-.22a.76.76 0 0 0-.75.2l-.7.7a.76.76 0 0 1-.75.2l-1.6-.43a7.5 7.5 0 0 1-1.5-4.5c0-.57.1-1.13.3-1.67l.4-.9a.75.75 0 0 0-.1-.8l-.5-.6a.76.76 0 0 0-.8-.23l-.9.3a6.8 6.8 0 0 0-2.1 12.4l.4.24 2.23-.6a.75.75 0 0 1 .7.2l1.06 1.07c.17.18.4.27.62.27.1 0 .2 0 .3-.05a8.5 8.5 0 0 0 4.64-3.97 8.3 8.3 0 0 0 1.13-4.2c0-.7-.1-1.4-.3-2.06l-.3-.9a.76.76 0 0 0-.52-.57z"/>
          </motion.svg>
        </motion.a>
      </motion.div>
    </div>
  )
}
