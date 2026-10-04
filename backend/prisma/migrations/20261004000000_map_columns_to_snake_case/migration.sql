-- Rename camelCase columns to snake_case

ALTER TABLE "projects"
RENAME COLUMN "createdAt" TO "created_at";

ALTER TABLE "projects"
RENAME COLUMN "updatedAt" TO "updated_at";


ALTER TABLE "members"
RENAME COLUMN "projectId" TO "project_id";

ALTER TABLE "members"
RENAME COLUMN "createdAt" TO "created_at";

ALTER TABLE "members"
RENAME COLUMN "updatedAt" TO "updated_at";


ALTER TABLE "tasks"
RENAME COLUMN "projectId" TO "project_id";

ALTER TABLE "tasks"
RENAME COLUMN "memberId" TO "member_id";

ALTER TABLE "tasks"
RENAME COLUMN "createdAt" TO "created_at";

ALTER TABLE "tasks"
RENAME COLUMN "updatedAt" TO "updated_at";


ALTER TABLE "work_logs"
RENAME COLUMN "workDate" TO "work_date";

ALTER TABLE "work_logs"
RENAME COLUMN "memberId" TO "member_id";

ALTER TABLE "work_logs"
RENAME COLUMN "taskId" TO "task_id";

ALTER TABLE "work_logs"
RENAME COLUMN "createdAt" TO "created_at";


ALTER TABLE "activities"
RENAME COLUMN "projectId" TO "project_id";

ALTER TABLE "activities"
RENAME COLUMN "memberId" TO "member_id";

ALTER TABLE "activities"
RENAME COLUMN "taskId" TO "task_id";


ALTER TABLE "peer_evaluations"
RENAME COLUMN "evaluatorId" TO "evaluator_id";

ALTER TABLE "peer_evaluations"
RENAME COLUMN "targetMemberId" TO "target_member_id";

ALTER TABLE "peer_evaluations"
RENAME COLUMN "createdAt" TO "created_at";