import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MemberModel = runtime.Types.Result.DefaultSelection<Prisma.$MemberPayload>;
export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null;
    _min: MemberMinAggregateOutputType | null;
    _max: MemberMaxAggregateOutputType | null;
};
export type MemberMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    role: string | null;
    email: string | null;
    projectId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MemberMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    role: string | null;
    email: string | null;
    projectId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MemberCountAggregateOutputType = {
    id: number;
    name: number;
    role: number;
    email: number;
    projectId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MemberMinAggregateInputType = {
    id?: true;
    name?: true;
    role?: true;
    email?: true;
    projectId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MemberMaxAggregateInputType = {
    id?: true;
    name?: true;
    role?: true;
    email?: true;
    projectId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MemberCountAggregateInputType = {
    id?: true;
    name?: true;
    role?: true;
    email?: true;
    projectId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MemberCountAggregateInputType;
    _min?: MemberMinAggregateInputType;
    _max?: MemberMaxAggregateInputType;
};
export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
    [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMember[P]> : Prisma.GetScalarType<T[P], AggregateMember[P]>;
};
export type MemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithAggregationInput | Prisma.MemberOrderByWithAggregationInput[];
    by: Prisma.MemberScalarFieldEnum[] | Prisma.MemberScalarFieldEnum;
    having?: Prisma.MemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MemberCountAggregateInputType | true;
    _min?: MemberMinAggregateInputType;
    _max?: MemberMaxAggregateInputType;
};
export type MemberGroupByOutputType = {
    id: string;
    name: string;
    role: string | null;
    email: string | null;
    projectId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MemberCountAggregateOutputType | null;
    _min: MemberMinAggregateOutputType | null;
    _max: MemberMaxAggregateOutputType | null;
};
export type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MemberGroupByOutputType[P]>;
}>>;
export type MemberWhereInput = {
    AND?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    OR?: Prisma.MemberWhereInput[];
    NOT?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    id?: Prisma.StringFilter<"Member"> | string;
    name?: Prisma.StringFilter<"Member"> | string;
    role?: Prisma.StringNullableFilter<"Member"> | string | null;
    email?: Prisma.StringNullableFilter<"Member"> | string | null;
    projectId?: Prisma.StringFilter<"Member"> | string;
    createdAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    tasks?: Prisma.TaskListRelationFilter;
    workLogs?: Prisma.WorkLogListRelationFilter;
    activities?: Prisma.ActivityListRelationFilter;
    evaluationsGiven?: Prisma.PeerEvaluationListRelationFilter;
    evaluationsReceived?: Prisma.PeerEvaluationListRelationFilter;
};
export type MemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    tasks?: Prisma.TaskOrderByRelationAggregateInput;
    workLogs?: Prisma.WorkLogOrderByRelationAggregateInput;
    activities?: Prisma.ActivityOrderByRelationAggregateInput;
    evaluationsGiven?: Prisma.PeerEvaluationOrderByRelationAggregateInput;
    evaluationsReceived?: Prisma.PeerEvaluationOrderByRelationAggregateInput;
};
export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    OR?: Prisma.MemberWhereInput[];
    NOT?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    name?: Prisma.StringFilter<"Member"> | string;
    role?: Prisma.StringNullableFilter<"Member"> | string | null;
    email?: Prisma.StringNullableFilter<"Member"> | string | null;
    projectId?: Prisma.StringFilter<"Member"> | string;
    createdAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    tasks?: Prisma.TaskListRelationFilter;
    workLogs?: Prisma.WorkLogListRelationFilter;
    activities?: Prisma.ActivityListRelationFilter;
    evaluationsGiven?: Prisma.PeerEvaluationListRelationFilter;
    evaluationsReceived?: Prisma.PeerEvaluationListRelationFilter;
}, "id">;
export type MemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MemberCountOrderByAggregateInput;
    _max?: Prisma.MemberMaxOrderByAggregateInput;
    _min?: Prisma.MemberMinOrderByAggregateInput;
};
export type MemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.MemberScalarWhereWithAggregatesInput | Prisma.MemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.MemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MemberScalarWhereWithAggregatesInput | Prisma.MemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Member"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Member"> | string;
    role?: Prisma.StringNullableWithAggregatesFilter<"Member"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Member"> | string | null;
    projectId?: Prisma.StringWithAggregatesFilter<"Member"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Member"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Member"> | Date | string;
};
export type MemberCreateInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationCreateNestedManyWithoutTargetMemberInput;
};
export type MemberUncheckedCreateInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutTargetMemberInput;
};
export type MemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberCreateManyInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemberListRelationFilter = {
    every?: Prisma.MemberWhereInput;
    some?: Prisma.MemberWhereInput;
    none?: Prisma.MemberWhereInput;
};
export type MemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemberNullableScalarRelationFilter = {
    is?: Prisma.MemberWhereInput | null;
    isNot?: Prisma.MemberWhereInput | null;
};
export type MemberScalarRelationFilter = {
    is?: Prisma.MemberWhereInput;
    isNot?: Prisma.MemberWhereInput;
};
export type MemberCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutProjectInput, Prisma.MemberUncheckedCreateWithoutProjectInput> | Prisma.MemberCreateWithoutProjectInput[] | Prisma.MemberUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutProjectInput | Prisma.MemberCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.MemberCreateManyProjectInputEnvelope;
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
};
export type MemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutProjectInput, Prisma.MemberUncheckedCreateWithoutProjectInput> | Prisma.MemberCreateWithoutProjectInput[] | Prisma.MemberUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutProjectInput | Prisma.MemberCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.MemberCreateManyProjectInputEnvelope;
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
};
export type MemberUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutProjectInput, Prisma.MemberUncheckedCreateWithoutProjectInput> | Prisma.MemberCreateWithoutProjectInput[] | Prisma.MemberUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutProjectInput | Prisma.MemberCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.MemberUpsertWithWhereUniqueWithoutProjectInput | Prisma.MemberUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.MemberCreateManyProjectInputEnvelope;
    set?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    disconnect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    delete?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    update?: Prisma.MemberUpdateWithWhereUniqueWithoutProjectInput | Prisma.MemberUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.MemberUpdateManyWithWhereWithoutProjectInput | Prisma.MemberUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
};
export type MemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutProjectInput, Prisma.MemberUncheckedCreateWithoutProjectInput> | Prisma.MemberCreateWithoutProjectInput[] | Prisma.MemberUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutProjectInput | Prisma.MemberCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.MemberUpsertWithWhereUniqueWithoutProjectInput | Prisma.MemberUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.MemberCreateManyProjectInputEnvelope;
    set?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    disconnect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    delete?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    update?: Prisma.MemberUpdateWithWhereUniqueWithoutProjectInput | Prisma.MemberUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.MemberUpdateManyWithWhereWithoutProjectInput | Prisma.MemberUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
};
export type MemberCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutTasksInput, Prisma.MemberUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutTasksInput;
    connect?: Prisma.MemberWhereUniqueInput;
};
export type MemberUpdateOneWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutTasksInput, Prisma.MemberUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.MemberUpsertWithoutTasksInput;
    disconnect?: Prisma.MemberWhereInput | boolean;
    delete?: Prisma.MemberWhereInput | boolean;
    connect?: Prisma.MemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MemberUpdateToOneWithWhereWithoutTasksInput, Prisma.MemberUpdateWithoutTasksInput>, Prisma.MemberUncheckedUpdateWithoutTasksInput>;
};
export type MemberCreateNestedOneWithoutWorkLogsInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutWorkLogsInput, Prisma.MemberUncheckedCreateWithoutWorkLogsInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutWorkLogsInput;
    connect?: Prisma.MemberWhereUniqueInput;
};
export type MemberUpdateOneRequiredWithoutWorkLogsNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutWorkLogsInput, Prisma.MemberUncheckedCreateWithoutWorkLogsInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutWorkLogsInput;
    upsert?: Prisma.MemberUpsertWithoutWorkLogsInput;
    connect?: Prisma.MemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MemberUpdateToOneWithWhereWithoutWorkLogsInput, Prisma.MemberUpdateWithoutWorkLogsInput>, Prisma.MemberUncheckedUpdateWithoutWorkLogsInput>;
};
export type MemberCreateNestedOneWithoutActivitiesInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutActivitiesInput, Prisma.MemberUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutActivitiesInput;
    connect?: Prisma.MemberWhereUniqueInput;
};
export type MemberUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutActivitiesInput, Prisma.MemberUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutActivitiesInput;
    upsert?: Prisma.MemberUpsertWithoutActivitiesInput;
    connect?: Prisma.MemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MemberUpdateToOneWithWhereWithoutActivitiesInput, Prisma.MemberUpdateWithoutActivitiesInput>, Prisma.MemberUncheckedUpdateWithoutActivitiesInput>;
};
export type MemberCreateNestedOneWithoutEvaluationsGivenInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutEvaluationsGivenInput, Prisma.MemberUncheckedCreateWithoutEvaluationsGivenInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutEvaluationsGivenInput;
    connect?: Prisma.MemberWhereUniqueInput;
};
export type MemberCreateNestedOneWithoutEvaluationsReceivedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutEvaluationsReceivedInput, Prisma.MemberUncheckedCreateWithoutEvaluationsReceivedInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutEvaluationsReceivedInput;
    connect?: Prisma.MemberWhereUniqueInput;
};
export type MemberUpdateOneRequiredWithoutEvaluationsGivenNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutEvaluationsGivenInput, Prisma.MemberUncheckedCreateWithoutEvaluationsGivenInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutEvaluationsGivenInput;
    upsert?: Prisma.MemberUpsertWithoutEvaluationsGivenInput;
    connect?: Prisma.MemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MemberUpdateToOneWithWhereWithoutEvaluationsGivenInput, Prisma.MemberUpdateWithoutEvaluationsGivenInput>, Prisma.MemberUncheckedUpdateWithoutEvaluationsGivenInput>;
};
export type MemberUpdateOneRequiredWithoutEvaluationsReceivedNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutEvaluationsReceivedInput, Prisma.MemberUncheckedCreateWithoutEvaluationsReceivedInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutEvaluationsReceivedInput;
    upsert?: Prisma.MemberUpsertWithoutEvaluationsReceivedInput;
    connect?: Prisma.MemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MemberUpdateToOneWithWhereWithoutEvaluationsReceivedInput, Prisma.MemberUpdateWithoutEvaluationsReceivedInput>, Prisma.MemberUncheckedUpdateWithoutEvaluationsReceivedInput>;
};
export type MemberCreateWithoutProjectInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationCreateNestedManyWithoutTargetMemberInput;
};
export type MemberUncheckedCreateWithoutProjectInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutTargetMemberInput;
};
export type MemberCreateOrConnectWithoutProjectInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutProjectInput, Prisma.MemberUncheckedCreateWithoutProjectInput>;
};
export type MemberCreateManyProjectInputEnvelope = {
    data: Prisma.MemberCreateManyProjectInput | Prisma.MemberCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type MemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.MemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.MemberUpdateWithoutProjectInput, Prisma.MemberUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutProjectInput, Prisma.MemberUncheckedCreateWithoutProjectInput>;
};
export type MemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.MemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutProjectInput, Prisma.MemberUncheckedUpdateWithoutProjectInput>;
};
export type MemberUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.MemberScalarWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyWithoutProjectInput>;
};
export type MemberScalarWhereInput = {
    AND?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
    OR?: Prisma.MemberScalarWhereInput[];
    NOT?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
    id?: Prisma.StringFilter<"Member"> | string;
    name?: Prisma.StringFilter<"Member"> | string;
    role?: Prisma.StringNullableFilter<"Member"> | string | null;
    email?: Prisma.StringNullableFilter<"Member"> | string | null;
    projectId?: Prisma.StringFilter<"Member"> | string;
    createdAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
};
export type MemberCreateWithoutTasksInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationCreateNestedManyWithoutTargetMemberInput;
};
export type MemberUncheckedCreateWithoutTasksInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutTargetMemberInput;
};
export type MemberCreateOrConnectWithoutTasksInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutTasksInput, Prisma.MemberUncheckedCreateWithoutTasksInput>;
};
export type MemberUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.MemberUpdateWithoutTasksInput, Prisma.MemberUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutTasksInput, Prisma.MemberUncheckedCreateWithoutTasksInput>;
    where?: Prisma.MemberWhereInput;
};
export type MemberUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.MemberWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutTasksInput, Prisma.MemberUncheckedUpdateWithoutTasksInput>;
};
export type MemberUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberCreateWithoutWorkLogsInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationCreateNestedManyWithoutTargetMemberInput;
};
export type MemberUncheckedCreateWithoutWorkLogsInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutTargetMemberInput;
};
export type MemberCreateOrConnectWithoutWorkLogsInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutWorkLogsInput, Prisma.MemberUncheckedCreateWithoutWorkLogsInput>;
};
export type MemberUpsertWithoutWorkLogsInput = {
    update: Prisma.XOR<Prisma.MemberUpdateWithoutWorkLogsInput, Prisma.MemberUncheckedUpdateWithoutWorkLogsInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutWorkLogsInput, Prisma.MemberUncheckedCreateWithoutWorkLogsInput>;
    where?: Prisma.MemberWhereInput;
};
export type MemberUpdateToOneWithWhereWithoutWorkLogsInput = {
    where?: Prisma.MemberWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutWorkLogsInput, Prisma.MemberUncheckedUpdateWithoutWorkLogsInput>;
};
export type MemberUpdateWithoutWorkLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberUncheckedUpdateWithoutWorkLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberCreateWithoutActivitiesInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationCreateNestedManyWithoutTargetMemberInput;
};
export type MemberUncheckedCreateWithoutActivitiesInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutEvaluatorInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutTargetMemberInput;
};
export type MemberCreateOrConnectWithoutActivitiesInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutActivitiesInput, Prisma.MemberUncheckedCreateWithoutActivitiesInput>;
};
export type MemberUpsertWithoutActivitiesInput = {
    update: Prisma.XOR<Prisma.MemberUpdateWithoutActivitiesInput, Prisma.MemberUncheckedUpdateWithoutActivitiesInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutActivitiesInput, Prisma.MemberUncheckedCreateWithoutActivitiesInput>;
    where?: Prisma.MemberWhereInput;
};
export type MemberUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: Prisma.MemberWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutActivitiesInput, Prisma.MemberUncheckedUpdateWithoutActivitiesInput>;
};
export type MemberUpdateWithoutActivitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberUncheckedUpdateWithoutActivitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberCreateWithoutEvaluationsGivenInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutMemberInput;
    evaluationsReceived?: Prisma.PeerEvaluationCreateNestedManyWithoutTargetMemberInput;
};
export type MemberUncheckedCreateWithoutEvaluationsGivenInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutMemberInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutTargetMemberInput;
};
export type MemberCreateOrConnectWithoutEvaluationsGivenInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutEvaluationsGivenInput, Prisma.MemberUncheckedCreateWithoutEvaluationsGivenInput>;
};
export type MemberCreateWithoutEvaluationsReceivedInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationCreateNestedManyWithoutEvaluatorInput;
};
export type MemberUncheckedCreateWithoutEvaluationsReceivedInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMemberInput;
    workLogs?: Prisma.WorkLogUncheckedCreateNestedManyWithoutMemberInput;
    activities?: Prisma.ActivityUncheckedCreateNestedManyWithoutMemberInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedCreateNestedManyWithoutEvaluatorInput;
};
export type MemberCreateOrConnectWithoutEvaluationsReceivedInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutEvaluationsReceivedInput, Prisma.MemberUncheckedCreateWithoutEvaluationsReceivedInput>;
};
export type MemberUpsertWithoutEvaluationsGivenInput = {
    update: Prisma.XOR<Prisma.MemberUpdateWithoutEvaluationsGivenInput, Prisma.MemberUncheckedUpdateWithoutEvaluationsGivenInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutEvaluationsGivenInput, Prisma.MemberUncheckedCreateWithoutEvaluationsGivenInput>;
    where?: Prisma.MemberWhereInput;
};
export type MemberUpdateToOneWithWhereWithoutEvaluationsGivenInput = {
    where?: Prisma.MemberWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutEvaluationsGivenInput, Prisma.MemberUncheckedUpdateWithoutEvaluationsGivenInput>;
};
export type MemberUpdateWithoutEvaluationsGivenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutMemberNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberUncheckedUpdateWithoutEvaluationsGivenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutMemberNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberUpsertWithoutEvaluationsReceivedInput = {
    update: Prisma.XOR<Prisma.MemberUpdateWithoutEvaluationsReceivedInput, Prisma.MemberUncheckedUpdateWithoutEvaluationsReceivedInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutEvaluationsReceivedInput, Prisma.MemberUncheckedCreateWithoutEvaluationsReceivedInput>;
    where?: Prisma.MemberWhereInput;
};
export type MemberUpdateToOneWithWhereWithoutEvaluationsReceivedInput = {
    where?: Prisma.MemberWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutEvaluationsReceivedInput, Prisma.MemberUncheckedUpdateWithoutEvaluationsReceivedInput>;
};
export type MemberUpdateWithoutEvaluationsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUpdateManyWithoutEvaluatorNestedInput;
};
export type MemberUncheckedUpdateWithoutEvaluationsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutEvaluatorNestedInput;
};
export type MemberCreateManyProjectInput = {
    id?: string;
    name: string;
    role?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemberUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMemberNestedInput;
    workLogs?: Prisma.WorkLogUncheckedUpdateManyWithoutMemberNestedInput;
    activities?: Prisma.ActivityUncheckedUpdateManyWithoutMemberNestedInput;
    evaluationsGiven?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutEvaluatorNestedInput;
    evaluationsReceived?: Prisma.PeerEvaluationUncheckedUpdateManyWithoutTargetMemberNestedInput;
};
export type MemberUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemberCountOutputType = {
    tasks: number;
    workLogs: number;
    activities: number;
    evaluationsGiven: number;
    evaluationsReceived: number;
};
export type MemberCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | MemberCountOutputTypeCountTasksArgs;
    workLogs?: boolean | MemberCountOutputTypeCountWorkLogsArgs;
    activities?: boolean | MemberCountOutputTypeCountActivitiesArgs;
    evaluationsGiven?: boolean | MemberCountOutputTypeCountEvaluationsGivenArgs;
    evaluationsReceived?: boolean | MemberCountOutputTypeCountEvaluationsReceivedArgs;
};
export type MemberCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberCountOutputTypeSelect<ExtArgs> | null;
};
export type MemberCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type MemberCountOutputTypeCountWorkLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkLogWhereInput;
};
export type MemberCountOutputTypeCountActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityWhereInput;
};
export type MemberCountOutputTypeCountEvaluationsGivenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeerEvaluationWhereInput;
};
export type MemberCountOutputTypeCountEvaluationsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeerEvaluationWhereInput;
};
export type MemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    role?: boolean;
    email?: boolean;
    projectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.Member$tasksArgs<ExtArgs>;
    workLogs?: boolean | Prisma.Member$workLogsArgs<ExtArgs>;
    activities?: boolean | Prisma.Member$activitiesArgs<ExtArgs>;
    evaluationsGiven?: boolean | Prisma.Member$evaluationsGivenArgs<ExtArgs>;
    evaluationsReceived?: boolean | Prisma.Member$evaluationsReceivedArgs<ExtArgs>;
    _count?: boolean | Prisma.MemberCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["member"]>;
export type MemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    role?: boolean;
    email?: boolean;
    projectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["member"]>;
export type MemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    role?: boolean;
    email?: boolean;
    projectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["member"]>;
export type MemberSelectScalar = {
    id?: boolean;
    name?: boolean;
    role?: boolean;
    email?: boolean;
    projectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "role" | "email" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["member"]>;
export type MemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.Member$tasksArgs<ExtArgs>;
    workLogs?: boolean | Prisma.Member$workLogsArgs<ExtArgs>;
    activities?: boolean | Prisma.Member$activitiesArgs<ExtArgs>;
    evaluationsGiven?: boolean | Prisma.Member$evaluationsGivenArgs<ExtArgs>;
    evaluationsReceived?: boolean | Prisma.Member$evaluationsReceivedArgs<ExtArgs>;
    _count?: boolean | Prisma.MemberCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type MemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $MemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Member";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        tasks: Prisma.$TaskPayload<ExtArgs>[];
        workLogs: Prisma.$WorkLogPayload<ExtArgs>[];
        activities: Prisma.$ActivityPayload<ExtArgs>[];
        evaluationsGiven: Prisma.$PeerEvaluationPayload<ExtArgs>[];
        evaluationsReceived: Prisma.$PeerEvaluationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        role: string | null;
        email: string | null;
        projectId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["member"]>;
    composites: {};
};
export type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MemberPayload, S>;
export type MemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MemberCountAggregateInputType | true;
};
export interface MemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Member'];
        meta: {
            name: 'Member';
        };
    };
    findUnique<T extends MemberFindUniqueArgs>(args: Prisma.SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MemberFindFirstArgs>(args?: Prisma.SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MemberFindManyArgs>(args?: Prisma.SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MemberCreateArgs>(args: Prisma.SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MemberCreateManyArgs>(args?: Prisma.SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MemberDeleteArgs>(args: Prisma.SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MemberUpdateArgs>(args: Prisma.SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MemberUpdateManyArgs>(args: Prisma.SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MemberUpsertArgs>(args: Prisma.SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MemberCountArgs>(args?: Prisma.Subset<T, MemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MemberCountAggregateOutputType> : number>;
    aggregate<T extends MemberAggregateArgs>(args: Prisma.Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>;
    groupBy<T extends MemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MemberGroupByArgs['orderBy'];
    } : {
        orderBy?: MemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MemberFieldRefs;
}
export interface Prisma__MemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.Member$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Member$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    workLogs<T extends Prisma.Member$workLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Member$workLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activities<T extends Prisma.Member$activitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Member$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluationsGiven<T extends Prisma.Member$evaluationsGivenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Member$evaluationsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluationsReceived<T extends Prisma.Member$evaluationsReceivedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Member$evaluationsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MemberFieldRefs {
    readonly id: Prisma.FieldRef<"Member", 'String'>;
    readonly name: Prisma.FieldRef<"Member", 'String'>;
    readonly role: Prisma.FieldRef<"Member", 'String'>;
    readonly email: Prisma.FieldRef<"Member", 'String'>;
    readonly projectId: Prisma.FieldRef<"Member", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Member", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Member", 'DateTime'>;
}
export type MemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberCreateInput, Prisma.MemberUncheckedCreateInput>;
};
export type MemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MemberCreateManyInput | Prisma.MemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    data: Prisma.MemberCreateManyInput | Prisma.MemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberUpdateInput, Prisma.MemberUncheckedUpdateInput>;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyInput>;
    where?: Prisma.MemberWhereInput;
    limit?: number;
};
export type MemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyInput>;
    where?: Prisma.MemberWhereInput;
    limit?: number;
    include?: Prisma.MemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateInput, Prisma.MemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MemberUpdateInput, Prisma.MemberUncheckedUpdateInput>;
};
export type MemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    limit?: number;
};
export type Member$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Member$workLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Member$activitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Member$evaluationsGivenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
    where?: Prisma.PeerEvaluationWhereInput;
    orderBy?: Prisma.PeerEvaluationOrderByWithRelationInput | Prisma.PeerEvaluationOrderByWithRelationInput[];
    cursor?: Prisma.PeerEvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeerEvaluationScalarFieldEnum | Prisma.PeerEvaluationScalarFieldEnum[];
};
export type Member$evaluationsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
    where?: Prisma.PeerEvaluationWhereInput;
    orderBy?: Prisma.PeerEvaluationOrderByWithRelationInput | Prisma.PeerEvaluationOrderByWithRelationInput[];
    cursor?: Prisma.PeerEvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeerEvaluationScalarFieldEnum | Prisma.PeerEvaluationScalarFieldEnum[];
};
export type MemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
};
