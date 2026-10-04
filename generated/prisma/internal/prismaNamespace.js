import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Project: 'Project',
    Member: 'Member',
    Task: 'Task',
    WorkLog: 'WorkLog',
    Activity: 'Activity',
    PeerEvaluation: 'PeerEvaluation'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const ProjectScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MemberScalarFieldEnum = {
    id: 'id',
    name: 'name',
    role: 'role',
    email: 'email',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const TaskScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    hours: 'hours',
    progress: 'progress',
    status: 'status',
    priority: 'priority',
    projectId: 'projectId',
    memberId: 'memberId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WorkLogScalarFieldEnum = {
    id: 'id',
    hours: 'hours',
    description: 'description',
    workDate: 'workDate',
    memberId: 'memberId',
    taskId: 'taskId',
    createdAt: 'createdAt'
};
export const ActivityScalarFieldEnum = {
    id: 'id',
    action: 'action',
    timestamp: 'timestamp',
    projectId: 'projectId',
    memberId: 'memberId',
    taskId: 'taskId'
};
export const PeerEvaluationScalarFieldEnum = {
    id: 'id',
    evaluatorId: 'evaluatorId',
    targetMemberId: 'targetMemberId',
    responsibility: 'responsibility',
    communication: 'communication',
    teamwork: 'teamwork',
    quality: 'quality',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map