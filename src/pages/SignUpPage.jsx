import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen bg-[#0f1217]">
      {/* Left Side: Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <SignUpForm />
      </div>

      {/* Right Side: Visual Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#161a21] flex-col items-center justify-center p-12">
        {/* Decorative Grid */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-32 h-32 bg-[#232021] rounded-2xl opacity-40 hover:opacity-60 transition-opacity"
            ></div>
          ))}
        </div>

        {/* Marketing Text */}
        <div className="text-center max-w-sm">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join our community
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Connect with friends, share moments, and stay in touch with your
            loved ones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
