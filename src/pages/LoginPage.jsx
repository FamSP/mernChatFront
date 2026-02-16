import LoginForm from "./login/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-[#0f1217]">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>

      {/* Right Side: Visuals (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#161a21] flex-col items-center justify-center p-12">
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-32 h-32 bg-[#232021] rounded-2xl opacity-50"
            ></div>
          ))}
        </div>

        <div className="text-center max-w-sm">
          <h2 className="text-3xl font-bold text-white mb-4">Welcome back!</h2>
          <p className="text-gray-400 leading-relaxed">
            Sign in to continue your conversations and catch up with your
            messages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
