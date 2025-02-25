import React from "react";
import { useAuth } from "../Authcontext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h2>Welcome, {user?.email}</h2>
      <button onClick={handleLogout} className="mt-4 py-2 px-4 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
