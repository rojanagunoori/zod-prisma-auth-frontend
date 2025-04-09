import axios from "axios";
import { AuthRequest, AuthResponse } from "../types/auth";

const API = axios.create({
  baseURL: "https://zod-prisma-auth-backend.onrender.com/api"//"http://localhost:5000/api",
});

export const registerUser = async (data: AuthRequest): Promise<AuthResponse> => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data: AuthRequest): Promise<AuthResponse> => {
  const res = await API.post("/auth/login", data);
  return res.data;
};
