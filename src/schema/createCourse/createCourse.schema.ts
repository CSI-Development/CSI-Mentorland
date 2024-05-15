import z from 'zod';

export const createCourseData = z.object({
   
name: z.string(),
category: z.string(),
description: z.string(),
logo: z.string(),
  });

export type ICreateCourse = z.TypeOf<typeof createCourseData>;
