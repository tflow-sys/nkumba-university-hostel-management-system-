export type Campus = 'Main' | 'Kampala';

export interface Student {
  id: string;
  name: string;
  studentNumber: string;
  faculty: string;
  yearOfStudy: number;
  hostelId: string;
  roomId: string;
  clearanceStatus: 'pending' | 'cleared' | 'not_cleared';
}

export interface Room {
  id: string;
  number: string;
  capacity: number;
  currentOccupancy: number;
  type: 'single' | 'double' | 'triple';
  floor: number;
  hostelId: string;
  status: 'available' | 'occupied' | 'maintenance';
}

export interface Hostel {
  id: string;
  name: string;
  campus: Campus;
  totalRooms: number;
  totalCapacity: number;
  currentOccupancy: number;
  gender: 'male' | 'female' | 'mixed';
}

export interface Complaint {
  id: string;
  studentId: string;
  roomId: string;
  hostelId: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: string;
  studentId: string;
  amount: number;
  type: 'hostel_fee' | 'fine' | 'damage';
  status: 'pending' | 'paid' | 'overdue';
  dueDate: string;
  paidDate?: string;
}

export interface MaintenanceRecord {
  id: string;
  roomId: string;
  hostelId: string;
  type: 'repair' | 'cleaning' | 'inspection';
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  cost?: number;
  scheduledDate: string;
  completedDate?: string;
}