import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ActivityModel = runtime.Types.Result.DefaultSelection<Prisma.$ActivityPayload>;
export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null;
    _min: ActivityMinAggregateOutputType | null;
    _max: ActivityMaxAggregateOutputType | null;
};
export type ActivityMinAggregateOutputType = {
    id: string | null;
    action: string | null;
    timestamp: Date | null;
    projectId: string | null;
    memberId: string | null;
    taskId: string | null;
};
export type ActivityMaxAggregateOutputType = {
    id: string | null;
    action: string | null;
    timestamp: Date | null;
    projectId: string | null;
    memberId: string | null;
    taskId: string | null;
};
export type ActivityCountAggregateOutputType = {
    id: number;
    action: number;
    timestamp: number;
    projectId: number;
    memberId: number;
    taskId: number;
    _all: number;
};
export type ActivityMinAggregateInputType = {
    id?: true;
    action?: true;
    timestamp?: true;
    projectId?: true;
    memberId?: true;
    taskId?: true;
};
export type ActivityMaxAggregateInputType = {
    id?: true;
    action?: true;
    timestamp?: true;
    projectId?: true;
    memberId?: true;
    taskId?: true;
};
export type ActivityCountAggregateInputType = {
    id?: true;
    action?: true;
    timestamp?: true;
    projectId?: true;
    memberId?: true;
    taskId?: true;
    _all?: true;
};
export type ActivityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityWhereInput;
    orderBy?: Prisma.ActivityOrderByWithRelationInput | Prisma.ActivityOrderByWithRelationInput[];
    cursor?: Prisma.ActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActivityCountAggregateInputType;
    _min?: ActivityMinAggregateInputType;
    _max?: ActivityMaxAggregateInputType;
};
export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivity[P]> : Prisma.GetScalarType<T[P], AggregateActivity[P]>;
};
export type ActivityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityWhereInput;
    orderBy?: Prisma.ActivityOrderByWithAggregationInput | Prisma.ActivityOrderByWithAggregationInput[];
    by: Prisma.ActivityScalarFieldEnum[] | Prisma.ActivityScalarFieldEnum;
    having?: Prisma.ActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivityCountAggregateInputType | true;
    _min?: ActivityMinAggregateInputType;
    _max?: ActivityMaxAggregateInputType;
};
export type ActivityGroupByOutputType = {
    id: string;
    action: string;
    timestamp: Date;
    projectId: string;
    memberId: string;
    taskId: string | null;
    _count: ActivityCountAggregateOutputType | null;
    _min: ActivityMinAggregateOutputType | null;
    _max: ActivityMaxAggregateOutputType | null;
};
export type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivityGroupByOutputType[P]>;
}>>;
export type ActivityWhereInput = {
    AND?: Prisma.ActivityWhereInput | Prisma.ActivityWhereInput[];
    OR?: Prisma.ActivityWhereInput[];
    NOT?: Prisma.ActivityWhereInput | Prisma.ActivityWhereInput[];
    id?: Prisma.StringFilter<"Activity"> | string;
    action?: Prisma.StringFilter<"Activity"> | string;
    timestamp?: Prisma.DateTimeFilter<"Activity"> | Date | string;
    projectId?: Prisma.StringFilter<"Activity"> | string;
    memberId?: Prisma.StringFilter<"Activity"> | string;
    taskId?: Prisma.StringNullableFilter<"Activity"> | string | null;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    member?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    task?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
};
export type ActivityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrderInput | Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    member?: Prisma.MemberOrderByWithRelationInput;
    task?: Prisma.TaskOrderByWithRelationInput;
};
export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ActivityWhereInput | Prisma.ActivityWhereInput[];
    OR?: Prisma.ActivityWhereInput[];
    NOT?: Prisma.ActivityWhereInput | Prisma.ActivityWhereInput[];
    action?: Prisma.StringFilter<"Activity"> | string;
    timestamp?: Prisma.DateTimeFilter<"Activity"> | Date | string;
    projectId?: Prisma.StringFilter<"Activity"> | string;
    memberId?: Prisma.StringFilter<"Activity"> | string;
    taskId?: Prisma.StringNullableFilter<"Activity"> | string | null;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    member?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    task?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
}, "id">;
export type ActivityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ActivityCountOrderByAggregateInput;
    _max?: Prisma.ActivityMaxOrderByAggregateInput;
    _min?: Prisma.ActivityMinOrderByAggregateInput;
};
export type ActivityScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActivityScalarWhereWithAggregatesInput | Prisma.ActivityScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActivityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActivityScalarWhereWithAggregatesInput | Prisma.ActivityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Activity"> | string;
    action?: Prisma.StringWithAggregatesFilter<"Activity"> | string;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"Activity"> | Date | string;
    projectId?: Prisma.StringWithAggregatesFilter<"Activity"> | string;
    memberId?: Prisma.StringWithAggregatesFilter<"Activity"> | string;
    taskId?: Prisma.StringNullableWithAggregatesFilter<"Activity"> | string | null;
};
export type ActivityCreateInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutActivitiesInput;
    member: Prisma.MemberCreateNestedOneWithoutActivitiesInput;
    task?: Prisma.TaskCreateNestedOneWithoutActivitiesInput;
};
export type ActivityUncheckedCreateInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    projectId: string;
    memberId: string;
    taskId?: string | null;
};
export type ActivityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutActivitiesNestedInput;
    member?: Prisma.MemberUpdateOneRequiredWithoutActivitiesNestedInput;
    task?: Prisma.TaskUpdateOneWithoutActivitiesNestedInput;
};
export type ActivityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ActivityCreateManyInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    projectId: string;
    memberId: string;
    taskId?: string | null;
};
export type ActivityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ActivityListRelationFilter = {
    every?: Prisma.ActivityWhereInput;
    some?: Prisma.ActivityWhereInput;
    none?: Prisma.ActivityWhereInput;
};
export type ActivityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActivityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
};
export type ActivityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
};
export type ActivityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
};
export type ActivityCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutProjectInput, Prisma.ActivityUncheckedCreateWithoutProjectInput> | Prisma.ActivityCreateWithoutProjectInput[] | Prisma.ActivityUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutProjectInput | Prisma.ActivityCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ActivityCreateManyProjectInputEnvelope;
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
};
export type ActivityUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutProjectInput, Prisma.ActivityUncheckedCreateWithoutProjectInput> | Prisma.ActivityCreateWithoutProjectInput[] | Prisma.ActivityUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutProjectInput | Prisma.ActivityCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ActivityCreateManyProjectInputEnvelope;
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
};
export type ActivityUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutProjectInput, Prisma.ActivityUncheckedCreateWithoutProjectInput> | Prisma.ActivityCreateWithoutProjectInput[] | Prisma.ActivityUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutProjectInput | Prisma.ActivityCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ActivityUpsertWithWhereUniqueWithoutProjectInput | Prisma.ActivityUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ActivityCreateManyProjectInputEnvelope;
    set?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    disconnect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    delete?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    update?: Prisma.ActivityUpdateWithWhereUniqueWithoutProjectInput | Prisma.ActivityUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ActivityUpdateManyWithWhereWithoutProjectInput | Prisma.ActivityUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ActivityScalarWhereInput | Prisma.ActivityScalarWhereInput[];
};
export type ActivityUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutProjectInput, Prisma.ActivityUncheckedCreateWithoutProjectInput> | Prisma.ActivityCreateWithoutProjectInput[] | Prisma.ActivityUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutProjectInput | Prisma.ActivityCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ActivityUpsertWithWhereUniqueWithoutProjectInput | Prisma.ActivityUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ActivityCreateManyProjectInputEnvelope;
    set?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    disconnect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    delete?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    update?: Prisma.ActivityUpdateWithWhereUniqueWithoutProjectInput | Prisma.ActivityUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ActivityUpdateManyWithWhereWithoutProjectInput | Prisma.ActivityUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ActivityScalarWhereInput | Prisma.ActivityScalarWhereInput[];
};
export type ActivityCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutMemberInput, Prisma.ActivityUncheckedCreateWithoutMemberInput> | Prisma.ActivityCreateWithoutMemberInput[] | Prisma.ActivityUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutMemberInput | Prisma.ActivityCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.ActivityCreateManyMemberInputEnvelope;
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
};
export type ActivityUncheckedCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutMemberInput, Prisma.ActivityUncheckedCreateWithoutMemberInput> | Prisma.ActivityCreateWithoutMemberInput[] | Prisma.ActivityUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutMemberInput | Prisma.ActivityCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.ActivityCreateManyMemberInputEnvelope;
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
};
export type ActivityUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutMemberInput, Prisma.ActivityUncheckedCreateWithoutMemberInput> | Prisma.ActivityCreateWithoutMemberInput[] | Prisma.ActivityUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutMemberInput | Prisma.ActivityCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.ActivityUpsertWithWhereUniqueWithoutMemberInput | Prisma.ActivityUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.ActivityCreateManyMemberInputEnvelope;
    set?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    disconnect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    delete?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    update?: Prisma.ActivityUpdateWithWhereUniqueWithoutMemberInput | Prisma.ActivityUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.ActivityUpdateManyWithWhereWithoutMemberInput | Prisma.ActivityUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.ActivityScalarWhereInput | Prisma.ActivityScalarWhereInput[];
};
export type ActivityUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutMemberInput, Prisma.ActivityUncheckedCreateWithoutMemberInput> | Prisma.ActivityCreateWithoutMemberInput[] | Prisma.ActivityUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutMemberInput | Prisma.ActivityCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.ActivityUpsertWithWhereUniqueWithoutMemberInput | Prisma.ActivityUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.ActivityCreateManyMemberInputEnvelope;
    set?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    disconnect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    delete?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    update?: Prisma.ActivityUpdateWithWhereUniqueWithoutMemberInput | Prisma.ActivityUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.ActivityUpdateManyWithWhereWithoutMemberInput | Prisma.ActivityUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.ActivityScalarWhereInput | Prisma.ActivityScalarWhereInput[];
};
export type ActivityCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutTaskInput, Prisma.ActivityUncheckedCreateWithoutTaskInput> | Prisma.ActivityCreateWithoutTaskInput[] | Prisma.ActivityUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutTaskInput | Prisma.ActivityCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.ActivityCreateManyTaskInputEnvelope;
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
};
export type ActivityUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutTaskInput, Prisma.ActivityUncheckedCreateWithoutTaskInput> | Prisma.ActivityCreateWithoutTaskInput[] | Prisma.ActivityUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutTaskInput | Prisma.ActivityCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.ActivityCreateManyTaskInputEnvelope;
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
};
export type ActivityUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutTaskInput, Prisma.ActivityUncheckedCreateWithoutTaskInput> | Prisma.ActivityCreateWithoutTaskInput[] | Prisma.ActivityUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutTaskInput | Prisma.ActivityCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.ActivityUpsertWithWhereUniqueWithoutTaskInput | Prisma.ActivityUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.ActivityCreateManyTaskInputEnvelope;
    set?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    disconnect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    delete?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    update?: Prisma.ActivityUpdateWithWhereUniqueWithoutTaskInput | Prisma.ActivityUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.ActivityUpdateManyWithWhereWithoutTaskInput | Prisma.ActivityUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.ActivityScalarWhereInput | Prisma.ActivityScalarWhereInput[];
};
export type ActivityUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCreateWithoutTaskInput, Prisma.ActivityUncheckedCreateWithoutTaskInput> | Prisma.ActivityCreateWithoutTaskInput[] | Prisma.ActivityUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.ActivityCreateOrConnectWithoutTaskInput | Prisma.ActivityCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.ActivityUpsertWithWhereUniqueWithoutTaskInput | Prisma.ActivityUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.ActivityCreateManyTaskInputEnvelope;
    set?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    disconnect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    delete?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    connect?: Prisma.ActivityWhereUniqueInput | Prisma.ActivityWhereUniqueInput[];
    update?: Prisma.ActivityUpdateWithWhereUniqueWithoutTaskInput | Prisma.ActivityUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.ActivityUpdateManyWithWhereWithoutTaskInput | Prisma.ActivityUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.ActivityScalarWhereInput | Prisma.ActivityScalarWhereInput[];
};
export type ActivityCreateWithoutProjectInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    member: Prisma.MemberCreateNestedOneWithoutActivitiesInput;
    task?: Prisma.TaskCreateNestedOneWithoutActivitiesInput;
};
export type ActivityUncheckedCreateWithoutProjectInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    memberId: string;
    taskId?: string | null;
};
export type ActivityCreateOrConnectWithoutProjectInput = {
    where: Prisma.ActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityCreateWithoutProjectInput, Prisma.ActivityUncheckedCreateWithoutProjectInput>;
};
export type ActivityCreateManyProjectInputEnvelope = {
    data: Prisma.ActivityCreateManyProjectInput | Prisma.ActivityCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ActivityUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityUpdateWithoutProjectInput, Prisma.ActivityUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ActivityCreateWithoutProjectInput, Prisma.ActivityUncheckedCreateWithoutProjectInput>;
};
export type ActivityUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityUpdateWithoutProjectInput, Prisma.ActivityUncheckedUpdateWithoutProjectInput>;
};
export type ActivityUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityUpdateManyMutationInput, Prisma.ActivityUncheckedUpdateManyWithoutProjectInput>;
};
export type ActivityScalarWhereInput = {
    AND?: Prisma.ActivityScalarWhereInput | Prisma.ActivityScalarWhereInput[];
    OR?: Prisma.ActivityScalarWhereInput[];
    NOT?: Prisma.ActivityScalarWhereInput | Prisma.ActivityScalarWhereInput[];
    id?: Prisma.StringFilter<"Activity"> | string;
    action?: Prisma.StringFilter<"Activity"> | string;
    timestamp?: Prisma.DateTimeFilter<"Activity"> | Date | string;
    projectId?: Prisma.StringFilter<"Activity"> | string;
    memberId?: Prisma.StringFilter<"Activity"> | string;
    taskId?: Prisma.StringNullableFilter<"Activity"> | string | null;
};
export type ActivityCreateWithoutMemberInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutActivitiesInput;
    task?: Prisma.TaskCreateNestedOneWithoutActivitiesInput;
};
export type ActivityUncheckedCreateWithoutMemberInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    projectId: string;
    taskId?: string | null;
};
export type ActivityCreateOrConnectWithoutMemberInput = {
    where: Prisma.ActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityCreateWithoutMemberInput, Prisma.ActivityUncheckedCreateWithoutMemberInput>;
};
export type ActivityCreateManyMemberInputEnvelope = {
    data: Prisma.ActivityCreateManyMemberInput | Prisma.ActivityCreateManyMemberInput[];
    skipDuplicates?: boolean;
};
export type ActivityUpsertWithWhereUniqueWithoutMemberInput = {
    where: Prisma.ActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityUpdateWithoutMemberInput, Prisma.ActivityUncheckedUpdateWithoutMemberInput>;
    create: Prisma.XOR<Prisma.ActivityCreateWithoutMemberInput, Prisma.ActivityUncheckedCreateWithoutMemberInput>;
};
export type ActivityUpdateWithWhereUniqueWithoutMemberInput = {
    where: Prisma.ActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityUpdateWithoutMemberInput, Prisma.ActivityUncheckedUpdateWithoutMemberInput>;
};
export type ActivityUpdateManyWithWhereWithoutMemberInput = {
    where: Prisma.ActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityUpdateManyMutationInput, Prisma.ActivityUncheckedUpdateManyWithoutMemberInput>;
};
export type ActivityCreateWithoutTaskInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutActivitiesInput;
    member: Prisma.MemberCreateNestedOneWithoutActivitiesInput;
};
export type ActivityUncheckedCreateWithoutTaskInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    projectId: string;
    memberId: string;
};
export type ActivityCreateOrConnectWithoutTaskInput = {
    where: Prisma.ActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityCreateWithoutTaskInput, Prisma.ActivityUncheckedCreateWithoutTaskInput>;
};
export type ActivityCreateManyTaskInputEnvelope = {
    data: Prisma.ActivityCreateManyTaskInput | Prisma.ActivityCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type ActivityUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.ActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityUpdateWithoutTaskInput, Prisma.ActivityUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.ActivityCreateWithoutTaskInput, Prisma.ActivityUncheckedCreateWithoutTaskInput>;
};
export type ActivityUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.ActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityUpdateWithoutTaskInput, Prisma.ActivityUncheckedUpdateWithoutTaskInput>;
};
export type ActivityUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.ActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityUpdateManyMutationInput, Prisma.ActivityUncheckedUpdateManyWithoutTaskInput>;
};
export type ActivityCreateManyProjectInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    memberId: string;
    taskId?: string | null;
};
export type ActivityUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    member?: Prisma.MemberUpdateOneRequiredWithoutActivitiesNestedInput;
    task?: Prisma.TaskUpdateOneWithoutActivitiesNestedInput;
};
export type ActivityUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ActivityUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ActivityCreateManyMemberInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    projectId: string;
    taskId?: string | null;
};
export type ActivityUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutActivitiesNestedInput;
    task?: Prisma.TaskUpdateOneWithoutActivitiesNestedInput;
};
export type ActivityUncheckedUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ActivityUncheckedUpdateManyWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ActivityCreateManyTaskInput = {
    id?: string;
    action: string;
    timestamp?: Date | string;
    projectId: string;
    memberId: string;
};
export type ActivityUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutActivitiesNestedInput;
    member?: Prisma.MemberUpdateOneRequiredWithoutActivitiesNestedInput;
};
export type ActivityUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ActivityUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ActivitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    action?: boolean;
    timestamp?: boolean;
    projectId?: boolean;
    memberId?: boolean;
    taskId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.Activity$taskArgs<ExtArgs>;
}, ExtArgs["result"]["activity"]>;
export type ActivitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    action?: boolean;
    timestamp?: boolean;
    projectId?: boolean;
    memberId?: boolean;
    taskId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.Activity$taskArgs<ExtArgs>;
}, ExtArgs["result"]["activity"]>;
export type ActivitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    action?: boolean;
    timestamp?: boolean;
    projectId?: boolean;
    memberId?: boolean;
    taskId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.Activity$taskArgs<ExtArgs>;
}, ExtArgs["result"]["activity"]>;
export type ActivitySelectScalar = {
    id?: boolean;
    action?: boolean;
    timestamp?: boolean;
    projectId?: boolean;
    memberId?: boolean;
    taskId?: boolean;
};
export type ActivityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "action" | "timestamp" | "projectId" | "memberId" | "taskId", ExtArgs["result"]["activity"]>;
export type ActivityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.Activity$taskArgs<ExtArgs>;
};
export type ActivityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.Activity$taskArgs<ExtArgs>;
};
export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.Activity$taskArgs<ExtArgs>;
};
export type $ActivityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Activity";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        member: Prisma.$MemberPayload<ExtArgs>;
        task: Prisma.$TaskPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        action: string;
        timestamp: Date;
        projectId: string;
        memberId: string;
        taskId: string | null;
    }, ExtArgs["result"]["activity"]>;
    composites: {};
};
export type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActivityPayload, S>;
export type ActivityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivityCountAggregateInputType | true;
};
export interface ActivityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Activity'];
        meta: {
            name: 'Activity';
        };
    };
    findUnique<T extends ActivityFindUniqueArgs>(args: Prisma.SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActivityClient<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityClient<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ActivityFindFirstArgs>(args?: Prisma.SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActivityClient<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityClient<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ActivityFindManyArgs>(args?: Prisma.SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ActivityCreateArgs>(args: Prisma.SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma.Prisma__ActivityClient<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ActivityCreateManyArgs>(args?: Prisma.SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ActivityDeleteArgs>(args: Prisma.SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma.Prisma__ActivityClient<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ActivityUpdateArgs>(args: Prisma.SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma.Prisma__ActivityClient<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ActivityDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ActivityUpdateManyArgs>(args: Prisma.SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ActivityUpsertArgs>(args: Prisma.SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma.Prisma__ActivityClient<runtime.Types.Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ActivityCountArgs>(args?: Prisma.Subset<T, ActivityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivityCountAggregateOutputType> : number>;
    aggregate<T extends ActivityAggregateArgs>(args: Prisma.Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>;
    groupBy<T extends ActivityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActivityGroupByArgs['orderBy'];
    } : {
        orderBy?: ActivityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ActivityFieldRefs;
}
export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    member<T extends Prisma.MemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemberDefaultArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    task<T extends Prisma.Activity$taskArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Activity$taskArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ActivityFieldRefs {
    readonly id: Prisma.FieldRef<"Activity", 'String'>;
    readonly action: Prisma.FieldRef<"Activity", 'String'>;
    readonly timestamp: Prisma.FieldRef<"Activity", 'DateTime'>;
    readonly projectId: Prisma.FieldRef<"Activity", 'String'>;
    readonly memberId: Prisma.FieldRef<"Activity", 'String'>;
    readonly taskId: Prisma.FieldRef<"Activity", 'String'>;
}
export type ActivityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelect<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    include?: Prisma.ActivityInclude<ExtArgs> | null;
    where: Prisma.ActivityWhereUniqueInput;
};
export type ActivityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelect<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    include?: Prisma.ActivityInclude<ExtArgs> | null;
    where: Prisma.ActivityWhereUniqueInput;
};
export type ActivityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ActivityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ActivityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ActivityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelect<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    include?: Prisma.ActivityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityCreateInput, Prisma.ActivityUncheckedCreateInput>;
};
export type ActivityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ActivityCreateManyInput | Prisma.ActivityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ActivityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    data: Prisma.ActivityCreateManyInput | Prisma.ActivityCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ActivityIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ActivityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelect<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    include?: Prisma.ActivityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityUpdateInput, Prisma.ActivityUncheckedUpdateInput>;
    where: Prisma.ActivityWhereUniqueInput;
};
export type ActivityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ActivityUpdateManyMutationInput, Prisma.ActivityUncheckedUpdateManyInput>;
    where?: Prisma.ActivityWhereInput;
    limit?: number;
};
export type ActivityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityUpdateManyMutationInput, Prisma.ActivityUncheckedUpdateManyInput>;
    where?: Prisma.ActivityWhereInput;
    limit?: number;
    include?: Prisma.ActivityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ActivityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelect<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    include?: Prisma.ActivityInclude<ExtArgs> | null;
    where: Prisma.ActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityCreateInput, Prisma.ActivityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ActivityUpdateInput, Prisma.ActivityUncheckedUpdateInput>;
};
export type ActivityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelect<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    include?: Prisma.ActivityInclude<ExtArgs> | null;
    where: Prisma.ActivityWhereUniqueInput;
};
export type ActivityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityWhereInput;
    limit?: number;
};
export type Activity$taskArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
};
export type ActivityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivitySelect<ExtArgs> | null;
    omit?: Prisma.ActivityOmit<ExtArgs> | null;
    include?: Prisma.ActivityInclude<ExtArgs> | null;
};
