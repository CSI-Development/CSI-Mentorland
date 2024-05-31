import z from 'zod';

export const ScheduleData = z.object({
    title: z.string(),
    description: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    community: z.string(),
    course: z.string(),
    isSelectedAllCommunityMembers: z.boolean(),
  });

export type IEventSchedule = z.TypeOf<typeof ScheduleData>;
