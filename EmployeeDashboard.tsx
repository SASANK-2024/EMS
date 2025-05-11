import React from 'react';
import { Card, CardBody, CardHeader, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Clock, Calendar, FileText, Briefcase } from 'lucide-react';
import { mockLeaveRequests, mockPayslips } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';

export const EmployeeDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Filter leaves and payslips for the current employee
  // In a real app, you would get this from an API
  const employeeLeaves = mockLeaveRequests.filter(leave => leave.employeeId === '1');
  const employeePayslips = mockPayslips.filter(payslip => payslip.employeeId === '1');
  
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'approved':
        return 'success';
      case 'pending':
        return 'warning';
      case 'rejected':
        return 'danger';
      default:
        return 'default';
    }
  };
  
  const getMonthName = (monthNumber: number) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthNumber - 1];
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome, {user?.name}</h1>
        <p className="text-gray-600">Your Employee Dashboard</p>
      </div>
      
      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:border-primary-300 cursor-pointer transition-all">
          <CardBody className="flex flex-col items-center py-6 text-center">
            <div className="p-3 rounded-full bg-primary-50 mb-4">
              <Clock className="h-6 w-6 text-primary-500" />
            </div>
            <h3 className="text-lg font-medium mb-1">Clock In</h3>
            <p className="text-sm text-gray-500 mb-4">Mark your attendance</p>
            <Button size="sm">Clock In</Button>
          </CardBody>
        </Card>
        
        <Card className="hover:border-primary-300 cursor-pointer transition-all">
          <CardBody className="flex flex-col items-center py-6 text-center">
            <div className="p-3 rounded-full bg-warning-50 mb-4">
              <Calendar className="h-6 w-6 text-warning-500" />
            </div>
            <h3 className="text-lg font-medium mb-1">Request Leave</h3>
            <p className="text-sm text-gray-500 mb-4">Apply for time off</p>
            <Button variant="outline" size="sm">Apply</Button>
          </CardBody>
        </Card>
        
        <Card className="hover:border-primary-300 cursor-pointer transition-all">
          <CardBody className="flex flex-col items-center py-6 text-center">
            <div className="p-3 rounded-full bg-success-50 mb-4">
              <FileText className="h-6 w-6 text-success-500" />
            </div>
            <h3 className="text-lg font-medium mb-1">Payslips</h3>
            <p className="text-sm text-gray-500 mb-4">View your payslips</p>
            <Button variant="outline" size="sm">View</Button>
          </CardBody>
        </Card>
        
        <Card className="hover:border-primary-300 cursor-pointer transition-all">
          <CardBody className="flex flex-col items-center py-6 text-center">
            <div className="p-3 rounded-full bg-secondary-50 mb-4">
              <Briefcase className="h-6 w-6 text-secondary-500" />
            </div>
            <h3 className="text-lg font-medium mb-1">Update Profile</h3>
            <p className="text-sm text-gray-500 mb-4">Manage your info</p>
            <Button variant="outline" size="sm">Edit</Button>
          </CardBody>
        </Card>
      </div>
      
      {/* Leave Requests */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-800">Your Leave Requests</h2>
        </CardHeader>
        <CardBody>
          {employeeLeaves.length === 0 ? (
            <p className="text-center py-4 text-gray-500">No leave requests found</p>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Type</TableHeader>
                  <TableHeader>From</TableHeader>
                  <TableHeader>To</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeLeaves.map((leave) => (
                  <TableRow key={leave.id}>
                    <TableCell className="capitalize">{leave.type}</TableCell>
                    <TableCell>{new Date(leave.startDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(leave.endDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(leave.status)} className="capitalize">
                        {leave.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardBody>
        <CardFooter>
          <Button size="sm">New Leave Request</Button>
        </CardFooter>
      </Card>
      
      {/* Recent Payslips */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-800">Recent Payslips</h2>
        </CardHeader>
        <CardBody>
          {employeePayslips.length === 0 ? (
            <p className="text-center py-4 text-gray-500">No payslips found</p>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Month</TableHeader>
                  <TableHeader>Year</TableHeader>
                  <TableHeader>Net Salary</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {employeePayslips.map((payslip) => (
                  <TableRow key={payslip.id}>
                    <TableCell>{getMonthName(payslip.month)}</TableCell>
                    <TableCell>{payslip.year}</TableCell>
                    <TableCell>${payslip.netSalary.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={payslip.status === 'paid' ? 'success' : 'warning'}
                        className="capitalize"
                      >
                        {payslip.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardBody>
      </Card>
      
      {/* Attendance Summary */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-800">Attendance Summary</h2>
        </CardHeader>
        <CardBody className="h-64">
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-400">Attendance Summary Chart will appear here</p>
            {/* In a real app, you would render a chart here using a library like Recharts */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};