import { useState } from "react";
import { Loader2, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import useAuthenStore from "../store/useAuthenStore.js";

function Register() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { isSignUp, signUp } = useAuthenStore();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const validateForm = () => {
    if (!user.fullname.trim()) {
      toast.error("Full Name is required");
      return false;
    }
    if (!user.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      toast.error("Email is invalid");
      return false;
    }
    if (!user.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if (user.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = validateForm();
    if (success === true) {
      signUp(user);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-orange-500 p-3 rounded-xl mb-3">
              <MessageSquare size={28} />
            </div>
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-gray-400 text-sm">
              Get started with your free account
            </p>
          </div>

          {/* form */}
          <div className="space-y-4">
            {/* fullname */}
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full bg-slate-900 mt-1"
                name="fullname"
                value={user.fullname}
                onChange={handleChange}
              />
            </div>

            {/* email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full bg-slate-900 mt-1"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            {/* password */}
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-slate-900 mt-1"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            {/* button */}
            <button
              className="btn w-full bg-orange-500 hover:bg-orange-600 border-none text-white mt-2"
              disabled={isSignUp}
              onClick={handleSubmit}
            >
              {isSignUp ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2" size={16} />
                  Signing Up...
                </div>
              ) : (
                "Sign Up"
              )}
            </button>

            {/* signin */}
            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{" "}
              <a
                href="login"
                className="text-orange-400 cursor-pointer hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 items-center justify-center">
        <div className="text-center">
          {/* grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-20 h-20 bg-slate-800 rounded-xl"></div>
            ))}
          </div>

          <h2 className="text-xl font-semibold">Join our community</h2>
          <p className="text-gray-400 mt-2 max-w-sm">
            Connect with friends, share moments, and stay in touch with your
            loved ones.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
