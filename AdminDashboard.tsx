import React from 'react';
import { Users, Calendar, Clock, CreditCard } from 'lucide-react';
import { Card, CardBody, CardHeader } from '../../components/ui/Card';
import { mockEmployees, getDepartmentStats, getMonthlyAttendanceData, getLeaveTypesData } from '../../data/mockData';

export const AdminDashboard: React.FC = () => {
  const totalEmployees = mockEmployees.length;
  const activeLeaves = 3; // This would come from your data in a real app
  const attendanceRate = 95; // This would come from your data in a real app
  
  const statCards = [
    {
      title: 'Total Employees',
      value: totalEmployees,
      icon: <Users className="h-6 w-6 text-primary-500" />,
      color: 'bg-primary-50',
    },
    {
      title: 'Active Leave Requests',
      value: activeLeaves,
      icon: <Calendar className="h-6 w-6 text-warning-500" />,
      color: 'bg-warning-50',
    },
    {
      title: 'Attendance Rate',
      value: `${attendanceRate}%`,
      icon: <Clock className="h-6 w-6 text-success-500" />,
      color: 'bg-success-50',
    },
    {
      title: 'Monthly Payroll',
      value: '$45,250',
      icon: <CreditCard className="h-6 w-6 text-secondary-500" />,
      color: 'bg-secondary-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to the HR Management System</p>
      </div>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardBody className="flex items-center space-x-4">
              <div className={`p-3 rounded-full ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      
      {/* Charts and Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-800">Department Distribution</h2>
          </CardHeader>
          <CardBody className="h-64">
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">Department Distribution Chart will appear here</p>
              {/* In a real app, you would render a chart here using a library like Recharts */}
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-800">Monthly Attendance</h2>
          </CardHeader>
          <CardBody className="h-64">
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">Monthly Attendance Chart will appear here</p>
              {/* In a real app, you would render a chart here using a library like Recharts */}
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Recent Activities Section */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium">New employee Jessica Williams joined</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                <Calendar className="h-4 w-4 text-success-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Leave request approved for Michael Johnson</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-warning-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Monthly attendance report generated</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-secondary-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Monthly payroll processed</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};