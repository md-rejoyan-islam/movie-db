"use client";

import { loginUserWithCredentials } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputField from "./input-field";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  const { setUser } = useAuth();
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const user = await loginUserWithCredentials(data);

      if (user) {
        console.log(user);

        router.push("/");
        setUser(user);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      id="loginForm"
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        name="email"
        placeholder="Email or phone number"
        type="email"
        control={control}
        rules={{ required: "Email or phone is required" }}
        register={register}
        errors={errors}
      />
      <InputField
        name="password"
        placeholder="Password"
        type="password"
        control={control}
        rules={{ required: "Password is required" }}
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
