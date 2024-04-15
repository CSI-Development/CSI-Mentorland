import z from 'zod';
export const userStateSchema = z.object({
    _id: z.string(),
    email: z.string().optional(),
    name: z.string().optional(),
    role:z.string().optional(),
})

export type IUserState = z.TypeOf<typeof userStateSchema>;