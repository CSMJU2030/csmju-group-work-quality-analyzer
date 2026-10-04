export class CreateActivityDto {
  action: string;
  projectId: string;
  memberId: string;
  taskId?: string;
}
