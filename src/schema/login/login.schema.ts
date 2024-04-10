import z from "zod";

export const LogIn = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type ILogIn = z.TypeOf<typeof LogIn>;
