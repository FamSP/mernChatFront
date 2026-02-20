import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuthenStore from "../store/useAuthenStore";

const Home = () => {
  const navigate = useNavigate();
  const { authUser, checkAuth, isCheckingAuth } = useAuthenStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex justify-between items-center p-4 border-b border-slate-800">
        <h1 className="text-xl font-bold">Chat App</h1>
        <button className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-none text-white">
          Logout
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">Welcome, {authUser?.fullName}</h2>
        <p className="text-gray-400">This is the home page.</p>
      </div>
    </div>
  );
};
export default Home;
