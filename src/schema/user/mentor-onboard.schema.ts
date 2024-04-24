import z from "zod";

export const MentorOnboard = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type ILogIn = z.TypeOf<typeof MentorOnboard>;
