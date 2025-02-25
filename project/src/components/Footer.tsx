import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MedCore</h3>
            <p className="text-gray-400">Your trusted healthcare partner, providing comprehensive medical services and support.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/appointments" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
              <li><Link to="/blood-donor" className="text-gray-400 hover:text-white">Blood Donor</Link></li>
              <li><Link to="/pharmacy" className="text-gray-400 hover:text-white">Online Pharmacy</Link></li>
              <li><Link to="/hospitals" className="text-gray-400 hover:text-white">Find Hospitals</Link></li>
              <li><Link to="/reminder" className="block px-4 py-2 text-blue-600 hover:underline">Reminder</Link></li>
              <li><Link to="/ai-health-assistant" className="block px-4 py-2 text-blue-600 hover:underline">AI Health Assistant</Link> </li>

            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@medcare.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Healthcare Ave, Medical City</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency</h4>
            <p className="text-gray-400 mb-2">24/7 Emergency Helpline</p>
            <p className="text-2xl font-bold text-blue-400">911</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MedCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;