import z from 'zod';

export const createStudentData = z.object({
    firstName: z.string(),
    lastName: z.string(),
    anonymousStudent: z.boolean(),
    userNameOrHandler: z.string(),
    wantToAchieve: z.string().array(),
    subjectWantToLearn: z.string().array(),
    selectedMentors: z.string().array(),
    studentAvatar: z.string(),
  });

export type ICreateStudent = z.TypeOf<typeof createStudentData>;
