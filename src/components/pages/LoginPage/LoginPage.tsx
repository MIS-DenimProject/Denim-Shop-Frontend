import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo authentication
    if (username && password) {
      // Set authentication state
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", username === "admin" ? "admin" : "manager");
      
      // Navigate to dashboard
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-(--denim-700) flex flex-col items-center justify-center">
      {/* Login Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-lg">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-(--denim-600) rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M19 3v6"/>
              <path d="M16 6h6"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-(--neutral-900)">Denim Factory MIS</h1>
          <p className="text-sm text-(--neutral-500) mt-1">Management Information System</p>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-(--neutral-900)">Welcome Back</h2>
          <p className="text-sm text-(--neutral-500)">Sign in to access the management system</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--neutral-400) w-5 h-5" />
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-(--neutral-200) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--denim-600) text-sm"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--neutral-400) w-5 h-5" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-(--neutral-200) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--denim-600) text-sm"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-(--neutral-900) text-white py-3 rounded-lg font-medium hover:bg-(--neutral-800) transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Demo Credentials Link */}
        <button 
          onClick={() => {
            setUsername("demo_user");
            setPassword("demo123");
          }}
          className="mt-4 text-center w-full text-(--denim-600) text-sm hover:underline"
        >
          Show Demo Credentials
        </button>

        {/* Quick Access */}
        <div className="mt-8">
          <p className="text-sm text-(--neutral-500) mb-3">Quick Access:</p>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => {
                setUsername("admin");
                setPassword("admin123");
                // Automatically submit the form
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("userRole", "admin");
                navigate("/");
              }}
              className="py-2 px-4 border border-(--neutral-200) rounded-lg text-sm text-(--neutral-700) hover:bg-(--neutral-50)"
            >
              Admin
            </button>
            <button
              onClick={() => {
                setUsername("manager");
                setPassword("manager123");
                // Automatically submit the form
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("userRole", "manager");
                navigate("/");
              }}
              className="py-2 px-4 border border-(--neutral-200) rounded-lg text-sm text-(--neutral-700) hover:bg-(--neutral-50)"
            >
              Manager
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-white opacity-80">
        © 2025 Denim Factory. All rights reserved.
      </p>
    </div>
  );
};


