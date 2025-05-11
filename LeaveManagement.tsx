import React, { useState } from 'react';
import { Search, Plus, Calendar } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter 
} from '../../components/ui/Card';
import { 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableHeader, 
  TableCell 
} from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Badge } from '../../components/ui/Badge';
import { Avatar } from '../../components/ui/Avatar';
import { Modal } from '../../components/ui/Modal';
import { mockLeaveRequests } from '../../data/mockData';
import { LeaveRequest } from '../../types';
import { useAuth } from '../../contexts/AuthContext';

export const LeaveManagement: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin' || user?.role === 'hr';
  
  const [leaves, setLeaves] = useState<LeaveRequest[]>(mockLeaveRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isNewLeaveModalOpen, setIsNewLeaveModalOpen] = useState(false);
  
  // Filter leaves based on search term and status filter
  const filteredLeaves = leaves.filter((leave) => {
    const matchesSearch = leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         leave.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || leave.status === filterStatus;
    
    // If user is an employee, only show their leaves
    if (user?.role === 'employee') {
      return leave.employeeId === '1' && matchesSearch && matchesFilter;
    }
    
    return matchesSearch && matchesFilter;
  });
  
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
  
  const handleStatusChange = (leaveId: string, newStatus: 'approved' | 'rejected') => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === leaveId ? { ...leave, status: newStatus } : leave
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Leave Management</h1>
          <p className="text-gray-600">
            {isAdmin 
              ? 'Manage and approve employee leave requests' 
              : 'Manage your leave requests'}
          </p>
        </div>
        
        <Button onClick={() => setIsNewLeaveModalOpen(true)}>
          <Plus size={16} className="mr-2" />
          New Leave Request
        </Button>
      </div>
      
      <Card>
        <CardHeader className="bg-gray-50">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              {isAdmin ? 'All Leave Requests' : 'My Leave Requests'}
            </h2>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <div className="relative w-full sm:w-64">
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              
              <Select
                options={[
                  { value: 'all', label: 'All Status' },
                  { value: 'pending', label: 'Pending' },
                  { value: 'approved', label: 'Approved' },
                  { value: 'rejected', label: 'Rejected' },
                ]}
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        
        <CardBody>
          {filteredLeaves.length === 0 ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Calendar size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">No leave requests found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filters' 
                  : 'Create your first leave request to get started'}
              </p>
              <Button onClick={() => setIsNewLeaveModalOpen(true)}>
                <Plus size={16} className="mr-2" />
                New Leave Request
              </Button>
            </div>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  {isAdmin && <TableHeader>Employee</TableHeader>}
                  <TableHeader>Type</TableHeader>
                  <TableHeader>Start Date</TableHeader>
                  <TableHeader>End Date</TableHeader>
                  <TableHeader>Duration</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredLeaves.map((leave) => {
                  const startDate = new Date(leave.startDate);
                  const endDate = new Date(leave.endDate);
                  
                  // Calculate the duration in days
                  const durationMs = endDate.getTime() - startDate.getTime();
                  const durationDays = Math.floor(durationMs / (1000 * 60 * 60 * 24)) + 1;
                  
                  return (
                    <TableRow key={leave.id}>
                      {isAdmin && (
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar size="sm" />
                            <div>
                              <p className="font-medium text-gray-800">{leave.employeeName}</p>
                            </div>
                          </div>
                        </TableCell>
                      )}
                      <TableCell className="capitalize">{leave.type}</TableCell>
                      <TableCell>{startDate.toLocaleDateString()}</TableCell>
                      <TableCell>{endDate.toLocaleDateString()}</TableCell>
                      <TableCell>{durationDays} day{durationDays !== 1 ? 's' : ''}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(leave.status)} className="capitalize">
                          {leave.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {leave.status === 'pending' && isAdmin ? (
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="success"
                              onClick={() => handleStatusChange(leave.id, 'approved')}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => handleStatusChange(leave.id, 'rejected')}
                            >
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardBody>
      </Card>
      
      {/* New Leave Request Modal */}
      <Modal
        isOpen={isNewLeaveModalOpen}
        onClose={() => setIsNewLeaveModalOpen(false)}
        title="New Leave Request"
        size="md"
        footer={
          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              onClick={() => setIsNewLeaveModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                // In a real app, you would submit the form data
                setIsNewLeaveModalOpen(false);
              }}
            >
              Submit Request
            </Button>
          </div>
        }
      >
        <form className="space-y-4">
          <Select
            label="Leave Type"
            options={[
              { value: 'vacation', label: 'Vacation' },
              { value: 'sick', label: 'Sick Leave' },
              { value: 'personal', label: 'Personal Leave' },
              { value: 'other', label: 'Other' },
            ]}
            fullWidth
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="date"
              label="Start Date"
              fullWidth
            />
            <Input
              type="date"
              label="End Date"
              fullWidth
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Leave
            </label>
            <textarea
              className="input min-h-[100px]"
              placeholder="Provide details about your leave request..."
            ></textarea>
          </div>
        </form>
      </Modal>
    </div>
  );
};