
import React from 'react';
import Navigation from '../components/Navigation';
import CivicDashboard from '../components/CivicDashboard';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <CivicDashboard />
    </div>
  );
};

export default DashboardPage;
