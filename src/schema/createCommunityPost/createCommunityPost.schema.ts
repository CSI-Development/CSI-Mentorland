import z from "zod";

export const communityPostData = z.object({
  title: z.string(),
  postText: z.string(),
  multimedia: z.string(),
  links: z.string(),
});

export type ICreateCommunityPost = z.TypeOf<typeof communityPostData>;
