
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Trash2, Wrench, AlertTriangle, MessageSquare, Car, Accessibility, Navigation as NavigationIcon, Vote, Clock } from 'lucide-react';

const HomePage = () => {
  const [liveStats, setLiveStats] = useState({
    binsFull: 12,
    issuesResolved: 108,
    activeAlerts: 3,
    suggestions: 41
  });

  const [alerts] = useState([
    { id: 1, type: 'danger', message: 'Water logging in Sector 12 - avoid main road', time: '2 min ago' },
    { id: 2, type: 'info', message: 'Tree plantation drive this weekend - join us!', time: '1 hour ago' },
    { id: 3, type: 'warning', message: 'Scheduled power cut tomorrow 10 AM - 2 PM', time: '3 hours ago' }
  ]);

  const civicTools = [
    { name: 'Report an Issue', icon: MapPin, path: '/report', color: 'bg-red-500' },
    { name: 'Waste Pickup ETA', icon: Trash2, path: '/waste', color: 'bg-green-500' },
    { name: 'Parking Spot Finder', icon: Car, path: '/parking', color: 'bg-blue-500' },
    { name: 'Accessible Navigation', icon: Accessibility, path: '/accessible', color: 'bg-purple-500' },
    { name: 'Emergency Access', icon: AlertTriangle, path: '/emergency', color: 'bg-red-600' },
    { name: 'Take a Poll', icon: Vote, path: '/polls', color: 'bg-orange-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        issuesResolved: prev.issuesResolved + Math.floor(Math.random() * 2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your City. Your Control.
              <span className="block text-orange-400">Real-Time.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Connect with your city like never before. Track services, report issues, and navigate urban life efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/map"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Track Services
              </Link>
              <Link
                to="/report"
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Submit Complaint
              </Link>
              <Link
                to="/map"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Explore Map
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Live City Pulse */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Live City Pulse</h2>
          <p className="text-gray-600">Real-time insights into your city's heartbeat</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Bins Full</p>
                <p className="text-3xl font-bold text-red-600">{liveStats.binsFull}</p>
              </div>
              <Trash2 className="w-12 h-12 text-red-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Issues Resolved This Week</p>
                <p className="text-3xl font-bold text-green-600">{liveStats.issuesResolved}</p>
              </div>
              <Wrench className="w-12 h-12 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Active Alerts</p>
                <p className="text-3xl font-bold text-orange-600">{liveStats.activeAlerts}</p>
              </div>
              <AlertTriangle className="w-12 h-12 text-orange-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Citizen Suggestions</p>
                <p className="text-3xl font-bold text-blue-600">{liveStats.suggestions}</p>
              </div>
              <MessageSquare className="w-12 h-12 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Civic Tools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Civic Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civicTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.name}
                  to={tool.path}
                  className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${tool.color} rounded-lg p-3 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {tool.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Live Alerts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Live Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`bg-white rounded-xl shadow-lg p-6 border-l-4 hover:shadow-xl transition-all duration-200 ${
                  alert.type === 'danger' ? 'border-red-500' :
                  alert.type === 'warning' ? 'border-orange-500' : 'border-blue-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full animate-pulse ${
                      alert.type === 'danger' ? 'bg-red-500' :
                      alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                    }`}></div>
                    <p className="text-gray-900 font-medium">{alert.message}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Clock size={14} />
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
