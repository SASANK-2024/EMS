import { User, Employee, AttendanceRecord, LeaveRequest, Payslip, Department, JobRole, Notification } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Admin',
    email: 'admin@example.com',
    role: 'admin',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Sarah HR',
    email: 'hr@example.com',
    role: 'hr',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Michael Employee',
    email: 'employee@example.com',
    role: 'employee',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

export const mockEmployees: Employee[] = [
  {
    id: '1',
    userId: '3',
    name: 'Michael Employee',
    email: 'employee@example.com',
    jobTitle: 'Software Developer',
    department: 'Engineering',
    salary: 95000,
    joiningDate: '2022-05-15',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, USA',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '2',
    userId: '4',
    name: 'Jessica Williams',
    email: 'jessica@example.com',
    jobTitle: 'UX Designer',
    department: 'Design',
    salary: 85000,
    joiningDate: '2022-08-01',
    phone: '(555) 234-5678',
    address: '456 Oak Ave, Somewhere, USA',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '3',
    userId: '5',
    name: 'David Johnson',
    email: 'david@example.com',
    jobTitle: 'Marketing Specialist',
    department: 'Marketing',
    salary: 75000,
    joiningDate: '2022-09-15',
    phone: '(555) 345-6789',
    address: '789 Pine St, Elsewhere, USA',
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: '4',
    userId: '6',
    name: 'Emily Davis',
    email: 'emily@example.com',
    jobTitle: 'HR Coordinator',
    department: 'Human Resources',
    salary: 65000,
    joiningDate: '2023-01-10',
    phone: '(555) 456-7890',
    address: '101 Maple Dr, Nowhere, USA',
    profileImage: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: '5',
    userId: '7',
    name: 'Alex Thompson',
    email: 'alex@example.com',
    jobTitle: 'Frontend Developer',
    department: 'Engineering',
    salary: 90000,
    joiningDate: '2022-11-01',
    phone: '(555) 567-8901',
    address: '222 Elm St, Anyplace, USA',
    profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
];

export const mockAttendanceRecords: AttendanceRecord[] = [
  {
    id: '1',
    employeeId: '1',
    date: '2023-06-01',
    status: 'present',
  },
  {
    id: '2',
    employeeId: '1',
    date: '2023-06-02',
    status: 'present',
  },
  {
    id: '3',
    employeeId: '1',
    date: '2023-06-03',
    status: 'absent',
  },
  {
    id: '4',
    employeeId: '1',
    date: '2023-06-04',
    status: 'present',
  },
  {
    id: '5',
    employeeId: '1',
    date: '2023-06-05',
    status: 'late',
  },
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'Michael Employee',
    startDate: '2023-07-10',
    endDate: '2023-07-12',
    type: 'vacation',
    reason: 'Family vacation',
    status: 'approved',
    createdAt: '2023-06-25T10:30:00Z',
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Jessica Williams',
    startDate: '2023-07-05',
    endDate: '2023-07-05',
    type: 'sick',
    reason: 'Feeling unwell',
    status: 'approved',
    createdAt: '2023-07-04T08:15:00Z',
  },
  {
    id: '3',
    employeeId: '3',
    employeeName: 'David Johnson',
    startDate: '2023-07-20',
    endDate: '2023-07-22',
    type: 'personal',
    reason: 'Personal matters to attend to',
    status: 'pending',
    createdAt: '2023-07-01T14:45:00Z',
  },
  {
    id: '4',
    employeeId: '1',
    employeeName: 'Michael Employee',
    startDate: '2023-08-01',
    endDate: '2023-08-05',
    type: 'vacation',
    reason: 'Summer vacation',
    status: 'pending',
    createdAt: '2023-07-15T09:20:00Z',
  },
];

export const mockPayslips: Payslip[] = [
  {
    id: '1',
    employeeId: '1',
    month: 5,
    year: 2023,
    basicSalary: 95000 / 12,
    allowances: 500,
    deductions: 1200,
    netSalary: (95000 / 12) + 500 - 1200,
    status: 'paid',
    issueDate: '2023-05-31',
  },
  {
    id: '2',
    employeeId: '1',
    month: 6,
    year: 2023,
    basicSalary: 95000 / 12,
    allowances: 500,
    deductions: 1200,
    netSalary: (95000 / 12) + 500 - 1200,
    status: 'paid',
    issueDate: '2023-06-30',
  },
  {
    id: '3',
    employeeId: '2',
    month: 6,
    year: 2023,
    basicSalary: 85000 / 12,
    allowances: 400,
    deductions: 1000,
    netSalary: (85000 / 12) + 400 - 1000,
    status: 'paid',
    issueDate: '2023-06-30',
  },
];

export const mockDepartments: Department[] = [
  {
    id: '1',
    name: 'Engineering',
    employeeCount: 15,
  },
  {
    id: '2',
    name: 'Design',
    employeeCount: 8,
  },
  {
    id: '3',
    name: 'Marketing',
    employeeCount: 12,
  },
  {
    id: '4',
    name: 'Human Resources',
    employeeCount: 5,
  },
  {
    id: '5',
    name: 'Finance',
    employeeCount: 7,
  },
];

export const mockJobRoles: JobRole[] = [
  {
    id: '1',
    title: 'Software Developer',
  },
  {
    id: '2',
    title: 'UX Designer',
  },
  {
    id: '3',
    title: 'Marketing Specialist',
  },
  {
    id: '4',
    title: 'HR Coordinator',
  },
  {
    id: '5',
    title: 'Finance Analyst',
  },
  {
    id: '6',
    title: 'Project Manager',
  },
  {
    id: '7',
    title: 'Frontend Developer',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    title: 'Leave Request Approved',
    message: 'Your leave request from July 10 to July 12 has been approved.',
    isRead: false,
    createdAt: '2023-06-26T11:00:00Z',
  },
  {
    id: '2',
    userId: '1',
    title: 'Payslip Generated',
    message: 'Your payslip for June 2023 has been generated and is available for viewing.',
    isRead: true,
    createdAt: '2023-06-30T15:30:00Z',
  },
  {
    id: '3',
    userId: '1',
    title: 'Meeting Reminder',
    message: 'Don\'t forget about the team meeting tomorrow at 10:00 AM.',
    isRead: false,
    createdAt: '2023-07-16T13:45:00Z',
  },
];

export const getDepartmentStats = () => {
  return mockDepartments.map(dept => ({
    name: dept.name,
    value: dept.employeeCount,
  }));
};

export const getMonthlyAttendanceData = () => {
  return [
    { month: 'Jan', present: 21, absent: 1, late: 0 },
    { month: 'Feb', present: 18, absent: 2, late: 0 },
    { month: 'Mar', present: 22, absent: 0, late: 1 },
    { month: 'Apr', present: 20, absent: 1, late: 1 },
    { month: 'May', present: 21, absent: 2, late: 0 },
    { month: 'Jun', present: 19, absent: 2, late: 1 },
  ];
};

export const getLeaveTypesData = () => {
  return [
    { name: 'Vacation', value: 45 },
    { name: 'Sick', value: 30 },
    { name: 'Personal', value: 15 },
    { name: 'Other', value: 10 },
  ];
};

export const getCurrentUser = (): User => {
  // In a real app, this would get the current user from auth context
  return mockUsers[0];
};

export const getEmployeeById = (id: string): Employee | undefined => {
  return mockEmployees.find(employee => employee.id === id);
};

export const getLeaveRequestsForEmployee = (employeeId: string): LeaveRequest[] => {
  return mockLeaveRequests.filter(request => request.employeeId === employeeId);
};

export const getPayslipsForEmployee = (employeeId: string): Payslip[] => {
  return mockPayslips.filter(payslip => payslip.employeeId === employeeId);
};

export const getAttendanceForEmployee = (employeeId: string): AttendanceRecord[] => {
  return mockAttendanceRecords.filter(record => record.employeeId === employeeId);
};

export const getNotificationsForUser = (userId: string): Notification[] => {
  return mockNotifications.filter(notification => notification.userId === userId);
};