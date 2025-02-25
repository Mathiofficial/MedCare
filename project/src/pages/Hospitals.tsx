import React from 'react';
import { MapPin, Phone, Clock, Star, Search } from 'lucide-react';

function Hospitals() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Find Nearby Hospitals</h1>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your location..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search hospitals..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <HospitalCard
            name="City General Hospital"
            type="General Hospital"
            address="123 Healthcare Ave, Medical City"
            distance="2.5 km"
            rating={4.8}
            phone="+1 (555) 123-4567"
            image="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg"
            emergency={true}
          />
          <HospitalCard
            name="Children's Medical Center"
            type="Pediatric Hospital"
            address="456 Kids Care Lane, Medical City"
            distance="3.8 km"
            rating={4.9}
            phone="+1 (555) 234-5678"
            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
            emergency={true}
          />
          <HospitalCard
            name="Wellness Clinic"
            type="Specialty Clinic"
            address="789 Health Street, Medical City"
            distance="1.2 km"
            rating={4.6}
            phone="+1 (555) 345-6789"
            image="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80"
            emergency={false}
          />
        </div>
      </div>
    </div>
  );
}

function HospitalCard({ name, type, address, distance, rating, phone, image, emergency }: {
  name: string;
  type: string;
  address: string;
  distance: string;
  rating: number;
  phone: string;
  image: string;
  emergency: boolean;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-600">{type}</p>
            </div>
            {emergency && (
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                24/7 Emergency
              </span>
            )}
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{address} ({distance})</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-2" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>Open 24 hours</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-gray-600">{rating} / 5.0</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hospitals;