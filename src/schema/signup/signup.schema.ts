import z from 'zod';

export const SignUp = z.object({
    email: z.string().email(),
    password: z.string().min(10),
    role: z.string()
  });

export type ISignUp = z.TypeOf<typeof SignUp>;
