// src/types/user.ts
export interface User {
    id: number;
    fullName: string;
    username: string;
    email: string;
    phone: string;
    role: string;
    createdAt: string;
  }
  
  export interface CreateUserRequest extends Omit<User, "id" | "createdAt"> {
    password: string;
  }
  
  export interface UpdateUserRequest extends Partial<CreateUserRequest> {}
  