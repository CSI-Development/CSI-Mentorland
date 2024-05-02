import z from 'zod';

export const createCommunityData = z.object({
    communityName: z.string(),
    communityLevel: z.string(),    
  });

export type ICreateCommunity = z.TypeOf<typeof createCommunityData>;
