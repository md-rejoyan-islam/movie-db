"use client";
import { registerUser } from "@/app/actions";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputField from "./input-field";

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match");
    }
    try {
      const user = await registerUser(data);
      if (user) router.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      id="signupForm"
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        name="firstName"
        placeholder="First Name"
        rules={{ required: "First Name is required" }}
        register={register}
        errors={errors}
      />
      <InputField
        name="lastName"
        placeholder="Last Name"
        rules={{ required: "Last Name is required" }}
        register={register}
        errors={errors}
      />
      <InputField
        name="email"
        placeholder="Email Address"
        type="email"
        register={register}
        errors={errors}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email",
          },
        }}
      />

      <InputField
        name="password"
        placeholder="Create Password"
        type="password"
        rules={{ required: "Password is required" }}
        register={register}
        errors={errors}
      />
      <InputField
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        rules={{ required: "Confirm your password" }}
        register={register}
        errors={errors}
      />
      {/* password and confirmPassword field, show error if password and confirmPassword do not match   */}

      <div className="text-left text-moviedb-gray text-sm">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" required />I agree to the
          Terms of Service and Privacy Policy
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
