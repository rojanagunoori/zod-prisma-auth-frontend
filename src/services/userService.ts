// src/services/userService.ts
import { API } from "../config/api";
import { User, UpdateUserRequest } from "../types/User";

// Get all users
export const getAllUsers = async (): Promise<User[]> => {
  const res = await API.get("/users");
  console.log(res.data.data)
  return res.data.data;
};

// Get user by ID
export const getUserById = async (id: number): Promise<User> => {
  const res = await API.get(`/users/${id}`);
  return res.data;
};



// Update user
export const updateUser = async (id: number, data: UpdateUserRequest): Promise<User> => {
  const res = await API.put(`/users/${id}`, data);
  return res.data;
};

// Delete user
export const deleteUser = async (id: number): Promise<{ message: string }> => {
  const res = await API.delete(`/users/${id}`);
  return res.data;
};
