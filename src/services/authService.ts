// src/services/auth.ts

import { LoginRequest, RegisterRequest, AuthResponse } from "../types/auth";
import { API } from "../config/api";



export const registerUser = async (data: RegisterRequest): Promise<AuthResponse> => {
  const res = await API.post("/register", data);
  return res.data;
};

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const res = await API.post("/login", data);
  return res.data;
};
