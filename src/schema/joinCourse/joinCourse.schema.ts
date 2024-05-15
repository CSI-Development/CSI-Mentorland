import z from "zod";

export const createStudentData = z.object({
  mentorId: z.string(),
  courseId: z.string(),
});

export type IJoinCourse = z.TypeOf<typeof createStudentData>;
