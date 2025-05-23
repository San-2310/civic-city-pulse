
import React from 'react';
import Navigation from '../components/Navigation';
import SmartMap from '../components/SmartMap';

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <SmartMap />
    </div>
  );
};

export default MapPage;
