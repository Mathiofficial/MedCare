import React, { useState } from 'react';
import { Heart, Search, MapPin, Phone } from 'lucide-react';

function BloodDonor() {
  const [showDonor, setShowDonor] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearchDonors = (e) => {
    e.preventDefault();
    setShowDonor(true);
  };

  const handleRegisterDonor = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Blood Donor Network</h1>
          <p className="text-gray-600">Connect with blood donors in your area and help save lives.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Find Blood Donors</h2>
              <form className="space-y-4" onSubmit={handleSearchDonors}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                  <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input type="text" placeholder="Enter your city" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors">Search Donors</button>
              </form>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Register as Donor</h2>
              <form className="space-y-4" onSubmit={handleRegisterDonor}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                  <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Donation Date</label>
                  <input type="date" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Register as Donor</button>
              </form>
            </div>
          </div>
        </div>

        {showDonor && (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Available Donors</h2>
            <DonorCard name="John Doe" bloodType="O+" location="Downtown" lastDonation="2024-02-15" distance="2.5 km" />
          </div>
        )}

        {showPopup && (
          <div className="fixed top-0 left-0 right-0 bg-green-500 text-white py-3 text-center font-semibold shadow-lg">
            Successfully Registered as Donor!
          </div>
        )}
      </div>
    </div>
  );
}

function DonorCard({ name, bloodType, location, lastDonation, distance }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 rounded-full p-2">
            <Heart className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {location} ({distance})
            </div>
            <p className="text-sm text-gray-500">Last donation: {lastDonation}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="bg-red-100 text-red-800 text-lg font-semibold px-3 py-1 rounded">{bloodType}</span>
          <button className="flex items-center text-blue-600 hover:text-blue-700 mt-2">
            <Phone className="h-4 w-4 mr-1" />
            <span className="text-sm">Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BloodDonor;
