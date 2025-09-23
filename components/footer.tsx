'use client';

import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Almuteena Travels</h3>
            <p className="text-gray-400 mb-6">
              Creating unforgettable travel experiences with passion and dedication since 2010.
            </p>
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
                <span className="ml-3 text-gray-400">123 Travel Street, Dubai, UAE</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@almuteena.com" className="ml-3 text-gray-400 hover:text-white transition-colors">
                  info@almuteena.com
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <a href="tel:+97141234567" className="ml-3 text-gray-400 hover:text-white transition-colors">
                  +971 4 123 4567
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and travel tips</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 flex items-center"
              >
                <span className="sr-only">Subscribe</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
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
