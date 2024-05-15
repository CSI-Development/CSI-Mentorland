import z, { string } from "zod";

export const createMentorData = z.object({
  firstName: z.string(),
  lastName: z.string(),
  mentorAvatar: z.string(),
  subjectsFromMentor: z.string().array(),
  verifiableQualifications: z.array(
    z.object({
      subject: z.string(),
      institution: z.string(),
      year: z.number(),
    }),
  ),
  recentVideoLink: z.array(
    z.object({
      url: z.string(),
      thumbnail: z.string(),
    }),
  ),
});

export type ICreateMentor = z.TypeOf<typeof createMentorData>;
