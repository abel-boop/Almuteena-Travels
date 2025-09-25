'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Globe } from 'lucide-react';

const services = [
  'Flight Bookings',
  'Hotel Reservations',
  'Visa Assistance',
  'Tour Packages',
  'Business Travel',
  '24/7 Support'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Send to WhatsApp
      const message = `📞 *Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
🎯 *Service Interest:* ${formData.service || 'Not specified'}

💬 *Message:*
${formData.message}

Please respond to this inquiry.`;

      const whatsappUrl = `https://wa.me/251911289195?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to embark on your next adventure? We're here to help you plan the perfect journey. 
            Contact us today and let's make your travel dreams come true.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full px-4 py-2 text-sm font-medium">
            <Globe className="h-4 w-4" />
            <span>ከኢትዮጵያ ወደ ዓለም ዙሪያ - From Ethiopia to the World</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <MessageCircle className="h-5 w-5" />
                Send Us a Message
              </CardTitle>
              <p className="text-emerald-600 dark:text-emerald-300">
                Fill out the form below and we'll get back to you within minutes.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="mt-2"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="mt-2"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+251 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => updateFormData('service', e.target.value)}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your travel plans, questions, or how we can help you..."
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-medium"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Office Address</h4>
                    <p className="text-blue-100 mb-1">Beza Building, Cameroon St, Bole Medhaniyalem</p>
                    <p className="text-blue-100">Near Emirates Head Office, 5th Floor, Room 505</p>
                    <p className="text-blue-100">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Phone Numbers</h4>
                    <p className="text-blue-100 mb-1">WhatsApp: +251 911 289 195</p>
                    <p className="text-blue-100 mb-1">Mobile: +251 977 437 777</p>
                    <p className="text-blue-100">Landline: +251 11 822 9722</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Email Address</h4>
                    <p className="text-blue-100">info@almuteenaet.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-200 font-medium">Monday - Sunday</p>
                  <p className="text-gray-300">24/7 Open</p>
                  <p className="text-gray-300 text-sm">Emergency Support: Available 24/7 for existing bookings</p>
                  <p className="text-emerald-300 text-sm font-medium">እንደ አስፈላጊ እርዳታ - Available as needed</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => window.open('https://wa.me/251911289195', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button
                  onClick={() => window.open('tel:+251911289195', '_self')}
                  variant="outline"
                  className="w-full"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
