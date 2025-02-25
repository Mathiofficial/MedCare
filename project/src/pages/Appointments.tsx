import React, { useState, useEffect } from "react";
import { Calendar, Clock, User, MapPin, CheckCircle, X } from "lucide-react";

function Appointments() {
  const [showPopup, setShowPopup] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState<any>(null);

  const handleBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const doctor = formData.get("doctor");
    const date = formData.get("date");
    const time = formData.get("time");

    if (doctor && date && time) {
      setAppointmentDetails({ doctor, date, time });
      setShowPopup(true);

      const appointmentDateTime = new Date(`${date}T${time}:00`);
      const currentTime = new Date();
      const timeUntilReminder = appointmentDateTime.getTime() - currentTime.getTime();

      if (timeUntilReminder > 0) {
        setTimeout(() => {
          alert(`Reminder: Your appointment with ${doctor} is scheduled for ${time} on ${date}`);
        }, timeUntilReminder);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Book Appointment</h2>
          <form className="space-y-6" onSubmit={handleBooking}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Doctor
                </label>
                <select name="doctor" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Dr. Sarah Wilson</option>
                  <option>Dr. Michael Chen</option>
                  <option>Dr. Emily Brown</option>
                  <option>Dr. Karthikeyan</option>                 
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <select name="time" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:00">12:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Appointment Confirmed</h2>
              <button onClick={() => setShowPopup(false)}>
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="mt-4 flex items-center text-green-600">
              <CheckCircle className="h-6 w-6" />
              <p className="ml-2">
                Your appointment with <strong>{appointmentDetails?.doctor}</strong> is booked for{" "}
                <strong>{appointmentDetails?.date} at {appointmentDetails?.time}</strong>.
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
