'use client';

import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Send, MessageCircle, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Almuteena Travels</h3>
            <p className="text-gray-400 mb-4">
              Creating unforgettable travel experiences with passion and dedication since 2010.
            </p>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-4 py-2 text-emerald-300 text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              <span>ከኢትዮጵያ ወደ ዓለም ዙሪያ - From Ethiopia to the World</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/tours" className="text-gray-400 hover:text-white transition-colors">Tour Packages</Link></li>
              <li><Link href="/visa" className="text-gray-400 hover:text-white transition-colors">Visa Services</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Travel Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="ml-3 text-gray-400">
                  <p>Beza Building, Cameroon St</p>
                  <p>Bole Medhaniyalem</p>
                  <p>Near Emirates Head Office</p>
                  <p>5th Floor, Room 505</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@almuteenaet.com" className="ml-3 text-gray-400 hover:text-white transition-colors">
                  info@almuteenaet.com
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="ml-3 text-gray-400">
                  <p>Landline: <a href="tel:+251118229722" className="hover:text-white transition-colors">+251 11 822 9722</a></p>
                </div>
              </li>
            </ul>
          </div>

          {/* WhatsApp & Mobile */}
          <div>
            <h3 className="text-lg font-semibold mb-6">WhatsApp & Mobile</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MessageCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="ml-3 text-gray-400">
                  <p>WhatsApp: <a href="https://wa.me/251911289195" className="text-green-400 hover:text-green-300 transition-colors">+251 911 289 195</a></p>
                  <p>Mobile: <a href="tel:+251977437777" className="hover:text-white transition-colors">+251 977 437 777</a></p>
                </div>
              </li>
              <li className="mt-6">
                <a 
                  href="https://wa.me/251911289195" 
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Almuteena Travels. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">Sitemap</Link>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h4 className="text-sm font-medium text-gray-400 mb-4">We Accept</h4>
          <div className="flex space-x-6">
            <span className="text-gray-600">Visa</span>
            <span className="text-gray-600">Mastercard</span>
            <span className="text-gray-600">American Express</span>
            <span className="text-gray-600">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
