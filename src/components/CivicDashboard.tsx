
import React, { useState } from 'react';
import { TrendingUp, Calendar, Bell, Award, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const CivicDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = {
    reportsSubmitted: 12,
    issuesResolved: 8,
    civicScore: 485,
    streakDays: 5
  };

  const myReports = [
    { id: 1, type: 'Pothole', location: 'Main Street', status: 'resolved', date: '2024-01-15', priority: 'high' },
    { id: 2, type: 'Street Light', location: 'Park Avenue', status: 'in-progress', date: '2024-01-18', priority: 'medium' },
    { id: 3, type: 'Garbage', location: 'Downtown', status: 'submitted', date: '2024-01-20', priority: 'low' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Community Clean-up Drive', date: '2024-01-25', time: '9:00 AM' },
    { id: 2, title: 'Town Hall Meeting', date: '2024-01-28', time: '6:00 PM' },
    { id: 3, title: 'Tree Plantation', date: '2024-02-01', time: '8:00 AM' }
  ];

  const badges = [
    { name: 'First Reporter', description: 'First issue reported', earned: true },
    { name: 'Community Helper', description: '5 issues resolved', earned: true },
    { name: 'Civic Scout', description: '10 reports submitted', earned: true },
    { name: 'City Guardian', description: '50 civic points', earned: false }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'submitted': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved': return <CheckCircle size={16} />;
      case 'in-progress': return <Clock size={16} />;
      case 'submitted': return <AlertTriangle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Civic Dashboard</h1>
          <p className="text-gray-600">Track your civic engagement and impact on the community</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Reports Submitted</p>
                <p className="text-3xl font-bold text-blue-600">{userStats.reportsSubmitted}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Issues Resolved</p>
                <p className="text-3xl font-bold text-green-600">{userStats.issuesResolved}</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Civic Score</p>
                <p className="text-3xl font-bold text-purple-600">{userStats.civicScore}</p>
              </div>
              <Award className="w-12 h-12 text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Civic Streak</p>
                <p className="text-3xl font-bold text-orange-600">{userStats.streakDays} days</p>
              </div>
              <Calendar className="w-12 h-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Gamification Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">🎉 You've helped your city 5 times this month!</h2>
              <p className="text-purple-100">Keep up the great work! You're making a real difference in your community.</p>
            </div>
            <Award className="w-16 h-16 text-yellow-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Reports */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Recent Reports</h2>
            <div className="space-y-4">
              {myReports.map((report) => (
                <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{report.type}</h3>
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(report.status)}`}>
                      {getStatusIcon(report.status)}
                      <span className="capitalize">{report.status}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">📍 {report.location}</p>
                  <p className="text-gray-500 text-xs">Reported on {report.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                badge.earned 
                  ? 'border-yellow-300 bg-yellow-50' 
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                    badge.earned ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}>
                    <Award className={`w-8 h-8 ${badge.earned ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  <h3 className={`font-semibold ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                    {badge.name}
                  </h3>
                  <p className={`text-sm ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivicDashboard;
