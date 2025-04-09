// src/config/api.ts
import axios from "axios";

export const API = axios.create({
  baseURL: "https://zod-prisma-auth-backend.onrender.com/api"//"http://localhost:5000/api",
});
