import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Users,
  Calendar,
  FileText,
  CreditCard,
  Clock,
  Settings,
  Home,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  isMobile: boolean;
  closeMobileMenu?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobile, closeMobileMenu }) => {
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Employees', path: '/employees', icon: <Users size={20} /> },
    { name: 'Leave Management', path: '/leaves', icon: <Calendar size={20} /> },
    { name: 'Attendance', path: '/attendance', icon: <Clock size={20} /> },
    { name: 'Payroll', path: '/payroll', icon: <CreditCard size={20} /> },
    { name: 'Reports', path: '/reports', icon: <FileText size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  const filteredNavItems = navItems.filter(item => {
    // Admin can access everything
    if (user?.role === 'admin') return true;
    
    // HR can access everything except settings
    if (user?.role === 'hr') {
      return item.name !== 'Settings';
    }
    
    // Regular employees have limited access
    if (user?.role === 'employee') {
      return ['Dashboard', 'Leave Management', 'Attendance', 'Payroll'].includes(item.name);
    }
    
    return false;
  });

  const handleLogout = () => {
    logout();
    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <aside
      className={`bg-white border-r border-gray-200 ${
        isMobile ? 'w-full h-full fixed left-0 top-0 z-40' : 'w-64 min-h-screen'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-primary-600">EMS</h1>
          <p className="text-sm text-gray-500">Employee Management System</p>
        </div>
        
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <ul>
            {filteredNavItems.map((item) => (
              <li key={item.name} className="mb-1">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm rounded-md ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};