import InputField from "./InputField";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md px-8">
      <div className="bg-[#2d2421] p-3 rounded-xl mb-6">
        <span className="text-orange-500 text-2xl">💬</span>
      </div>

      <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
      <p className="text-gray-400 mb-8">Sign in to your account</p>

      <form className="w-full space-y-6">
        <InputField label="Email" type="email" placeholder="you@example.com" />
        <InputField label="Password" type="password" placeholder="••••••••" />

        <button className="w-full bg-[#ff8a65] hover:bg-[#ff7a50] text-[#1a1f26] font-bold py-3 rounded-lg transition-all">
          Sign in
        </button>
      </form>

      <p className="mt-8 text-gray-400">
        Don't have an account?{" "}
        <a href="signup" className="text-[#ff8a65] underline">
          Create account
        </a>
      </p>
    </div>
  );
};
export default LoginForm;
