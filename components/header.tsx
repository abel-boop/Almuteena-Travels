"use client"

import { Button } from "@/components/ui/button"
import { Plane, Phone, Hotel, ChevronDown, Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"
import { packages } from "@/data/packages"
import { services } from "@/data/services"

export default function Header() {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-xl shadow-xl relative z-50 border-b border-rose-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden">
                  <Plane className="w-6 h-6 text-white transform rotate-45 transition-transform duration-300 group-hover:rotate-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg animate-pulse">
                <Sparkles className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="text-3xl font-serif font-light bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent tracking-wide">
                ALMUTEENA
              </h1>
              <p className="text-sm text-stone-600 font-medium -mt-1 tracking-wider">Tour & Travel</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            <a
              href="#"
              className="text-stone-700 hover:text-rose-600 font-medium transition-all duration-300 relative group py-2"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300 delay-100 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-stone-700 hover:text-rose-600 font-medium transition-all duration-300 relative group py-2"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="relative">
              <button
                onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                className="text-stone-700 hover:text-rose-600 font-medium flex items-center transition-all duration-300 relative group py-2"
              >
                Packages
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-all duration-300 ${isPackagesOpen ? "rotate-180 text-rose-600" : "group-hover:translate-y-0.5"}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isPackagesOpen && (
                <div className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-100/50 py-6 z-50 animate-slide-down">
                  <div className="px-6 pb-4">
                    <h3 className="font-serif text-lg font-medium text-stone-900">Popular Packages</h3>
                    <p className="text-sm text-stone-600 mt-1">Curated experiences for every traveler</p>
                  </div>
                  {packages.slice(0, 4).map((pkg, index) => (
                    <a
                      key={pkg.id}
                      href="#"
                      className="flex items-center px-6 py-4 hover:bg-rose-50/50 transition-all duration-300 group/item"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg">
                        <span className="text-rose-600 text-xl transition-transform duration-300 group-hover/item:scale-110">
                          {pkg.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-stone-900 text-base group-hover/item:text-rose-600 transition-colors duration-300">
                          {pkg.name}
                        </p>
                        <p className="text-stone-500 text-sm mt-1">
                          {pkg.duration} • From <span className="font-semibold text-rose-600">${pkg.price}</span>
                        </p>
                      </div>
                      <ChevronDown className="w-4 h-4 text-stone-400 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                    </a>
                  ))}
                  <div className="border-t border-rose-100/50 mt-4 pt-4 px-6">
                    <a
                      href="#"
                      className="text-rose-600 font-medium hover:text-rose-700 transition-colors duration-300 flex items-center group/link"
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
                className="text-stone-700 hover:text-rose-600 font-medium flex items-center transition-all duration-300 relative group py-2"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-all duration-300 ${isServicesOpen ? "rotate-180 text-rose-600" : "group-hover:translate-y-0.5"}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-100/50 py-6 z-50 animate-slide-down">
                  <div className="px-6 pb-4">
                    <h3 className="font-serif text-lg font-medium text-stone-900">Our Services</h3>
                    <p className="text-sm text-stone-600 mt-1">Comprehensive travel solutions</p>
                  </div>
                  {services.map((service, index) => (
                    <a
                      key={service.id}
                      href="#"
                      className="flex items-center px-6 py-4 hover:bg-rose-50/50 transition-all duration-300 group/item"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover/item:scale-110">
                        <span className="text-emerald-600 text-lg transition-transform duration-300 group-hover/item:scale-110">
                          {service.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-stone-900 group-hover/item:text-rose-600 transition-colors duration-300">
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
            <Button
              onClick={() => window.open("tel:+251970692215", "_self")}
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <Phone className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-2 border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 px-6 py-3 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm hover:scale-105 group"
            >
              <Hotel className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Book a Hotel
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
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
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
                Packages
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <div className="pt-4 space-y-3">
                <Button
                  onClick={() => window.open("tel:+251970692215", "_self")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Hotel className="w-4 h-4 mr-2" />
                  Book a Hotel
                </Button>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
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
  )
}
