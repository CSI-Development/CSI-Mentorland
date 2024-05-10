import z from "zod";

export const LogIn = z.object({
  role: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type ILogIn = z.TypeOf<typeof LogIn>;
