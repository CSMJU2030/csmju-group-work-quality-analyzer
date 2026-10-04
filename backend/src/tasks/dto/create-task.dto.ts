export class CreateTaskDto {
  title: string;
  description?: string;
  category?: string;
  hours?: number;
  progress?: number;
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  projectId: string;
  memberId?: string;
}
