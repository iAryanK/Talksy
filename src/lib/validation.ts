import { z } from "zod";

const requiredString = z.string().trim().min(1);

export const SignUpSchema = z.object({
  email: requiredString.email(),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "only letters, numbers, _, and - are allowed",
  ),
  password: requiredString.min(8),
});

export type SignUpValues = z.infer<typeof SignUpSchema>;

export const LoginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof LoginSchema>;
