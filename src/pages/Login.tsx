import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "../schemas/authSchema";
import { useLogin } from "../hooks/useAuth";
import Input from "../components/Input";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";



export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const { login } = useAuth();
  const { mutate, isLoading } = useLogin();

  const onSubmit = (data: LoginSchema) => {
    console.log("Login form data:", data); // ✅ This will now log!
    
    mutate(data, {
      onSuccess: (res) => {
        toast.success(`✅ ${res.message}`);
        navigate("/");
        if (res.user) {
          toast.info(`👋 Welcome back ${res.user.fullName}`);
          toast.info(`📧 ${res.user.email}`);
          navigate("/");
          login()
          
        }
        
      },
      onError: (err: any) => {
        const msg = err?.response?.data?.message || "Login failed.";
        toast.error(`❌ ${msg}`);
      },
    });
  };



  return (
    <div className="auth-container">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <Input
            label="Email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="auth-switch">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </motion.div>
    </div>
  );
}
