const { Controller } = require("react-hook-form");

const InputField = ({
  name,
  placeholder,
  type = "text",
  rules,
  register,
  errors,
}) => {
  return (
    <div>
      <input
        {...register(name, rules)}
        type={type}
        placeholder={placeholder}
        className={`w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1  text-left">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default InputField;
