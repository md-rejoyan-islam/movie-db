import SignupForm from "@/components/form/signup-form";
import Link from "next/link";

export const metadata = {
  title: "Register | Movie DB",
  description: "A simple movie website built with Next.js",
};

export default function Register() {
  return (
    <div className="bg-moviedb-black min-h-screen py-20 flex items-center justify-center">
      <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-6">
            Create Your Account
          </h1>
          <SignupForm />
          <div className="mt-6 text-moviedb-gray">
            Already have an account?
            <Link href="/login" className="text-white hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
