
import React from 'react';
import Navigation from '../components/Navigation';
import { Bell, AlertTriangle, Info, CheckCircle, Clock } from 'lucide-react';

const AlertsPage = () => {
  const alerts = [
    { id: 1, type: 'urgent', title: 'Water Logging Alert', message: 'Sector 12 main road closed due to water logging. Use alternate routes.', time: '5 min ago', read: false },
    { id: 2, type: 'info', title: 'Community Event', message: 'Tree plantation drive this Saturday at Community Park. Join us!', time: '2 hours ago', read: false },
    { id: 3, type: 'warning', title: 'Scheduled Maintenance', message: 'Power cut scheduled tomorrow 10 AM - 2 PM in Sectors 8-12.', time: '1 day ago', read: true },
    { id: 4, type: 'success', title: 'Issue Resolved', message: 'Pothole on Main Street has been fixed. Thank you for reporting!', time: '2 days ago', read: true }
  ];

  const getAlertStyle = (type, read) => {
    const baseStyle = 'border-l-4 ';
    const readStyle = read ? 'bg-gray-50 ' : 'bg-white ';
    
    switch (type) {
      case 'urgent': return baseStyle + readStyle + 'border-red-500';
      case 'warning': return baseStyle + readStyle + 'border-orange-500';
      case 'info': return baseStyle + readStyle + 'border-blue-500';
      case 'success': return baseStyle + readStyle + 'border-green-500';
      default: return baseStyle + readStyle + 'border-gray-500';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'urgent': return <AlertTriangle className="w-6 h-6 text-red-500" />;
      case 'warning': return <Clock className="w-6 h-6 text-orange-500" />;
      case 'info': return <Info className="w-6 h-6 text-blue-500" />;
      case 'success': return <CheckCircle className="w-6 h-6 text-green-500" />;
      default: return <Bell className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Civic Alerts</h1>
          <p className="text-gray-600">Stay updated with the latest notifications from your city</p>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className={`${getAlertStyle(alert.type, alert.read)} rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold ${alert.read ? 'text-gray-700' : 'text-gray-900'}`}>
                      {alert.title}
                    </h3>
                    {!alert.read && (
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                  <p className={`${alert.read ? 'text-gray-600' : 'text-gray-800'} mb-2`}>
                    {alert.message}
                  </p>
                  <p className="text-sm text-gray-500">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
