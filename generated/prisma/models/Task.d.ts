import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskAvgAggregateOutputType = {
    hours: number | null;
    progress: number | null;
};
export type TaskSumAggregateOutputType = {
    hours: number | null;
    progress: number | null;
};
export type TaskMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    hours: number | null;
    progress: number | null;
    status: $Enums.TaskStatus | null;
    priority: $Enums.TaskPriority | null;
    projectId: string | null;
    memberId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    hours: number | null;
    progress: number | null;
    status: $Enums.TaskStatus | null;
    priority: $Enums.TaskPriority | null;
    projectId: string | null;
    memberId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    category: number;
    hours: number;
    progress: number;
    status: number;
    priority: number;
    projectId: number;
    memberId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaskAvgAggregateInputType = {
    hours?: true;
    progress?: true;
};
export type TaskSumAggregateInputType = {
    hours?: true;
    progress?: true;
};
export type TaskMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    category?: true;
    hours?: true;
    progress?: true;
    status?: true;
    priority?: true;
    projectId?: true;
    memberId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    category?: true;
    hours?: true;
    progress?: true;
    status?: true;
    priority?: true;
    projectId?: true;
    memberId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    category?: true;
    hours?: true;
    progress?: true;
    status?: true;
    priority?: true;
    projectId?: true;
    memberId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    category: string | null;
    hours: number;
    progress: number;
    status: $Enums.TaskStatus;
    priority: $Enums.TaskPriority;
    projectId: string;
    memberId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    category?: Prisma.StringNullableFilter<"Task"> | string | null;
    hours?: Prisma.FloatFilter<"Task"> | number;
    progress?: Prisma.IntFilter<"Task"> | number;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority;
    projectId?: Prisma.StringFilter<"Task"> | string;
    memberId?: Prisma.StringNullableFilter<"Task"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    member?: Prisma.XOR<Prisma.MemberNullableScalarRelationFilter, Prisma.MemberWhereInput> | null;
    workLogs?: Prisma.WorkLogListRelationFilter;
    activities?: Prisma.ActivityListRelationFilter;
};
export type TaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    member?: Prisma.MemberOrderByWithRelationInput;
    workLogs?: Prisma.WorkLogOrderByRelationAggregateInput;
    activities?: Prisma.ActivityOrderByRelationAggregateInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    category?: Prisma.StringNullableFilter<"Task"> | string | null;
    hours?: Prisma.FloatFilter<"Task"> | number;
    progress?: Prisma.IntFilter<"Task"> | number;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority;
    projectId?: Prisma.StringFilter<"Task"> | string;
    memberId?: Prisma.StringNullableFilter<"Task"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    member?: Prisma.XOR<Prisma.MemberNullableScalarRelationFilter, Prisma.MemberWhereInput> | null;
    workLogs?: Prisma.WorkLogListRelationFilter;
    activities?: Prisma.ActivityListRelationFilter;
}, "id">;
export type TaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _avg?: Prisma.TaskAvgOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
    _sum?: Prisma.TaskSumOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    hours?: Prisma.FloatWithAggregatesFilter<"Task"> | number;
    progress?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    status?: Prisma.EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority;
    projectId?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    memberId?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
};
export type TaskCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    member?: Prisma.MemberCreateNestedOneWithoutTasksInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutTaskInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    projectId: string;
    memberId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutTaskInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    member?: Prisma.MemberUpdateOneWithoutTasksNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutTaskNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutTaskNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    projectId: string;
    memberId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskListRelationFilter = {
    every?: Prisma.TaskWhereInput;
    some?: Prisma.TaskWhereInput;
    none?: Prisma.TaskWhereInput;
};
export type TaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskAvgOrderByAggregateInput = {
    hours?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskSumOrderByAggregateInput = {
    hours?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
};
export type TaskScalarRelationFilter = {
    is?: Prisma.TaskWhereInput;
    isNot?: Prisma.TaskWhereInput;
};
export type TaskNullableScalarRelationFilter = {
    is?: Prisma.TaskWhereInput | null;
    isNot?: Prisma.TaskWhereInput | null;
};
export type TaskCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutProjectInput | Prisma.TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutProjectInput | Prisma.TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMemberInput, Prisma.TaskUncheckedCreateWithoutMemberInput> | Prisma.TaskCreateWithoutMemberInput[] | Prisma.TaskUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMemberInput | Prisma.TaskCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.TaskCreateManyMemberInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMemberInput, Prisma.TaskUncheckedCreateWithoutMemberInput> | Prisma.TaskCreateWithoutMemberInput[] | Prisma.TaskUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMemberInput | Prisma.TaskCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.TaskCreateManyMemberInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMemberInput, Prisma.TaskUncheckedCreateWithoutMemberInput> | Prisma.TaskCreateWithoutMemberInput[] | Prisma.TaskUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMemberInput | Prisma.TaskCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutMemberInput | Prisma.TaskUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.TaskCreateManyMemberInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutMemberInput | Prisma.TaskUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutMemberInput | Prisma.TaskUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMemberInput, Prisma.TaskUncheckedCreateWithoutMemberInput> | Prisma.TaskCreateWithoutMemberInput[] | Prisma.TaskUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMemberInput | Prisma.TaskCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutMemberInput | Prisma.TaskUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.TaskCreateManyMemberInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutMemberInput | Prisma.TaskUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutMemberInput | Prisma.TaskUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus;
};
export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority;
};
export type TaskCreateNestedOneWithoutWorkLogsInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutWorkLogsInput, Prisma.TaskUncheckedCreateWithoutWorkLogsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutWorkLogsInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneRequiredWithoutWorkLogsNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutWorkLogsInput, Prisma.TaskUncheckedCreateWithoutWorkLogsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutWorkLogsInput;
    upsert?: Prisma.TaskUpsertWithoutWorkLogsInput;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutWorkLogsInput, Prisma.TaskUpdateWithoutWorkLogsInput>, Prisma.TaskUncheckedUpdateWithoutWorkLogsInput>;
};
export type TaskCreateNestedOneWithoutActivitiesInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutActivitiesInput, Prisma.TaskUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutActivitiesInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneWithoutActivitiesNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutActivitiesInput, Prisma.TaskUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutActivitiesInput;
    upsert?: Prisma.TaskUpsertWithoutActivitiesInput;
    disconnect?: Prisma.TaskWhereInput | boolean;
    delete?: Prisma.TaskWhereInput | boolean;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutActivitiesInput, Prisma.TaskUpdateWithoutActivitiesInput>, Prisma.TaskUncheckedUpdateWithoutActivitiesInput>;
};
export type TaskCreateWithoutProjectInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    member?: Prisma.MemberCreateNestedOneWithoutTasksInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutTaskInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    memberId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutTaskInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput>;
};
export type TaskCreateManyProjectInputEnvelope = {
    data: Prisma.TaskCreateManyProjectInput | Prisma.TaskCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutProjectInput, Prisma.TaskUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput>;
};
export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutProjectInput, Prisma.TaskUncheckedUpdateWithoutProjectInput>;
};
export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutProjectInput>;
};
export type TaskScalarWhereInput = {
    AND?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    OR?: Prisma.TaskScalarWhereInput[];
    NOT?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    category?: Prisma.StringNullableFilter<"Task"> | string | null;
    hours?: Prisma.FloatFilter<"Task"> | number;
    progress?: Prisma.IntFilter<"Task"> | number;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority;
    projectId?: Prisma.StringFilter<"Task"> | string;
    memberId?: Prisma.StringNullableFilter<"Task"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
};
export type TaskCreateWithoutMemberInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutTaskInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutMemberInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutTaskInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutMemberInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutMemberInput, Prisma.TaskUncheckedCreateWithoutMemberInput>;
};
export type TaskCreateManyMemberInputEnvelope = {
    data: Prisma.TaskCreateManyMemberInput | Prisma.TaskCreateManyMemberInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutMemberInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutMemberInput, Prisma.TaskUncheckedUpdateWithoutMemberInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutMemberInput, Prisma.TaskUncheckedCreateWithoutMemberInput>;
};
export type TaskUpdateWithWhereUniqueWithoutMemberInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutMemberInput, Prisma.TaskUncheckedUpdateWithoutMemberInput>;
};
export type TaskUpdateManyWithWhereWithoutMemberInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutMemberInput>;
};
export type TaskCreateWithoutWorkLogsInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    member?: Prisma.MemberCreateNestedOneWithoutTasksInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutWorkLogsInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    projectId: string;
    memberId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutWorkLogsInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutWorkLogsInput, Prisma.TaskUncheckedCreateWithoutWorkLogsInput>;
};
export type TaskUpsertWithoutWorkLogsInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutWorkLogsInput, Prisma.TaskUncheckedUpdateWithoutWorkLogsInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutWorkLogsInput, Prisma.TaskUncheckedCreateWithoutWorkLogsInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutWorkLogsInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutWorkLogsInput, Prisma.TaskUncheckedUpdateWithoutWorkLogsInput>;
};
export type TaskUpdateWithoutWorkLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    member?: Prisma.MemberUpdateOneWithoutTasksNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutWorkLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateWithoutActivitiesInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    member?: Prisma.MemberCreateNestedOneWithoutTasksInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutActivitiesInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    projectId: string;
    memberId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutActivitiesInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutActivitiesInput, Prisma.TaskUncheckedCreateWithoutActivitiesInput>;
};
export type TaskUpsertWithoutActivitiesInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutActivitiesInput, Prisma.TaskUncheckedUpdateWithoutActivitiesInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutActivitiesInput, Prisma.TaskUncheckedCreateWithoutActivitiesInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutActivitiesInput, Prisma.TaskUncheckedUpdateWithoutActivitiesInput>;
};
export type TaskUpdateWithoutActivitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    member?: Prisma.MemberUpdateOneWithoutTasksNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutActivitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateManyProjectInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    memberId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    member?: Prisma.MemberUpdateOneWithoutTasksNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutTaskNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    memberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutTaskNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    memberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyMemberInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: string | null;
    hours?: number;
    progress?: number;
    status?: $Enums.TaskStatus;
    priority?: $Enums.TaskPriority;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutTaskNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutTaskNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateManyWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCountOutputType = {
    workLogs: number;
    activities: number;
};
export type TaskCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workLogs?: boolean | TaskCountOutputTypeCountWorkLogsArgs;
    activities?: boolean | TaskCountOutputTypeCountActivitiesArgs;
};
export type TaskCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCountOutputTypeSelect<ExtArgs> | null;
};
export type TaskCountOutputTypeCountWorkLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkLogWhereInput;
};
export type TaskCountOutputTypeCountActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityWhereInput;
};
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    hours?: boolean;
    progress?: boolean;
    status?: boolean;
    priority?: boolean;
    projectId?: boolean;
    memberId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.Task$memberArgs<ExtArgs>;
    workLogs?: boolean | Prisma.Task$workLogsArgs<ExtArgs>;
    activities?: boolean | Prisma.Task$activitiesArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    hours?: boolean;
    progress?: boolean;
    status?: boolean;
    priority?: boolean;
    projectId?: boolean;
    memberId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.Task$memberArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    hours?: boolean;
    progress?: boolean;
    status?: boolean;
    priority?: boolean;
    projectId?: boolean;
    memberId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.Task$memberArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    hours?: boolean;
    progress?: boolean;
    status?: boolean;
    priority?: boolean;
    projectId?: boolean;
    memberId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "category" | "hours" | "progress" | "status" | "priority" | "projectId" | "memberId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.Task$memberArgs<ExtArgs>;
    workLogs?: boolean | Prisma.Task$workLogsArgs<ExtArgs>;
    activities?: boolean | Prisma.Task$activitiesArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.Task$memberArgs<ExtArgs>;
};
export type TaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.Task$memberArgs<ExtArgs>;
};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        member: Prisma.$MemberPayload<ExtArgs> | null;
        workLogs: Prisma.$WorkLogPayload<ExtArgs>[];
        activities: Prisma.$ActivityPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        category: string | null;
        hours: number;
        progress: number;
        status: $Enums.TaskStatus;
        priority: $Enums.TaskPriority;
        projectId: string;
        memberId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    member<T extends Prisma.Task$memberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$memberArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    workLogs<T extends Prisma.Task$workLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$workLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activities<T extends Prisma.Task$activitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'String'>;
    readonly title: Prisma.FieldRef<"Task", 'String'>;
    readonly description: Prisma.FieldRef<"Task", 'String'>;
    readonly category: Prisma.FieldRef<"Task", 'String'>;
    readonly hours: Prisma.FieldRef<"Task", 'Float'>;
    readonly progress: Prisma.FieldRef<"Task", 'Int'>;
    readonly status: Prisma.FieldRef<"Task", 'TaskStatus'>;
    readonly priority: Prisma.FieldRef<"Task", 'TaskPriority'>;
    readonly projectId: Prisma.FieldRef<"Task", 'String'>;
    readonly memberId: Prisma.FieldRef<"Task", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Task", 'DateTime'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
    include?: Prisma.TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type Task$memberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
};
export type Task$workLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelect<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    include?: Prisma.WorkLogInclude<ExtArgs> | null;
    where?: Prisma.WorkLogWhereInput;
    orderBy?: Prisma.WorkLogOrderByWithRelationInput | Prisma.WorkLogOrderByWithRelationInput[];
    cursor?: Prisma.WorkLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkLogScalarFieldEnum | Prisma.WorkLogScalarFieldEnum[];
};
export type Task$activitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelect<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    include?: Prisma.ActivityInclude<ExtArgs> | null;
    where?: Prisma.ActivityWhereInput;
    orderBy?: Prisma.ActivityOrderByWithRelationInput | Prisma.ActivityOrderByWithRelationInput[];
    cursor?: Prisma.ActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityScalarFieldEnum | Prisma.ActivityScalarFieldEnum[];
};
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
