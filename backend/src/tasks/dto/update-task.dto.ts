export class UpdateTaskDto {
  title?: string;
  description?: string;
  category?: string;
  hours?: number;
  progress?: number;
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  memberId?: string;
}