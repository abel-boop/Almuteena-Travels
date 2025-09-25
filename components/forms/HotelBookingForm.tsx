'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Calendar, Users, MapPin, Star } from 'lucide-react';

interface HotelFormData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  roomType: string;
  budget: string;
  preferences: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

const roomTypes = [
  'Standard Room',
  'Deluxe Room',
  'Suite',
  'Presidential Suite',
  'Family Room',
  'Business Room'
];

const budgetRanges = [
  'Under $100/night',
  '$100-200/night',
  '$200-300/night',
  '$300-500/night',
  '$500+/night'
];

export default function HotelBookingForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<HotelFormData>({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
    roomType: '',
    budget: '',
    preferences: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const [errors, setErrors] = useState<Partial<HotelFormData>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<HotelFormData> = {};

    if (step === 1) {
      if (!formData.destination) newErrors.destination = 'Destination is required';
      if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
      if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
      if (formData.checkIn && formData.checkOut && new Date(formData.checkIn) >= new Date(formData.checkOut)) {
        newErrors.checkOut = 'Check-out must be after check-in';
      }
      if (formData.guests < 1) newErrors.guests = 'At least 1 guest required';
      if (formData.rooms < 1) newErrors.rooms = 'At least 1 room required';
    }

    if (step === 2) {
      if (!formData.roomType) newErrors.roomType = 'Room type is required';
      if (!formData.budget) newErrors.budget = 'Budget range is required';
    }

    if (step === 3) {
      if (!formData.contactName) newErrors.contactName = 'Name is required';
      if (!formData.contactEmail) newErrors.contactEmail = 'Email is required';
      if (!formData.contactPhone) newErrors.contactPhone = 'Phone is required';
      if (formData.contactEmail && !/\S+@\S+\.\S+/.test(formData.contactEmail)) {
        newErrors.contactEmail = 'Invalid email format';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      const message = `🏨 *Hotel Booking Request*

📍 *Destination:* ${formData.destination}
📅 *Check-in:* ${formData.checkIn}
📅 *Check-out:* ${formData.checkOut}
👥 *Guests:* ${formData.guests}
🛏️ *Rooms:* ${formData.rooms}
🏨 *Room Type:* ${formData.roomType}
💰 *Budget:* ${formData.budget}
⭐ *Preferences:* ${formData.preferences || 'None specified'}

👤 *Contact Details:*
• Name: ${formData.contactName}
• Email: ${formData.contactEmail}
• Phone: ${formData.contactPhone}

Please assist with this hotel booking request.`;

      const whatsappUrl = `https://wa.me/251911289195?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      onClose();
    }
  };

  const updateFormData = (field: keyof HotelFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-emerald-500" />
          Hotel Booking Request
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="flex gap-1">
            {[1, 2, 3].map(step => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                  step <= currentStep
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <span>Step {currentStep} of 3</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="destination">Destination *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="destination"
                  placeholder="e.g., Dubai, UAE"
                  value={formData.destination}
                  onChange={(e) => updateFormData('destination', e.target.value)}
                  className="pl-10"
                />
              </div>
              {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="checkIn">Check-in Date *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => updateFormData('checkIn', e.target.value)}
                    className="pl-10"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn}</p>}
              </div>

              <div>
                <Label htmlFor="checkOut">Check-out Date *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => updateFormData('checkOut', e.target.value)}
                    className="pl-10"
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  />
                </div>
                {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="guests">Number of Guests *</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => updateFormData('guests', parseInt(e.target.value) || 1)}
                    className="pl-10"
                  />
                </div>
                {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
              </div>

              <div>
                <Label htmlFor="rooms">Number of Rooms *</Label>
                <Input
                  id="rooms"
                  type="number"
                  min="1"
                  value={formData.rooms}
                  onChange={(e) => updateFormData('rooms', parseInt(e.target.value) || 1)}
                />
                {errors.rooms && <p className="text-red-500 text-sm">{errors.rooms}</p>}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <Label>Room Type *</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {roomTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateFormData('roomType', type)}
                    className={`p-3 text-left border rounded-lg transition-all ${
                      formData.roomType === type
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}
            </div>

            <div>
              <Label>Budget Range *</Label>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {budgetRanges.map(range => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => updateFormData('budget', range)}
                    className={`p-3 text-left border rounded-lg transition-all ${
                      formData.budget === range
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
            </div>

            <div>
              <Label htmlFor="preferences">Special Preferences (Optional)</Label>
              <Input
                id="preferences"
                placeholder="e.g., Ocean view, Near airport, Pet-friendly"
                value={formData.preferences}
                onChange={(e) => updateFormData('preferences', e.target.value)}
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="contactName">Full Name *</Label>
              <Input
                id="contactName"
                placeholder="Your full name"
                value={formData.contactName}
                onChange={(e) => updateFormData('contactName', e.target.value)}
              />
              {errors.contactName && <p className="text-red-500 text-sm">{errors.contactName}</p>}
            </div>

            <div>
              <Label htmlFor="contactEmail">Email Address *</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="your.email@example.com"
                value={formData.contactEmail}
                onChange={(e) => updateFormData('contactEmail', e.target.value)}
              />
              {errors.contactEmail && <p className="text-red-500 text-sm">{errors.contactEmail}</p>}
            </div>

            <div>
              <Label htmlFor="contactPhone">Phone Number *</Label>
              <Input
                id="contactPhone"
                type="tel"
                placeholder="+251 XX XXX XXXX"
                value={formData.contactPhone}
                onChange={(e) => updateFormData('contactPhone', e.target.value)}
              />
              {errors.contactPhone && <p className="text-red-500 text-sm">{errors.contactPhone}</p>}
            </div>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={currentStep === 1 ? onClose : prevStep}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            {currentStep === 1 ? 'Cancel' : 'Previous'}
          </Button>

          <Button
            onClick={currentStep === 3 ? handleSubmit : nextStep}
            className="flex items-center gap-2"
          >
            {currentStep === 3 ? 'Submit Booking' : 'Next'}
            {currentStep < 3 && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
