export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'hr' | 'employee';
  profileImage?: string;
}

export interface Employee {
  id: string;
  userId: string;
  name: string;
  email: string;
  jobTitle: string;
  department: string;
  salary: number;
  joiningDate: string;
  phone: string;
  address: string;
  profileImage?: string;
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'half-day';
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  type: 'sick' | 'vacation' | 'personal' | 'other';
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface Payslip {
  id: string;
  employeeId: string;
  month: number;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'paid' | 'unpaid';
  issueDate: string;
}

export interface Department {
  id: string;
  name: string;
  employeeCount: number;
}

export interface JobRole {
  id: string;
  title: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}