const InputField = ({ label, type, placeholder }) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-gray-400 text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-[#1a1f26] border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-orange-500 transition-colors"
    />
  </div>
);

export default InputField;
