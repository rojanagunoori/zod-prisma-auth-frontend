import { useMutation } from "@tanstack/react-query"; // ✅ Fixed import
import { loginUser, registerUser } from "../api/auth";
import { AuthRequest, AuthResponse,  } from "../types/auth";




  
export const useSignup = () =>
  useMutation({
    mutationFn: (data: AuthRequest) => registerUser(data),
  });

  export const useLogin = () => {
    return useMutation<AuthResponse, Error, AuthRequest>({
      mutationFn: loginUser,
    });
  };