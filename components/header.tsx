"use client"

import { Button } from "@/components/ui/button"
import { Plane, Phone, Hotel, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { packages } from "@/data/packages"
import { services } from "@/data/services"
import HotelBookingForm from "./forms/HotelBookingForm"
import FlightBookingForm from "./forms/FlightBookingForm"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHotelFormOpen, setIsHotelFormOpen] = useState(false)
  const [isFlightFormOpen, setIsFlightFormOpen] = useState(false)

  useEffect(() => {
    const handleOpenHotelForm = () => setIsHotelFormOpen(true)
    const handleOpenFlightForm = () => setIsFlightFormOpen(true)

    window.addEventListener('openHotelForm', handleOpenHotelForm)
    window.addEventListener('openFlightForm', handleOpenFlightForm)

    return () => {
      window.removeEventListener('openHotelForm', handleOpenHotelForm)
      window.removeEventListener('openFlightForm', handleOpenFlightForm)
    }
  }, [])

  return (
    <>
      <header className="bg-white/90 backdrop-blur-xl shadow-xl relative z-50 border-b border-amber-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.jpg"
                  alt="Almuteena Tours & Travel - Your Trusted Travel Partner"
                  width={70}
                  height={70}
                  priority
                  className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-sky-600 bg-clip-text text-transparent">
                    Almuteena
                  </span>
                  <span className="text-sm md:text-base font-medium text-stone-600">
                    Tours & Travel
                  </span>
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-10">
              <Link
                href="/"
                className="text-stone-700 hover:text-amber-600 font-medium transition-all duration-300 relative group py-2"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-amber-500 transition-all duration-300 delay-100 group-hover:w-full"></span>
              </Link>
              <a
                href="#about"
                className="text-stone-700 hover:text-amber-600 font-medium transition-all duration-300 relative group py-2"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <div className="relative">
                <button
                  onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                  className="text-stone-700 hover:text-amber-600 font-medium flex items-center transition-all duration-300 relative group py-2"
                >
                  Packages
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-all duration-300 ${isPackagesOpen ? "rotate-180 text-amber-600" : "group-hover:translate-y-0.5"}`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isPackagesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-100/60 py-6 z-50 animate-slide-down">
                    <div className="px-6 pb-4">
                      <h3 className="font-serif text-lg font-medium text-stone-900">Popular Packages</h3>
                      <p className="text-sm text-stone-600 mt-1">Curated experiences for every traveler</p>
                    </div>
                    {packages.slice(0, 4).map((pkg, index) => (
                      <a
                        key={pkg.id}
                        href="#"
                        className="flex items-center px-6 py-4 hover:bg-amber-50/60 transition-all duration-300 group/item"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg">
                          <span className="text-amber-600 text-xl transition-transform duration-300 group-hover/item:scale-110">
                            {pkg.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-stone-900 text-base group-hover/item:text-amber-600 transition-colors duration-300">
                            {pkg.name}
                          </p>
                          <p className="text-stone-500 text-sm mt-1">
                            {pkg.duration} • From <span className="font-semibold text-amber-600">${pkg.price}</span>
                          </p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-stone-400 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                      </a>
                    ))}
                    <div className="border-t border-amber-100/60 mt-4 pt-4 px-6">
                      <a
                        href="#"
                        className="text-amber-600 font-medium hover:text-amber-700 transition-colors duration-300 flex items-center group/link"
                      >
                        View all packages
                        <ChevronDown className="w-4 h-4 ml-1 -rotate-90 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-stone-700 hover:text-amber-600 font-medium flex items-center transition-all duration-300 relative group py-2"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-all duration-300 ${isServicesOpen ? "rotate-180 text-amber-600" : "group-hover:translate-y-0.5"}`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-100/60 py-6 z-50 animate-slide-down">
                    <div className="px-6 pb-4">
                      <h3 className="font-serif text-lg font-medium text-stone-900">Our Services</h3>
                      <p className="text-sm text-stone-600 mt-1">Comprehensive travel solutions</p>
                    </div>
                    {services.map((service, index) => (
                      <a
                        key={service.id}
                        href="#"
                        className="flex items-center px-6 py-4 hover:bg-amber-50/60 transition-all duration-300 group/item"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover/item:scale-110">
                          <span className="text-amber-700 text-lg transition-transform duration-300 group-hover/item:scale-110">
                            {service.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-stone-900 group-hover/item:text-amber-600 transition-colors duration-300">
                            {service.name}
                          </p>
                          <p className="text-stone-500 text-sm mt-1">{service.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-amber-500 to-sky-600 hover:from-amber-600 hover:to-sky-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <Phone className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  Get In Touch
                </Button>
              </Link>
              <Button
                onClick={() => setIsHotelFormOpen(true)}
                variant="outline"
                className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 px-6 py-3 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm hover:scale-105 group"
              >
                <Hotel className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Book a Hotel
              </Button>
              <Button 
                onClick={() => setIsFlightFormOpen(true)}
                className="bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Plane className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Book a Flight
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-amber-600 font-medium">
                  Home
                </Link>
                <a href="#about" className="block text-gray-700 hover:text-amber-600 font-medium">
                  About
                </a>
                <a href="#packages" className="block text-gray-700 hover:text-amber-600 font-medium">
                  Packages
                </a>
                <a href="#services" className="block text-gray-700 hover:text-amber-600 font-medium">
                  Services
                </a>
                <div className="pt-4 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Button>
                  </Link>
                  <Button
                    onClick={() => setIsHotelFormOpen(true)}
                    variant="outline"
                    className="w-full border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
                  >
                    <Hotel className="w-4 h-4 mr-2" />
                    Book a Hotel
                  </Button>
                  <Button 
                    onClick={() => setIsFlightFormOpen(true)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Plane className="w-4 h-4 mr-2" />
                    Book a Flight
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {(isPackagesOpen || isServicesOpen) && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => {
              setIsPackagesOpen(false)
              setIsServicesOpen(false)
            }}
          />
        )}
      </header>

      {/* Hotel Booking Modal */}
      {isHotelFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <HotelBookingForm onClose={() => setIsHotelFormOpen(false)} />
          </div>
        </div>
      )}

      {/* Flight Booking Modal */}
      {isFlightFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <FlightBookingForm onClose={() => setIsFlightFormOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
