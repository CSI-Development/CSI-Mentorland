import z from "zod";

export const communityRulesData = z.object({
    communityRules: z.string().array()
});

export type ICreateCommunityRules = z.TypeOf<typeof communityRulesData>;
