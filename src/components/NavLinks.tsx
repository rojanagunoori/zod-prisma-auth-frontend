import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavLinks() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {!isAuthenticated ? (
        <>
         <Link to="/users">Users</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <button className="auth-button" onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
}
