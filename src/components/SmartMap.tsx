
import React, { useState } from 'react';
import { Search, MapPin, Truck, Car, AlertTriangle, Shield, Trash2, Info } from 'lucide-react';

const SmartMap = () => {
  const [activeFilters, setActiveFilters] = useState(['bins', 'trucks']);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLegend, setShowLegend] = useState(false);

  const filters = [
    { id: 'bins', name: 'Bins', icon: Trash2, color: 'bg-green-500' },
    { id: 'trucks', name: 'Trucks', icon: Truck, color: 'bg-blue-500' },
    { id: 'parking', name: 'Parking', icon: Car, color: 'bg-purple-500' },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle, color: 'bg-red-500' },
    { id: 'emergency', name: 'Emergency', icon: Shield, color: 'bg-orange-500' }
  ];

  const mapData = [
    { id: 1, type: 'bin', lat: 40.7128, lng: -74.0060, status: 'full', eta: '18min' },
    { id: 2, type: 'truck', lat: 40.7589, lng: -73.9851, route: 'Route A', status: 'active' },
    { id: 3, type: 'alert', lat: 40.7505, lng: -73.9934, message: 'Water logging - use detour' }
  ];

  const toggleFilter = (filterId) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart City Map</h1>
          <p className="text-gray-600">Real-time visualization of city services and infrastructure</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilters.includes(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? `${filter.color} text-white shadow-lg transform scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} />
                  <span>{filter.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search and Legend */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search your street, zone, issue..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <button
              onClick={() => setShowLegend(!showLegend)}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <Info size={18} />
              <span>Legend</span>
            </button>
          </div>

          {/* Legend */}
          {showLegend && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Map Legend</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {filters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <div key={filter.id} className="flex items-center space-x-2">
                      <div className={`${filter.color} rounded p-1`}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{filter.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative bg-gradient-to-br from-blue-100 to-green-100 h-96 md:h-[600px] flex items-center justify-center">
            {/* Mock Map Interface */}
            <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="p-6 h-full flex flex-col justify-center items-center">
                <MapPin className="w-16 h-16 text-blue-600 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive City Map</h3>
                <p className="text-gray-600 text-center mb-6 max-w-md">
                  This would be your live city map with real-time data overlays, showing bins, trucks, parking spots, alerts, and emergency zones.
                </p>
                
                {/* Mock Map Elements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
                  <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                    <Trash2 className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Bin Full</p>
                    <p className="text-sm opacity-90">Pickup ETA: 18min</p>
                  </div>
                  <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
                    <Truck className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Route Truck</p>
                    <p className="text-sm opacity-90">Live tracking</p>
                  </div>
                  <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                    <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Road Alert</p>
                    <p className="text-sm opacity-90">Use detour</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated background elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-20 left-20 w-4 h-4 bg-red-500 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-10 right-10 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-1500"></div>
          </div>
        </div>

        {/* Map Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500 rounded-lg p-2">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Waste Management</h3>
            </div>
            <p className="text-gray-600 mb-3">Track bin status and pickup schedules in real-time</p>
            <div className="text-sm text-green-600 font-medium">12 bins need attention</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-500 rounded-lg p-2">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Fleet Tracking</h3>
            </div>
            <p className="text-gray-600 mb-3">Monitor municipal vehicles and service routes</p>
            <div className="text-sm text-blue-600 font-medium">8 vehicles active</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-500 rounded-lg p-2">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Live Alerts</h3>
            </div>
            <p className="text-gray-600 mb-3">Stay updated with real-time city notifications</p>
            <div className="text-sm text-red-600 font-medium">3 active alerts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartMap;
