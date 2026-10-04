import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PeerEvaluationModel = runtime.Types.Result.DefaultSelection<Prisma.$PeerEvaluationPayload>;
export type AggregatePeerEvaluation = {
    _count: PeerEvaluationCountAggregateOutputType | null;
    _avg: PeerEvaluationAvgAggregateOutputType | null;
    _sum: PeerEvaluationSumAggregateOutputType | null;
    _min: PeerEvaluationMinAggregateOutputType | null;
    _max: PeerEvaluationMaxAggregateOutputType | null;
};
export type PeerEvaluationAvgAggregateOutputType = {
    responsibility: number | null;
    communication: number | null;
    teamwork: number | null;
    quality: number | null;
};
export type PeerEvaluationSumAggregateOutputType = {
    responsibility: number | null;
    communication: number | null;
    teamwork: number | null;
    quality: number | null;
};
export type PeerEvaluationMinAggregateOutputType = {
    id: string | null;
    evaluatorId: string | null;
    targetMemberId: string | null;
    responsibility: number | null;
    communication: number | null;
    teamwork: number | null;
    quality: number | null;
    createdAt: Date | null;
};
export type PeerEvaluationMaxAggregateOutputType = {
    id: string | null;
    evaluatorId: string | null;
    targetMemberId: string | null;
    responsibility: number | null;
    communication: number | null;
    teamwork: number | null;
    quality: number | null;
    createdAt: Date | null;
};
export type PeerEvaluationCountAggregateOutputType = {
    id: number;
    evaluatorId: number;
    targetMemberId: number;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt: number;
    _all: number;
};
export type PeerEvaluationAvgAggregateInputType = {
    responsibility?: true;
    communication?: true;
    teamwork?: true;
    quality?: true;
};
export type PeerEvaluationSumAggregateInputType = {
    responsibility?: true;
    communication?: true;
    teamwork?: true;
    quality?: true;
};
export type PeerEvaluationMinAggregateInputType = {
    id?: true;
    evaluatorId?: true;
    targetMemberId?: true;
    responsibility?: true;
    communication?: true;
    teamwork?: true;
    quality?: true;
    createdAt?: true;
};
export type PeerEvaluationMaxAggregateInputType = {
    id?: true;
    evaluatorId?: true;
    targetMemberId?: true;
    responsibility?: true;
    communication?: true;
    teamwork?: true;
    quality?: true;
    createdAt?: true;
};
export type PeerEvaluationCountAggregateInputType = {
    id?: true;
    evaluatorId?: true;
    targetMemberId?: true;
    responsibility?: true;
    communication?: true;
    teamwork?: true;
    quality?: true;
    createdAt?: true;
    _all?: true;
};
export type PeerEvaluationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeerEvaluationWhereInput;
    orderBy?: Prisma.PeerEvaluationOrderByWithRelationInput | Prisma.PeerEvaluationOrderByWithRelationInput[];
    cursor?: Prisma.PeerEvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PeerEvaluationCountAggregateInputType;
    _avg?: PeerEvaluationAvgAggregateInputType;
    _sum?: PeerEvaluationSumAggregateInputType;
    _min?: PeerEvaluationMinAggregateInputType;
    _max?: PeerEvaluationMaxAggregateInputType;
};
export type GetPeerEvaluationAggregateType<T extends PeerEvaluationAggregateArgs> = {
    [P in keyof T & keyof AggregatePeerEvaluation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePeerEvaluation[P]> : Prisma.GetScalarType<T[P], AggregatePeerEvaluation[P]>;
};
export type PeerEvaluationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeerEvaluationWhereInput;
    orderBy?: Prisma.PeerEvaluationOrderByWithAggregationInput | Prisma.PeerEvaluationOrderByWithAggregationInput[];
    by: Prisma.PeerEvaluationScalarFieldEnum[] | Prisma.PeerEvaluationScalarFieldEnum;
    having?: Prisma.PeerEvaluationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PeerEvaluationCountAggregateInputType | true;
    _avg?: PeerEvaluationAvgAggregateInputType;
    _sum?: PeerEvaluationSumAggregateInputType;
    _min?: PeerEvaluationMinAggregateInputType;
    _max?: PeerEvaluationMaxAggregateInputType;
};
export type PeerEvaluationGroupByOutputType = {
    id: string;
    evaluatorId: string;
    targetMemberId: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt: Date;
    _count: PeerEvaluationCountAggregateOutputType | null;
    _avg: PeerEvaluationAvgAggregateOutputType | null;
    _sum: PeerEvaluationSumAggregateOutputType | null;
    _min: PeerEvaluationMinAggregateOutputType | null;
    _max: PeerEvaluationMaxAggregateOutputType | null;
};
export type GetPeerEvaluationGroupByPayload<T extends PeerEvaluationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PeerEvaluationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PeerEvaluationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PeerEvaluationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PeerEvaluationGroupByOutputType[P]>;
}>>;
export type PeerEvaluationWhereInput = {
    AND?: Prisma.PeerEvaluationWhereInput | Prisma.PeerEvaluationWhereInput[];
    OR?: Prisma.PeerEvaluationWhereInput[];
    NOT?: Prisma.PeerEvaluationWhereInput | Prisma.PeerEvaluationWhereInput[];
    id?: Prisma.StringFilter<"PeerEvaluation"> | string;
    evaluatorId?: Prisma.StringFilter<"PeerEvaluation"> | string;
    targetMemberId?: Prisma.StringFilter<"PeerEvaluation"> | string;
    responsibility?: Prisma.IntFilter<"PeerEvaluation"> | number;
    communication?: Prisma.IntFilter<"PeerEvaluation"> | number;
    teamwork?: Prisma.IntFilter<"PeerEvaluation"> | number;
    quality?: Prisma.IntFilter<"PeerEvaluation"> | number;
    createdAt?: Prisma.DateTimeFilter<"PeerEvaluation"> | Date | string;
    evaluator?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    targetMember?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
};
export type PeerEvaluationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    evaluatorId?: Prisma.SortOrder;
    targetMemberId?: Prisma.SortOrder;
    responsibility?: Prisma.SortOrder;
    communication?: Prisma.SortOrder;
    teamwork?: Prisma.SortOrder;
    quality?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    evaluator?: Prisma.MemberOrderByWithRelationInput;
    targetMember?: Prisma.MemberOrderByWithRelationInput;
};
export type PeerEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PeerEvaluationWhereInput | Prisma.PeerEvaluationWhereInput[];
    OR?: Prisma.PeerEvaluationWhereInput[];
    NOT?: Prisma.PeerEvaluationWhereInput | Prisma.PeerEvaluationWhereInput[];
    evaluatorId?: Prisma.StringFilter<"PeerEvaluation"> | string;
    targetMemberId?: Prisma.StringFilter<"PeerEvaluation"> | string;
    responsibility?: Prisma.IntFilter<"PeerEvaluation"> | number;
    communication?: Prisma.IntFilter<"PeerEvaluation"> | number;
    teamwork?: Prisma.IntFilter<"PeerEvaluation"> | number;
    quality?: Prisma.IntFilter<"PeerEvaluation"> | number;
    createdAt?: Prisma.DateTimeFilter<"PeerEvaluation"> | Date | string;
    evaluator?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    targetMember?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
}, "id">;
export type PeerEvaluationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    evaluatorId?: Prisma.SortOrder;
    targetMemberId?: Prisma.SortOrder;
    responsibility?: Prisma.SortOrder;
    communication?: Prisma.SortOrder;
    teamwork?: Prisma.SortOrder;
    quality?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PeerEvaluationCountOrderByAggregateInput;
    _avg?: Prisma.PeerEvaluationAvgOrderByAggregateInput;
    _max?: Prisma.PeerEvaluationMaxOrderByAggregateInput;
    _min?: Prisma.PeerEvaluationMinOrderByAggregateInput;
    _sum?: Prisma.PeerEvaluationSumOrderByAggregateInput;
};
export type PeerEvaluationScalarWhereWithAggregatesInput = {
    AND?: Prisma.PeerEvaluationScalarWhereWithAggregatesInput | Prisma.PeerEvaluationScalarWhereWithAggregatesInput[];
    OR?: Prisma.PeerEvaluationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PeerEvaluationScalarWhereWithAggregatesInput | Prisma.PeerEvaluationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PeerEvaluation"> | string;
    evaluatorId?: Prisma.StringWithAggregatesFilter<"PeerEvaluation"> | string;
    targetMemberId?: Prisma.StringWithAggregatesFilter<"PeerEvaluation"> | string;
    responsibility?: Prisma.IntWithAggregatesFilter<"PeerEvaluation"> | number;
    communication?: Prisma.IntWithAggregatesFilter<"PeerEvaluation"> | number;
    teamwork?: Prisma.IntWithAggregatesFilter<"PeerEvaluation"> | number;
    quality?: Prisma.IntWithAggregatesFilter<"PeerEvaluation"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PeerEvaluation"> | Date | string;
};
export type PeerEvaluationCreateInput = {
    id?: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
    evaluator: Prisma.MemberCreateNestedOneWithoutEvaluationsGivenInput;
    targetMember: Prisma.MemberCreateNestedOneWithoutEvaluationsReceivedInput;
};
export type PeerEvaluationUncheckedCreateInput = {
    id?: string;
    evaluatorId: string;
    targetMemberId: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
};
export type PeerEvaluationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluator?: Prisma.MemberUpdateOneRequiredWithoutEvaluationsGivenNestedInput;
    targetMember?: Prisma.MemberUpdateOneRequiredWithoutEvaluationsReceivedNestedInput;
};
export type PeerEvaluationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetMemberId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeerEvaluationCreateManyInput = {
    id?: string;
    evaluatorId: string;
    targetMemberId: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
};
export type PeerEvaluationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeerEvaluationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetMemberId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeerEvaluationListRelationFilter = {
    every?: Prisma.PeerEvaluationWhereInput;
    some?: Prisma.PeerEvaluationWhereInput;
    none?: Prisma.PeerEvaluationWhereInput;
};
export type PeerEvaluationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PeerEvaluationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evaluatorId?: Prisma.SortOrder;
    targetMemberId?: Prisma.SortOrder;
    responsibility?: Prisma.SortOrder;
    communication?: Prisma.SortOrder;
    teamwork?: Prisma.SortOrder;
    quality?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PeerEvaluationAvgOrderByAggregateInput = {
    responsibility?: Prisma.SortOrder;
    communication?: Prisma.SortOrder;
    teamwork?: Prisma.SortOrder;
    quality?: Prisma.SortOrder;
};
export type PeerEvaluationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evaluatorId?: Prisma.SortOrder;
    targetMemberId?: Prisma.SortOrder;
    responsibility?: Prisma.SortOrder;
    communication?: Prisma.SortOrder;
    teamwork?: Prisma.SortOrder;
    quality?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PeerEvaluationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evaluatorId?: Prisma.SortOrder;
    targetMemberId?: Prisma.SortOrder;
    responsibility?: Prisma.SortOrder;
    communication?: Prisma.SortOrder;
    teamwork?: Prisma.SortOrder;
    quality?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PeerEvaluationSumOrderByAggregateInput = {
    responsibility?: Prisma.SortOrder;
    communication?: Prisma.SortOrder;
    teamwork?: Prisma.SortOrder;
    quality?: Prisma.SortOrder;
};
export type PeerEvaluationCreateNestedManyWithoutEvaluatorInput = {
    create?: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutEvaluatorInput, Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput> | Prisma.PeerEvaluationCreateWithoutEvaluatorInput[] | Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput[];
    connectOrCreate?: Prisma.PeerEvaluationCreateOrConnectWithoutEvaluatorInput | Prisma.PeerEvaluationCreateOrConnectWithoutEvaluatorInput[];
    createMany?: Prisma.PeerEvaluationCreateManyEvaluatorInputEnvelope;
    connect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
};
export type PeerEvaluationCreateNestedManyWithoutTargetMemberInput = {
    create?: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutTargetMemberInput, Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput> | Prisma.PeerEvaluationCreateWithoutTargetMemberInput[] | Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput[];
    connectOrCreate?: Prisma.PeerEvaluationCreateOrConnectWithoutTargetMemberInput | Prisma.PeerEvaluationCreateOrConnectWithoutTargetMemberInput[];
    createMany?: Prisma.PeerEvaluationCreateManyTargetMemberInputEnvelope;
    connect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
};
export type PeerEvaluationUncheckedCreateNestedManyWithoutEvaluatorInput = {
    create?: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutEvaluatorInput, Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput> | Prisma.PeerEvaluationCreateWithoutEvaluatorInput[] | Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput[];
    connectOrCreate?: Prisma.PeerEvaluationCreateOrConnectWithoutEvaluatorInput | Prisma.PeerEvaluationCreateOrConnectWithoutEvaluatorInput[];
    createMany?: Prisma.PeerEvaluationCreateManyEvaluatorInputEnvelope;
    connect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
};
export type PeerEvaluationUncheckedCreateNestedManyWithoutTargetMemberInput = {
    create?: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutTargetMemberInput, Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput> | Prisma.PeerEvaluationCreateWithoutTargetMemberInput[] | Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput[];
    connectOrCreate?: Prisma.PeerEvaluationCreateOrConnectWithoutTargetMemberInput | Prisma.PeerEvaluationCreateOrConnectWithoutTargetMemberInput[];
    createMany?: Prisma.PeerEvaluationCreateManyTargetMemberInputEnvelope;
    connect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
};
export type PeerEvaluationUpdateManyWithoutEvaluatorNestedInput = {
    create?: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutEvaluatorInput, Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput> | Prisma.PeerEvaluationCreateWithoutEvaluatorInput[] | Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput[];
    connectOrCreate?: Prisma.PeerEvaluationCreateOrConnectWithoutEvaluatorInput | Prisma.PeerEvaluationCreateOrConnectWithoutEvaluatorInput[];
    upsert?: Prisma.PeerEvaluationUpsertWithWhereUniqueWithoutEvaluatorInput | Prisma.PeerEvaluationUpsertWithWhereUniqueWithoutEvaluatorInput[];
    createMany?: Prisma.PeerEvaluationCreateManyEvaluatorInputEnvelope;
    set?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    disconnect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    delete?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    connect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    update?: Prisma.PeerEvaluationUpdateWithWhereUniqueWithoutEvaluatorInput | Prisma.PeerEvaluationUpdateWithWhereUniqueWithoutEvaluatorInput[];
    updateMany?: Prisma.PeerEvaluationUpdateManyWithWhereWithoutEvaluatorInput | Prisma.PeerEvaluationUpdateManyWithWhereWithoutEvaluatorInput[];
    deleteMany?: Prisma.PeerEvaluationScalarWhereInput | Prisma.PeerEvaluationScalarWhereInput[];
};
export type PeerEvaluationUpdateManyWithoutTargetMemberNestedInput = {
    create?: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutTargetMemberInput, Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput> | Prisma.PeerEvaluationCreateWithoutTargetMemberInput[] | Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput[];
    connectOrCreate?: Prisma.PeerEvaluationCreateOrConnectWithoutTargetMemberInput | Prisma.PeerEvaluationCreateOrConnectWithoutTargetMemberInput[];
    upsert?: Prisma.PeerEvaluationUpsertWithWhereUniqueWithoutTargetMemberInput | Prisma.PeerEvaluationUpsertWithWhereUniqueWithoutTargetMemberInput[];
    createMany?: Prisma.PeerEvaluationCreateManyTargetMemberInputEnvelope;
    set?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    disconnect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    delete?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    connect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    update?: Prisma.PeerEvaluationUpdateWithWhereUniqueWithoutTargetMemberInput | Prisma.PeerEvaluationUpdateWithWhereUniqueWithoutTargetMemberInput[];
    updateMany?: Prisma.PeerEvaluationUpdateManyWithWhereWithoutTargetMemberInput | Prisma.PeerEvaluationUpdateManyWithWhereWithoutTargetMemberInput[];
    deleteMany?: Prisma.PeerEvaluationScalarWhereInput | Prisma.PeerEvaluationScalarWhereInput[];
};
export type PeerEvaluationUncheckedUpdateManyWithoutEvaluatorNestedInput = {
    create?: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutEvaluatorInput, Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput> | Prisma.PeerEvaluationCreateWithoutEvaluatorInput[] | Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput[];
    connectOrCreate?: Prisma.PeerEvaluationCreateOrConnectWithoutEvaluatorInput | Prisma.PeerEvaluationCreateOrConnectWithoutEvaluatorInput[];
    upsert?: Prisma.PeerEvaluationUpsertWithWhereUniqueWithoutEvaluatorInput | Prisma.PeerEvaluationUpsertWithWhereUniqueWithoutEvaluatorInput[];
    createMany?: Prisma.PeerEvaluationCreateManyEvaluatorInputEnvelope;
    set?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    disconnect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    delete?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    connect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    update?: Prisma.PeerEvaluationUpdateWithWhereUniqueWithoutEvaluatorInput | Prisma.PeerEvaluationUpdateWithWhereUniqueWithoutEvaluatorInput[];
    updateMany?: Prisma.PeerEvaluationUpdateManyWithWhereWithoutEvaluatorInput | Prisma.PeerEvaluationUpdateManyWithWhereWithoutEvaluatorInput[];
    deleteMany?: Prisma.PeerEvaluationScalarWhereInput | Prisma.PeerEvaluationScalarWhereInput[];
};
export type PeerEvaluationUncheckedUpdateManyWithoutTargetMemberNestedInput = {
    create?: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutTargetMemberInput, Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput> | Prisma.PeerEvaluationCreateWithoutTargetMemberInput[] | Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput[];
    connectOrCreate?: Prisma.PeerEvaluationCreateOrConnectWithoutTargetMemberInput | Prisma.PeerEvaluationCreateOrConnectWithoutTargetMemberInput[];
    upsert?: Prisma.PeerEvaluationUpsertWithWhereUniqueWithoutTargetMemberInput | Prisma.PeerEvaluationUpsertWithWhereUniqueWithoutTargetMemberInput[];
    createMany?: Prisma.PeerEvaluationCreateManyTargetMemberInputEnvelope;
    set?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    disconnect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    delete?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    connect?: Prisma.PeerEvaluationWhereUniqueInput | Prisma.PeerEvaluationWhereUniqueInput[];
    update?: Prisma.PeerEvaluationUpdateWithWhereUniqueWithoutTargetMemberInput | Prisma.PeerEvaluationUpdateWithWhereUniqueWithoutTargetMemberInput[];
    updateMany?: Prisma.PeerEvaluationUpdateManyWithWhereWithoutTargetMemberInput | Prisma.PeerEvaluationUpdateManyWithWhereWithoutTargetMemberInput[];
    deleteMany?: Prisma.PeerEvaluationScalarWhereInput | Prisma.PeerEvaluationScalarWhereInput[];
};
export type PeerEvaluationCreateWithoutEvaluatorInput = {
    id?: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
    targetMember: Prisma.MemberCreateNestedOneWithoutEvaluationsReceivedInput;
};
export type PeerEvaluationUncheckedCreateWithoutEvaluatorInput = {
    id?: string;
    targetMemberId: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
};
export type PeerEvaluationCreateOrConnectWithoutEvaluatorInput = {
    where: Prisma.PeerEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutEvaluatorInput, Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput>;
};
export type PeerEvaluationCreateManyEvaluatorInputEnvelope = {
    data: Prisma.PeerEvaluationCreateManyEvaluatorInput | Prisma.PeerEvaluationCreateManyEvaluatorInput[];
    skipDuplicates?: boolean;
};
export type PeerEvaluationCreateWithoutTargetMemberInput = {
    id?: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
    evaluator: Prisma.MemberCreateNestedOneWithoutEvaluationsGivenInput;
};
export type PeerEvaluationUncheckedCreateWithoutTargetMemberInput = {
    id?: string;
    evaluatorId: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
};
export type PeerEvaluationCreateOrConnectWithoutTargetMemberInput = {
    where: Prisma.PeerEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutTargetMemberInput, Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput>;
};
export type PeerEvaluationCreateManyTargetMemberInputEnvelope = {
    data: Prisma.PeerEvaluationCreateManyTargetMemberInput | Prisma.PeerEvaluationCreateManyTargetMemberInput[];
    skipDuplicates?: boolean;
};
export type PeerEvaluationUpsertWithWhereUniqueWithoutEvaluatorInput = {
    where: Prisma.PeerEvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PeerEvaluationUpdateWithoutEvaluatorInput, Prisma.PeerEvaluationUncheckedUpdateWithoutEvaluatorInput>;
    create: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutEvaluatorInput, Prisma.PeerEvaluationUncheckedCreateWithoutEvaluatorInput>;
};
export type PeerEvaluationUpdateWithWhereUniqueWithoutEvaluatorInput = {
    where: Prisma.PeerEvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PeerEvaluationUpdateWithoutEvaluatorInput, Prisma.PeerEvaluationUncheckedUpdateWithoutEvaluatorInput>;
};
export type PeerEvaluationUpdateManyWithWhereWithoutEvaluatorInput = {
    where: Prisma.PeerEvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.PeerEvaluationUpdateManyMutationInput, Prisma.PeerEvaluationUncheckedUpdateManyWithoutEvaluatorInput>;
};
export type PeerEvaluationScalarWhereInput = {
    AND?: Prisma.PeerEvaluationScalarWhereInput | Prisma.PeerEvaluationScalarWhereInput[];
    OR?: Prisma.PeerEvaluationScalarWhereInput[];
    NOT?: Prisma.PeerEvaluationScalarWhereInput | Prisma.PeerEvaluationScalarWhereInput[];
    id?: Prisma.StringFilter<"PeerEvaluation"> | string;
    evaluatorId?: Prisma.StringFilter<"PeerEvaluation"> | string;
    targetMemberId?: Prisma.StringFilter<"PeerEvaluation"> | string;
    responsibility?: Prisma.IntFilter<"PeerEvaluation"> | number;
    communication?: Prisma.IntFilter<"PeerEvaluation"> | number;
    teamwork?: Prisma.IntFilter<"PeerEvaluation"> | number;
    quality?: Prisma.IntFilter<"PeerEvaluation"> | number;
    createdAt?: Prisma.DateTimeFilter<"PeerEvaluation"> | Date | string;
};
export type PeerEvaluationUpsertWithWhereUniqueWithoutTargetMemberInput = {
    where: Prisma.PeerEvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PeerEvaluationUpdateWithoutTargetMemberInput, Prisma.PeerEvaluationUncheckedUpdateWithoutTargetMemberInput>;
    create: Prisma.XOR<Prisma.PeerEvaluationCreateWithoutTargetMemberInput, Prisma.PeerEvaluationUncheckedCreateWithoutTargetMemberInput>;
};
export type PeerEvaluationUpdateWithWhereUniqueWithoutTargetMemberInput = {
    where: Prisma.PeerEvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PeerEvaluationUpdateWithoutTargetMemberInput, Prisma.PeerEvaluationUncheckedUpdateWithoutTargetMemberInput>;
};
export type PeerEvaluationUpdateManyWithWhereWithoutTargetMemberInput = {
    where: Prisma.PeerEvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.PeerEvaluationUpdateManyMutationInput, Prisma.PeerEvaluationUncheckedUpdateManyWithoutTargetMemberInput>;
};
export type PeerEvaluationCreateManyEvaluatorInput = {
    id?: string;
    targetMemberId: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
};
export type PeerEvaluationCreateManyTargetMemberInput = {
    id?: string;
    evaluatorId: string;
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
    createdAt?: Date | string;
};
export type PeerEvaluationUpdateWithoutEvaluatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    targetMember?: Prisma.MemberUpdateOneRequiredWithoutEvaluationsReceivedNestedInput;
};
export type PeerEvaluationUncheckedUpdateWithoutEvaluatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetMemberId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeerEvaluationUncheckedUpdateManyWithoutEvaluatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetMemberId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeerEvaluationUpdateWithoutTargetMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluator?: Prisma.MemberUpdateOneRequiredWithoutEvaluationsGivenNestedInput;
};
export type PeerEvaluationUncheckedUpdateWithoutTargetMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeerEvaluationUncheckedUpdateManyWithoutTargetMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibility?: Prisma.IntFieldUpdateOperationsInput | number;
    communication?: Prisma.IntFieldUpdateOperationsInput | number;
    teamwork?: Prisma.IntFieldUpdateOperationsInput | number;
    quality?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeerEvaluationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evaluatorId?: boolean;
    targetMemberId?: boolean;
    responsibility?: boolean;
    communication?: boolean;
    teamwork?: boolean;
    quality?: boolean;
    createdAt?: boolean;
    evaluator?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    targetMember?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["peerEvaluation"]>;
export type PeerEvaluationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evaluatorId?: boolean;
    targetMemberId?: boolean;
    responsibility?: boolean;
    communication?: boolean;
    teamwork?: boolean;
    quality?: boolean;
    createdAt?: boolean;
    evaluator?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    targetMember?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["peerEvaluation"]>;
export type PeerEvaluationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evaluatorId?: boolean;
    targetMemberId?: boolean;
    responsibility?: boolean;
    communication?: boolean;
    teamwork?: boolean;
    quality?: boolean;
    createdAt?: boolean;
    evaluator?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    targetMember?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["peerEvaluation"]>;
export type PeerEvaluationSelectScalar = {
    id?: boolean;
    evaluatorId?: boolean;
    targetMemberId?: boolean;
    responsibility?: boolean;
    communication?: boolean;
    teamwork?: boolean;
    quality?: boolean;
    createdAt?: boolean;
};
export type PeerEvaluationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "evaluatorId" | "targetMemberId" | "responsibility" | "communication" | "teamwork" | "quality" | "createdAt", ExtArgs["result"]["peerEvaluation"]>;
export type PeerEvaluationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluator?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    targetMember?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
};
export type PeerEvaluationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluator?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    targetMember?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
};
export type PeerEvaluationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluator?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    targetMember?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
};
export type $PeerEvaluationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PeerEvaluation";
    objects: {
        evaluator: Prisma.$MemberPayload<ExtArgs>;
        targetMember: Prisma.$MemberPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        evaluatorId: string;
        targetMemberId: string;
        responsibility: number;
        communication: number;
        teamwork: number;
        quality: number;
        createdAt: Date;
    }, ExtArgs["result"]["peerEvaluation"]>;
    composites: {};
};
export type PeerEvaluationGetPayload<S extends boolean | null | undefined | PeerEvaluationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload, S>;
export type PeerEvaluationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PeerEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PeerEvaluationCountAggregateInputType | true;
};
export interface PeerEvaluationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PeerEvaluation'];
        meta: {
            name: 'PeerEvaluation';
        };
    };
    findUnique<T extends PeerEvaluationFindUniqueArgs>(args: Prisma.SelectSubset<T, PeerEvaluationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PeerEvaluationClient<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PeerEvaluationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PeerEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PeerEvaluationClient<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PeerEvaluationFindFirstArgs>(args?: Prisma.SelectSubset<T, PeerEvaluationFindFirstArgs<ExtArgs>>): Prisma.Prisma__PeerEvaluationClient<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PeerEvaluationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PeerEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PeerEvaluationClient<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PeerEvaluationFindManyArgs>(args?: Prisma.SelectSubset<T, PeerEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PeerEvaluationCreateArgs>(args: Prisma.SelectSubset<T, PeerEvaluationCreateArgs<ExtArgs>>): Prisma.Prisma__PeerEvaluationClient<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PeerEvaluationCreateManyArgs>(args?: Prisma.SelectSubset<T, PeerEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PeerEvaluationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PeerEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PeerEvaluationDeleteArgs>(args: Prisma.SelectSubset<T, PeerEvaluationDeleteArgs<ExtArgs>>): Prisma.Prisma__PeerEvaluationClient<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PeerEvaluationUpdateArgs>(args: Prisma.SelectSubset<T, PeerEvaluationUpdateArgs<ExtArgs>>): Prisma.Prisma__PeerEvaluationClient<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PeerEvaluationDeleteManyArgs>(args?: Prisma.SelectSubset<T, PeerEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PeerEvaluationUpdateManyArgs>(args: Prisma.SelectSubset<T, PeerEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PeerEvaluationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PeerEvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PeerEvaluationUpsertArgs>(args: Prisma.SelectSubset<T, PeerEvaluationUpsertArgs<ExtArgs>>): Prisma.Prisma__PeerEvaluationClient<runtime.Types.Result.GetResult<Prisma.$PeerEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PeerEvaluationCountArgs>(args?: Prisma.Subset<T, PeerEvaluationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PeerEvaluationCountAggregateOutputType> : number>;
    aggregate<T extends PeerEvaluationAggregateArgs>(args: Prisma.Subset<T, PeerEvaluationAggregateArgs>): Prisma.PrismaPromise<GetPeerEvaluationAggregateType<T>>;
    groupBy<T extends PeerEvaluationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PeerEvaluationGroupByArgs['orderBy'];
    } : {
        orderBy?: PeerEvaluationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PeerEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeerEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PeerEvaluationFieldRefs;
}
export interface Prisma__PeerEvaluationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evaluator<T extends Prisma.MemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemberDefaultArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    targetMember<T extends Prisma.MemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemberDefaultArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PeerEvaluationFieldRefs {
    readonly id: Prisma.FieldRef<"PeerEvaluation", 'String'>;
    readonly evaluatorId: Prisma.FieldRef<"PeerEvaluation", 'String'>;
    readonly targetMemberId: Prisma.FieldRef<"PeerEvaluation", 'String'>;
    readonly responsibility: Prisma.FieldRef<"PeerEvaluation", 'Int'>;
    readonly communication: Prisma.FieldRef<"PeerEvaluation", 'Int'>;
    readonly teamwork: Prisma.FieldRef<"PeerEvaluation", 'Int'>;
    readonly quality: Prisma.FieldRef<"PeerEvaluation", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PeerEvaluation", 'DateTime'>;
}
export type PeerEvaluationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
    where: Prisma.PeerEvaluationWhereUniqueInput;
};
export type PeerEvaluationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
    where: Prisma.PeerEvaluationWhereUniqueInput;
};
export type PeerEvaluationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PeerEvaluationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PeerEvaluationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PeerEvaluationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeerEvaluationCreateInput, Prisma.PeerEvaluationUncheckedCreateInput>;
};
export type PeerEvaluationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PeerEvaluationCreateManyInput | Prisma.PeerEvaluationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PeerEvaluationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    data: Prisma.PeerEvaluationCreateManyInput | Prisma.PeerEvaluationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PeerEvaluationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PeerEvaluationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeerEvaluationUpdateInput, Prisma.PeerEvaluationUncheckedUpdateInput>;
    where: Prisma.PeerEvaluationWhereUniqueInput;
};
export type PeerEvaluationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PeerEvaluationUpdateManyMutationInput, Prisma.PeerEvaluationUncheckedUpdateManyInput>;
    where?: Prisma.PeerEvaluationWhereInput;
    limit?: number;
};
export type PeerEvaluationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeerEvaluationUpdateManyMutationInput, Prisma.PeerEvaluationUncheckedUpdateManyInput>;
    where?: Prisma.PeerEvaluationWhereInput;
    limit?: number;
    include?: Prisma.PeerEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PeerEvaluationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
    where: Prisma.PeerEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeerEvaluationCreateInput, Prisma.PeerEvaluationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PeerEvaluationUpdateInput, Prisma.PeerEvaluationUncheckedUpdateInput>;
};
export type PeerEvaluationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
    where: Prisma.PeerEvaluationWhereUniqueInput;
};
export type PeerEvaluationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeerEvaluationWhereInput;
    limit?: number;
};
export type PeerEvaluationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeerEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.PeerEvaluationOmit<ExtArgs> | null;
    include?: Prisma.PeerEvaluationInclude<ExtArgs> | null;
};
