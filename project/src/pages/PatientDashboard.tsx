import React from "react";
import { Calendar, FileText, Bell, Clock } from "lucide-react";

const PatientDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Patient Dashboard</h1>
      <PatientStats />
    </div>
  );
};

type Stat = {
  title: string;
  value: number | string;
  icon: JSX.Element;
};

const PatientStats: React.FC = () => {
  const stats: Stat[] = [
    { title: "Upcoming Appointments", value: 2, icon: <Calendar className="h-6 w-6 text-blue-600" /> },
    { title: "Pending Reports", value: 3, icon: <FileText className="h-6 w-6 text-orange-600" /> },
    { title: "Medications", value: 4, icon: <Bell className="h-6 w-6 text-green-600" /> },
    { title: "Next Check-up", value: "5 days", icon: <Clock className="h-6 w-6 text-purple-600" /> }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map(({ title, value, icon }) => (
        <StatCard key={title} title={title} value={value} icon={icon} />
      ))}
    </div>
  );
};

const StatCard: React.FC<Stat> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default PatientDashboard;
