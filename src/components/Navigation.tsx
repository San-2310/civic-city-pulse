
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, AlertTriangle, BarChart3, Bell, Phone } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Smart Map', path: '/map', icon: Map },
    { name: 'Submit Issue', path: '/report', icon: AlertTriangle },
    { name: 'Civic Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Alerts', path: '/alerts', icon: Bell },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              CivicOs
            </Link>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <Link
            to="/report"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Report an Issue
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
