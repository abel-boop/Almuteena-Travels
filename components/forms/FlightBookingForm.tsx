'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Calendar, Users, MapPin, Plane } from 'lucide-react';

interface FlightFormData {
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  tripType: string;
  passengers: number;
  class: string;
  budget: string;
  preferences: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

const tripTypes = [
  'One Way',
  'Round Trip',
  'Multi-City'
];

const flightClasses = [
  'Economy',
  'Premium Economy',
  'Business',
  'First Class'
];

const budgetRanges = [
  'Under $500',
  '$500-1000',
  '$1000-2000',
  '$2000-3000',
  '$3000+'
];

export default function FlightBookingForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FlightFormData>({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    tripType: 'Round Trip',
    passengers: 1,
    class: '',
    budget: '',
    preferences: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const [errors, setErrors] = useState<Partial<FlightFormData>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FlightFormData> = {};

    if (step === 1) {
      if (!formData.from) newErrors.from = 'Departure city is required';
      if (!formData.to) newErrors.to = 'Destination city is required';
      if (!formData.departureDate) newErrors.departureDate = 'Departure date is required';
      if (formData.tripType === 'Round Trip' && !formData.returnDate) {
        newErrors.returnDate = 'Return date is required for round trip';
      }
      if (formData.departureDate && formData.returnDate && new Date(formData.departureDate) >= new Date(formData.returnDate)) {
        newErrors.returnDate = 'Return date must be after departure date';
      }
      if (formData.passengers < 1) newErrors.passengers = 'At least 1 passenger required';
    }

    if (step === 2) {
      if (!formData.class) newErrors.class = 'Flight class is required';
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
      const message = `✈️ *Flight Booking Request*

🛫 *From:* ${formData.from}
🛬 *To:* ${formData.to}
📅 *Departure:* ${formData.departureDate}
${formData.tripType === 'Round Trip' ? `📅 *Return:* ${formData.returnDate}` : ''}
🎫 *Trip Type:* ${formData.tripType}
👥 *Passengers:* ${formData.passengers}
💺 *Class:* ${formData.class}
💰 *Budget:* ${formData.budget}
⭐ *Preferences:* ${formData.preferences || 'None specified'}

👤 *Contact Details:*
• Name: ${formData.contactName}
• Email: ${formData.contactEmail}
• Phone: ${formData.contactPhone}

Please assist with this flight booking request.`;

      const whatsappUrl = `https://wa.me/251911289195?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      onClose();
    }
  };

  const updateFormData = (field: keyof FlightFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-emerald-500" />
          Flight Booking Request
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
              <Label>Trip Type *</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {tripTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateFormData('tripType', type)}
                    className={`p-3 text-center border rounded-lg transition-all ${
                      formData.tripType === type
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="from">From *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="from"
                    placeholder="e.g., Addis Ababa, Ethiopia"
                    value={formData.from}
                    onChange={(e) => updateFormData('from', e.target.value)}
                    className="pl-10"
                  />
                </div>
                {errors.from && <p className="text-red-500 text-sm">{errors.from}</p>}
              </div>

              <div>
                <Label htmlFor="to">To *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="to"
                    placeholder="e.g., Dubai, UAE"
                    value={formData.to}
                    onChange={(e) => updateFormData('to', e.target.value)}
                    className="pl-10"
                  />
                </div>
                {errors.to && <p className="text-red-500 text-sm">{errors.to}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departureDate">Departure Date *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="departureDate"
                    type="date"
                    value={formData.departureDate}
                    onChange={(e) => updateFormData('departureDate', e.target.value)}
                    className="pl-10"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                {errors.departureDate && <p className="text-red-500 text-sm">{errors.departureDate}</p>}
              </div>

              {formData.tripType === 'Round Trip' && (
                <div>
                  <Label htmlFor="returnDate">Return Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="returnDate"
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) => updateFormData('returnDate', e.target.value)}
                      className="pl-10"
                      min={formData.departureDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  {errors.returnDate && <p className="text-red-500 text-sm">{errors.returnDate}</p>}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="passengers">Number of Passengers *</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  value={formData.passengers}
                  onChange={(e) => updateFormData('passengers', parseInt(e.target.value) || 1)}
                  className="pl-10"
                />
              </div>
              {errors.passengers && <p className="text-red-500 text-sm">{errors.passengers}</p>}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <Label>Flight Class *</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {flightClasses.map(flightClass => (
                  <button
                    key={flightClass}
                    type="button"
                    onClick={() => updateFormData('class', flightClass)}
                    className={`p-3 text-left border rounded-lg transition-all ${
                      formData.class === flightClass
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {flightClass}
                  </button>
                ))}
              </div>
              {errors.class && <p className="text-red-500 text-sm">{errors.class}</p>}
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
                placeholder="e.g., Window seat, Vegetarian meal, Extra legroom"
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
