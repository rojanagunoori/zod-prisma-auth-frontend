import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import { motion } from "framer-motion";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
//import { AuthProvider, useAuth } from "./context/AuthContext";

import NotFound from "./pages/NotFound";
import NavLinks from "./components/NavLinks";

export default function App() {
 // const { isAuthenticated } = useAuth();
  return (
<>
      <ToastContainer position="top-center" autoClose={3000} />

      <BrowserRouter>
        <div className="app-container">
          <header className="navbar">
            <h1 className="logo">Auth Portal</h1>
            <nav className="nav-links">
              <NavLinks />
            </nav>
          </header>

          <main className="main-content">
            <motion.div
              className="content-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </main>
        </div>
      </BrowserRouter>
      </>

  );
}
