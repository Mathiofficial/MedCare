import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, Pill, MapPin, Ambulance, MessageSquare } from 'lucide-react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <img
          src="https://vilmate.com/wp-content/uploads/2018/08/Medical_Website_Development-2.jpg.webp"
          alt="Medical facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50 flex items-center">
          <div className="max-w-2xl ml-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
            <p className="text-xl mb-6">Book appointments, find blood donors, and access medical services all in one place.</p>
            <Link to="/register" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Calendar className="h-8 w-8" />}
          title="Book Appointments"
          description="Schedule appointments with doctors easily and get instant confirmations."
          link="/appointments"
        />
        <FeatureCard
          icon={<Heart className="h-8 w-8" />}
          title="Blood Donor Network"
          description="Connect with blood donors in your area when you need it most."
          link="/blood-donor"
        />
        <FeatureCard
          icon={<Pill className="h-8 w-8" />}
          title="Online Pharmacy"
          description="Order medicines online from trusted pharmacies with doorstep delivery."
          link="/pharmacy"
        />
        <FeatureCard
          icon={<MapPin className="h-8 w-8" />}
          title="Find Hospitals"
          description="Locate nearby hospitals and medical facilities with ease."
          link="/hospitals"
        />
        <FeatureCard
          icon={<Ambulance className="h-8 w-8" />}
          title="Remainder"
          description="Quick access to ambulance services in your area."
          link="/reminder"
        />
        <FeatureCard
          icon={<MessageSquare className="h-8 w-8" />}
          title="AI Health Assistant"
          description="Get instant answers to your health queries from our AI chatbot."
          link="/chat"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) {
  return (
    <Link to={link} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

export default Home;