// src/pages/Signup.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "../schemas/authSchema";
import { useSignup } from "../hooks/useAuth";
import Input from "../components/Input";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Auth.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();


  const { mutate, isLoading,// error, isSuccess, data 

  } = useSignup();

  const onSubmit = (data: RegisterSchema) => {
    mutate(data, {
      onSuccess: (res) => {
        toast.success(`✅ ${res.message}`);
        navigate("/");
        if (res.user) {
          toast.info(`👤 Welcome ${res.user.fullName}`);
          toast.info(`📧 ${res.user.email}`);
          navigate("/");
        }
      },
      onError: (err: any) => {
        const msg = err?.response?.data?.message || "Registration failed.";
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
        <h2 className="auth-title">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <Input label="Full Name" {...register("fullName")} error={errors.fullName?.message} />
          <Input label="Username" {...register("username")} error={errors.username?.message} />
          <Input label="Email" {...register("email")} error={errors.email?.message} />
          <Input label="Password" type="password" {...register("password")} error={errors.password?.message} />
          <Input label="Phone" {...register("phone")} error={errors.phone?.message} />
          {/*<Input label="Role" {...register("role")} error={errors.role?.message} />*/}
          <div className="input-group">
  <label htmlFor="role" className="input-label">Role</label>
  <select id="role" {...register("role")} className="auth-input">
    <option value="">-- Select Role --</option>
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
  {errors.role && <p className="input-error">{errors.role.message}</p>}
</div>


          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Signup"}
          </button>
        </form>
        

        {/*error && (
          <p className="auth-error">Error: {(error as any).response?.data?.message}</p>
        )}
        {isSuccess && (
          <p className="auth-success">{data.message}</p>
        )*/}

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
