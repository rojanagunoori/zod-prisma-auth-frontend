import { z } from "zod";

// Register schema
export const registerSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be less than 15 digits" }),
  role: z.enum(["user", "admin"], {
    message: "Role must be either 'user' or 'admin'",
  }),
});
export type RegisterSchema = z.infer<typeof registerSchema>;

// Login schema
export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
export type LoginSchema = z.infer<typeof loginSchema>;
