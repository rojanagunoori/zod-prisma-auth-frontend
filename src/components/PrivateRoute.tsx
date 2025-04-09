import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { JSX } from "react";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth();
  
    if (isAuthenticated === undefined) return <p>Loading...</p>; // optional
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  }
  