import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AdminDashboard } from './AdminDashboard';
import { EmployeeDashboard } from './EmployeeDashboard';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (user?.role === 'admin' || user?.role === 'hr') {
    return <AdminDashboard />;
  }

  return <EmployeeDashboard />;
};