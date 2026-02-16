import InputField from "./InputField";

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md px-8">
      {/* Icon Badge */}
      <div className="bg-[#2d2421] p-3 rounded-xl mb-6">
        <span className="text-orange-500 text-2xl">💬</span>
      </div>

      <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
      <p className="text-gray-400 mb-8">Get started with your free account</p>

      <form className="w-full space-y-5">
        <InputField label="Full Name" type="text" placeholder="John Doe" />
        <InputField label="Email" type="email" placeholder="you@example.com" />
        <InputField label="Password" type="password" placeholder="••••••••" />

        <button className="w-full bg-[#ff8a65] hover:bg-[#ff7a50] text-[#1a1f26] font-bold py-3 rounded-lg mt-2 transition-all">
          Create Account
        </button>
      </form>

      <p className="mt-8 text-gray-400">
        Already have an account?{" "}
        <a href="/login" className="text-[#ff8a65] hover:underline">
          Sign in
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;
