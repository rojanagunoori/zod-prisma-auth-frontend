export interface AuthRequest {
    email: string;
    password: string;
  }
  
 // src/types/auth.ts

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  fullName: string;
  username: string;
  phone: string;
  role: string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: {
    id: number;
    fullName: string;
    email: string;
    username: string;
    phone: string;
    role: string;
    createdAt: string;
  };
}
