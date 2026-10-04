import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WorkLogModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkLogPayload>;
export type AggregateWorkLog = {
    _count: WorkLogCountAggregateOutputType | null;
    _avg: WorkLogAvgAggregateOutputType | null;
    _sum: WorkLogSumAggregateOutputType | null;
    _min: WorkLogMinAggregateOutputType | null;
    _max: WorkLogMaxAggregateOutputType | null;
};
export type WorkLogAvgAggregateOutputType = {
    hours: number | null;
};
export type WorkLogSumAggregateOutputType = {
    hours: number | null;
};
export type WorkLogMinAggregateOutputType = {
    id: string | null;
    hours: number | null;
    description: string | null;
    workDate: Date | null;
    memberId: string | null;
    taskId: string | null;
    createdAt: Date | null;
};
export type WorkLogMaxAggregateOutputType = {
    id: string | null;
    hours: number | null;
    description: string | null;
    workDate: Date | null;
    memberId: string | null;
    taskId: string | null;
    createdAt: Date | null;
};
export type WorkLogCountAggregateOutputType = {
    id: number;
    hours: number;
    description: number;
    workDate: number;
    memberId: number;
    taskId: number;
    createdAt: number;
    _all: number;
};
export type WorkLogAvgAggregateInputType = {
    hours?: true;
};
export type WorkLogSumAggregateInputType = {
    hours?: true;
};
export type WorkLogMinAggregateInputType = {
    id?: true;
    hours?: true;
    description?: true;
    workDate?: true;
    memberId?: true;
    taskId?: true;
    createdAt?: true;
};
export type WorkLogMaxAggregateInputType = {
    id?: true;
    hours?: true;
    description?: true;
    workDate?: true;
    memberId?: true;
    taskId?: true;
    createdAt?: true;
};
export type WorkLogCountAggregateInputType = {
    id?: true;
    hours?: true;
    description?: true;
    workDate?: true;
    memberId?: true;
    taskId?: true;
    createdAt?: true;
    _all?: true;
};
export type WorkLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkLogWhereInput;
    orderBy?: Prisma.WorkLogOrderByWithRelationInput | Prisma.WorkLogOrderByWithRelationInput[];
    cursor?: Prisma.WorkLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WorkLogCountAggregateInputType;
    _avg?: WorkLogAvgAggregateInputType;
    _sum?: WorkLogSumAggregateInputType;
    _min?: WorkLogMinAggregateInputType;
    _max?: WorkLogMaxAggregateInputType;
};
export type GetWorkLogAggregateType<T extends WorkLogAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkLog[P]> : Prisma.GetScalarType<T[P], AggregateWorkLog[P]>;
};
export type WorkLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkLogWhereInput;
    orderBy?: Prisma.WorkLogOrderByWithAggregationInput | Prisma.WorkLogOrderByWithAggregationInput[];
    by: Prisma.WorkLogScalarFieldEnum[] | Prisma.WorkLogScalarFieldEnum;
    having?: Prisma.WorkLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkLogCountAggregateInputType | true;
    _avg?: WorkLogAvgAggregateInputType;
    _sum?: WorkLogSumAggregateInputType;
    _min?: WorkLogMinAggregateInputType;
    _max?: WorkLogMaxAggregateInputType;
};
export type WorkLogGroupByOutputType = {
    id: string;
    hours: number;
    description: string | null;
    workDate: Date;
    memberId: string;
    taskId: string;
    createdAt: Date;
    _count: WorkLogCountAggregateOutputType | null;
    _avg: WorkLogAvgAggregateOutputType | null;
    _sum: WorkLogSumAggregateOutputType | null;
    _min: WorkLogMinAggregateOutputType | null;
    _max: WorkLogMaxAggregateOutputType | null;
};
export type GetWorkLogGroupByPayload<T extends WorkLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkLogGroupByOutputType[P]>;
}>>;
export type WorkLogWhereInput = {
    AND?: Prisma.WorkLogWhereInput | Prisma.WorkLogWhereInput[];
    OR?: Prisma.WorkLogWhereInput[];
    NOT?: Prisma.WorkLogWhereInput | Prisma.WorkLogWhereInput[];
    id?: Prisma.StringFilter<"WorkLog"> | string;
    hours?: Prisma.FloatFilter<"WorkLog"> | number;
    description?: Prisma.StringNullableFilter<"WorkLog"> | string | null;
    workDate?: Prisma.DateTimeFilter<"WorkLog"> | Date | string;
    memberId?: Prisma.StringFilter<"WorkLog"> | string;
    taskId?: Prisma.StringFilter<"WorkLog"> | string;
    createdAt?: Prisma.DateTimeFilter<"WorkLog"> | Date | string;
    member?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
};
export type WorkLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    workDate?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    member?: Prisma.MemberOrderByWithRelationInput;
    task?: Prisma.TaskOrderByWithRelationInput;
};
export type WorkLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WorkLogWhereInput | Prisma.WorkLogWhereInput[];
    OR?: Prisma.WorkLogWhereInput[];
    NOT?: Prisma.WorkLogWhereInput | Prisma.WorkLogWhereInput[];
    hours?: Prisma.FloatFilter<"WorkLog"> | number;
    description?: Prisma.StringNullableFilter<"WorkLog"> | string | null;
    workDate?: Prisma.DateTimeFilter<"WorkLog"> | Date | string;
    memberId?: Prisma.StringFilter<"WorkLog"> | string;
    taskId?: Prisma.StringFilter<"WorkLog"> | string;
    createdAt?: Prisma.DateTimeFilter<"WorkLog"> | Date | string;
    member?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
}, "id">;
export type WorkLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    workDate?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WorkLogCountOrderByAggregateInput;
    _avg?: Prisma.WorkLogAvgOrderByAggregateInput;
    _max?: Prisma.WorkLogMaxOrderByAggregateInput;
    _min?: Prisma.WorkLogMinOrderByAggregateInput;
    _sum?: Prisma.WorkLogSumOrderByAggregateInput;
};
export type WorkLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkLogScalarWhereWithAggregatesInput | Prisma.WorkLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkLogScalarWhereWithAggregatesInput | Prisma.WorkLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WorkLog"> | string;
    hours?: Prisma.FloatWithAggregatesFilter<"WorkLog"> | number;
    description?: Prisma.StringNullableWithAggregatesFilter<"WorkLog"> | string | null;
    workDate?: Prisma.DateTimeWithAggregatesFilter<"WorkLog"> | Date | string;
    memberId?: Prisma.StringWithAggregatesFilter<"WorkLog"> | string;
    taskId?: Prisma.StringWithAggregatesFilter<"WorkLog"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WorkLog"> | Date | string;
};
export type WorkLogCreateInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    createdAt?: Date | string;
    member: Prisma.MemberCreateNestedOneWithoutWorkLogsInput;
    task: Prisma.TaskCreateNestedOneWithoutWorkLogsInput;
};
export type WorkLogUncheckedCreateInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    memberId: string;
    taskId: string;
    createdAt?: Date | string;
};
export type WorkLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    member?: Prisma.MemberUpdateOneRequiredWithoutWorkLogsNestedInput;
    task?: Prisma.TaskUpdateOneRequiredWithoutWorkLogsNestedInput;
};
export type WorkLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkLogCreateManyInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    memberId: string;
    taskId: string;
    createdAt?: Date | string;
};
export type WorkLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkLogListRelationFilter = {
    every?: Prisma.WorkLogWhereInput;
    some?: Prisma.WorkLogWhereInput;
    none?: Prisma.WorkLogWhereInput;
};
export type WorkLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WorkLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    workDate?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkLogAvgOrderByAggregateInput = {
    hours?: Prisma.SortOrder;
};
export type WorkLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    workDate?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    workDate?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkLogSumOrderByAggregateInput = {
    hours?: Prisma.SortOrder;
};
export type WorkLogCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.WorkLogCreateWithoutMemberInput, Prisma.WorkLogUncheckedCreateWithoutMemberInput> | Prisma.WorkLogCreateWithoutMemberInput[] | Prisma.WorkLogUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.WorkLogCreateOrConnectWithoutMemberInput | Prisma.WorkLogCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.WorkLogCreateManyMemberInputEnvelope;
    connect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
};
export type WorkLogUncheckedCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.WorkLogCreateWithoutMemberInput, Prisma.WorkLogUncheckedCreateWithoutMemberInput> | Prisma.WorkLogCreateWithoutMemberInput[] | Prisma.WorkLogUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.WorkLogCreateOrConnectWithoutMemberInput | Prisma.WorkLogCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.WorkLogCreateManyMemberInputEnvelope;
    connect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
};
export type WorkLogUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.WorkLogCreateWithoutMemberInput, Prisma.WorkLogUncheckedCreateWithoutMemberInput> | Prisma.WorkLogCreateWithoutMemberInput[] | Prisma.WorkLogUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.WorkLogCreateOrConnectWithoutMemberInput | Prisma.WorkLogCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.WorkLogUpsertWithWhereUniqueWithoutMemberInput | Prisma.WorkLogUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.WorkLogCreateManyMemberInputEnvelope;
    set?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    disconnect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    delete?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    connect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    update?: Prisma.WorkLogUpdateWithWhereUniqueWithoutMemberInput | Prisma.WorkLogUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.WorkLogUpdateManyWithWhereWithoutMemberInput | Prisma.WorkLogUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.WorkLogScalarWhereInput | Prisma.WorkLogScalarWhereInput[];
};
export type WorkLogUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.WorkLogCreateWithoutMemberInput, Prisma.WorkLogUncheckedCreateWithoutMemberInput> | Prisma.WorkLogCreateWithoutMemberInput[] | Prisma.WorkLogUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.WorkLogCreateOrConnectWithoutMemberInput | Prisma.WorkLogCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.WorkLogUpsertWithWhereUniqueWithoutMemberInput | Prisma.WorkLogUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.WorkLogCreateManyMemberInputEnvelope;
    set?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    disconnect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    delete?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    connect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    update?: Prisma.WorkLogUpdateWithWhereUniqueWithoutMemberInput | Prisma.WorkLogUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.WorkLogUpdateManyWithWhereWithoutMemberInput | Prisma.WorkLogUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.WorkLogScalarWhereInput | Prisma.WorkLogScalarWhereInput[];
};
export type WorkLogCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.WorkLogCreateWithoutTaskInput, Prisma.WorkLogUncheckedCreateWithoutTaskInput> | Prisma.WorkLogCreateWithoutTaskInput[] | Prisma.WorkLogUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.WorkLogCreateOrConnectWithoutTaskInput | Prisma.WorkLogCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.WorkLogCreateManyTaskInputEnvelope;
    connect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
};
export type WorkLogUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.WorkLogCreateWithoutTaskInput, Prisma.WorkLogUncheckedCreateWithoutTaskInput> | Prisma.WorkLogCreateWithoutTaskInput[] | Prisma.WorkLogUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.WorkLogCreateOrConnectWithoutTaskInput | Prisma.WorkLogCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.WorkLogCreateManyTaskInputEnvelope;
    connect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
};
export type WorkLogUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.WorkLogCreateWithoutTaskInput, Prisma.WorkLogUncheckedCreateWithoutTaskInput> | Prisma.WorkLogCreateWithoutTaskInput[] | Prisma.WorkLogUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.WorkLogCreateOrConnectWithoutTaskInput | Prisma.WorkLogCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.WorkLogUpsertWithWhereUniqueWithoutTaskInput | Prisma.WorkLogUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.WorkLogCreateManyTaskInputEnvelope;
    set?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    disconnect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    delete?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    connect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    update?: Prisma.WorkLogUpdateWithWhereUniqueWithoutTaskInput | Prisma.WorkLogUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.WorkLogUpdateManyWithWhereWithoutTaskInput | Prisma.WorkLogUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.WorkLogScalarWhereInput | Prisma.WorkLogScalarWhereInput[];
};
export type WorkLogUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.WorkLogCreateWithoutTaskInput, Prisma.WorkLogUncheckedCreateWithoutTaskInput> | Prisma.WorkLogCreateWithoutTaskInput[] | Prisma.WorkLogUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.WorkLogCreateOrConnectWithoutTaskInput | Prisma.WorkLogCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.WorkLogUpsertWithWhereUniqueWithoutTaskInput | Prisma.WorkLogUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.WorkLogCreateManyTaskInputEnvelope;
    set?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    disconnect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    delete?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    connect?: Prisma.WorkLogWhereUniqueInput | Prisma.WorkLogWhereUniqueInput[];
    update?: Prisma.WorkLogUpdateWithWhereUniqueWithoutTaskInput | Prisma.WorkLogUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.WorkLogUpdateManyWithWhereWithoutTaskInput | Prisma.WorkLogUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.WorkLogScalarWhereInput | Prisma.WorkLogScalarWhereInput[];
};
export type WorkLogCreateWithoutMemberInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    createdAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutWorkLogsInput;
};
export type WorkLogUncheckedCreateWithoutMemberInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    taskId: string;
    createdAt?: Date | string;
};
export type WorkLogCreateOrConnectWithoutMemberInput = {
    where: Prisma.WorkLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkLogCreateWithoutMemberInput, Prisma.WorkLogUncheckedCreateWithoutMemberInput>;
};
export type WorkLogCreateManyMemberInputEnvelope = {
    data: Prisma.WorkLogCreateManyMemberInput | Prisma.WorkLogCreateManyMemberInput[];
    skipDuplicates?: boolean;
};
export type WorkLogUpsertWithWhereUniqueWithoutMemberInput = {
    where: Prisma.WorkLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkLogUpdateWithoutMemberInput, Prisma.WorkLogUncheckedUpdateWithoutMemberInput>;
    create: Prisma.XOR<Prisma.WorkLogCreateWithoutMemberInput, Prisma.WorkLogUncheckedCreateWithoutMemberInput>;
};
export type WorkLogUpdateWithWhereUniqueWithoutMemberInput = {
    where: Prisma.WorkLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkLogUpdateWithoutMemberInput, Prisma.WorkLogUncheckedUpdateWithoutMemberInput>;
};
export type WorkLogUpdateManyWithWhereWithoutMemberInput = {
    where: Prisma.WorkLogScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkLogUpdateManyMutationInput, Prisma.WorkLogUncheckedUpdateManyWithoutMemberInput>;
};
export type WorkLogScalarWhereInput = {
    AND?: Prisma.WorkLogScalarWhereInput | Prisma.WorkLogScalarWhereInput[];
    OR?: Prisma.WorkLogScalarWhereInput[];
    NOT?: Prisma.WorkLogScalarWhereInput | Prisma.WorkLogScalarWhereInput[];
    id?: Prisma.StringFilter<"WorkLog"> | string;
    hours?: Prisma.FloatFilter<"WorkLog"> | number;
    description?: Prisma.StringNullableFilter<"WorkLog"> | string | null;
    workDate?: Prisma.DateTimeFilter<"WorkLog"> | Date | string;
    memberId?: Prisma.StringFilter<"WorkLog"> | string;
    taskId?: Prisma.StringFilter<"WorkLog"> | string;
    createdAt?: Prisma.DateTimeFilter<"WorkLog"> | Date | string;
};
export type WorkLogCreateWithoutTaskInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    createdAt?: Date | string;
    member: Prisma.MemberCreateNestedOneWithoutWorkLogsInput;
};
export type WorkLogUncheckedCreateWithoutTaskInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    memberId: string;
    createdAt?: Date | string;
};
export type WorkLogCreateOrConnectWithoutTaskInput = {
    where: Prisma.WorkLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkLogCreateWithoutTaskInput, Prisma.WorkLogUncheckedCreateWithoutTaskInput>;
};
export type WorkLogCreateManyTaskInputEnvelope = {
    data: Prisma.WorkLogCreateManyTaskInput | Prisma.WorkLogCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type WorkLogUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.WorkLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkLogUpdateWithoutTaskInput, Prisma.WorkLogUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.WorkLogCreateWithoutTaskInput, Prisma.WorkLogUncheckedCreateWithoutTaskInput>;
};
export type WorkLogUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.WorkLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkLogUpdateWithoutTaskInput, Prisma.WorkLogUncheckedUpdateWithoutTaskInput>;
};
export type WorkLogUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.WorkLogScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkLogUpdateManyMutationInput, Prisma.WorkLogUncheckedUpdateManyWithoutTaskInput>;
};
export type WorkLogCreateManyMemberInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    taskId: string;
    createdAt?: Date | string;
};
export type WorkLogUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutWorkLogsNestedInput;
};
export type WorkLogUncheckedUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkLogUncheckedUpdateManyWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkLogCreateManyTaskInput = {
    id?: string;
    hours: number;
    description?: string | null;
    workDate: Date | string;
    memberId: string;
    createdAt?: Date | string;
};
export type WorkLogUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    member?: Prisma.MemberUpdateOneRequiredWithoutWorkLogsNestedInput;
};
export type WorkLogUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkLogUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hours?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hours?: boolean;
    description?: boolean;
    workDate?: boolean;
    memberId?: boolean;
    taskId?: boolean;
    createdAt?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workLog"]>;
export type WorkLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hours?: boolean;
    description?: boolean;
    workDate?: boolean;
    memberId?: boolean;
    taskId?: boolean;
    createdAt?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workLog"]>;
export type WorkLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hours?: boolean;
    description?: boolean;
    workDate?: boolean;
    memberId?: boolean;
    taskId?: boolean;
    createdAt?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workLog"]>;
export type WorkLogSelectScalar = {
    id?: boolean;
    hours?: boolean;
    description?: boolean;
    workDate?: boolean;
    memberId?: boolean;
    taskId?: boolean;
    createdAt?: boolean;
};
export type WorkLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "hours" | "description" | "workDate" | "memberId" | "taskId" | "createdAt", ExtArgs["result"]["workLog"]>;
export type WorkLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type WorkLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type WorkLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type $WorkLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkLog";
    objects: {
        member: Prisma.$MemberPayload<ExtArgs>;
        task: Prisma.$TaskPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        hours: number;
        description: string | null;
        workDate: Date;
        memberId: string;
        taskId: string;
        createdAt: Date;
    }, ExtArgs["result"]["workLog"]>;
    composites: {};
};
export type WorkLogGetPayload<S extends boolean | null | undefined | WorkLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkLogPayload, S>;
export type WorkLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkLogCountAggregateInputType | true;
};
export interface WorkLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkLog'];
        meta: {
            name: 'WorkLog';
        };
    };
    findUnique<T extends WorkLogFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkLogClient<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WorkLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkLogClient<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WorkLogFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkLogClient<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WorkLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkLogClient<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WorkLogFindManyArgs>(args?: Prisma.SelectSubset<T, WorkLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WorkLogCreateArgs>(args: Prisma.SelectSubset<T, WorkLogCreateArgs<ExtArgs>>): Prisma.Prisma__WorkLogClient<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WorkLogCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WorkLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WorkLogDeleteArgs>(args: Prisma.SelectSubset<T, WorkLogDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkLogClient<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WorkLogUpdateArgs>(args: Prisma.SelectSubset<T, WorkLogUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkLogClient<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WorkLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WorkLogUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WorkLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WorkLogUpsertArgs>(args: Prisma.SelectSubset<T, WorkLogUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkLogClient<runtime.Types.Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WorkLogCountArgs>(args?: Prisma.Subset<T, WorkLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkLogCountAggregateOutputType> : number>;
    aggregate<T extends WorkLogAggregateArgs>(args: Prisma.Subset<T, WorkLogAggregateArgs>): Prisma.PrismaPromise<GetWorkLogAggregateType<T>>;
    groupBy<T extends WorkLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkLogGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WorkLogFieldRefs;
}
export interface Prisma__WorkLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    member<T extends Prisma.MemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemberDefaultArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WorkLogFieldRefs {
    readonly id: Prisma.FieldRef<"WorkLog", 'String'>;
    readonly hours: Prisma.FieldRef<"WorkLog", 'Float'>;
    readonly description: Prisma.FieldRef<"WorkLog", 'String'>;
    readonly workDate: Prisma.FieldRef<"WorkLog", 'DateTime'>;
    readonly memberId: Prisma.FieldRef<"WorkLog", 'String'>;
    readonly taskId: Prisma.FieldRef<"WorkLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WorkLog", 'DateTime'>;
}
export type WorkLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelect<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    include?: Prisma.WorkLogInclude<ExtArgs> | null;
    where: Prisma.WorkLogWhereUniqueInput;
};
export type WorkLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelect<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    include?: Prisma.WorkLogInclude<ExtArgs> | null;
    where: Prisma.WorkLogWhereUniqueInput;
};
export type WorkLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelect<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    include?: Prisma.WorkLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkLogCreateInput, Prisma.WorkLogUncheckedCreateInput>;
};
export type WorkLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WorkLogCreateManyInput | Prisma.WorkLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WorkLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    data: Prisma.WorkLogCreateManyInput | Prisma.WorkLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WorkLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WorkLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelect<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    include?: Prisma.WorkLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkLogUpdateInput, Prisma.WorkLogUncheckedUpdateInput>;
    where: Prisma.WorkLogWhereUniqueInput;
};
export type WorkLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WorkLogUpdateManyMutationInput, Prisma.WorkLogUncheckedUpdateManyInput>;
    where?: Prisma.WorkLogWhereInput;
    limit?: number;
};
export type WorkLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkLogUpdateManyMutationInput, Prisma.WorkLogUncheckedUpdateManyInput>;
    where?: Prisma.WorkLogWhereInput;
    limit?: number;
    include?: Prisma.WorkLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WorkLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelect<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    include?: Prisma.WorkLogInclude<ExtArgs> | null;
    where: Prisma.WorkLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkLogCreateInput, Prisma.WorkLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WorkLogUpdateInput, Prisma.WorkLogUncheckedUpdateInput>;
};
export type WorkLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelect<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    include?: Prisma.WorkLogInclude<ExtArgs> | null;
    where: Prisma.WorkLogWhereUniqueInput;
};
export type WorkLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkLogWhereInput;
    limit?: number;
};
export type WorkLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkLogSelect<ExtArgs> | null;
    omit?: Prisma.WorkLogOmit<ExtArgs> | null;
    include?: Prisma.WorkLogInclude<ExtArgs> | null;
};
