import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import Appointments from './pages/Appointments';
import BloodDonor from './pages/BloodDonor';
import Pharmacy from './pages/Pharmacy';
import Hospitals from './pages/Hospitals';
import Login from './pages/Login';
import Register from './pages/Register';
import Reminder from './pages/Reminder'; 
import { AuthProvider } from './Authcontext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patient-dashboard" element={<PatientDashboard />} />
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/blood-donor" element={<BloodDonor />} />
              <Route path="/pharmacy" element={<Pharmacy />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reminder" element={<Reminder />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
