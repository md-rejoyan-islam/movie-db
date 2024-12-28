"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { userLogout } from "@/db/user";
import { toast } from "react-toastify";
import CustomLink from "./custom-link";

export default function ProtectLi() {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await userLogout();
    setUser(null);
    toast.success("Logout successful");
  };
  return (
    <>
      {user ? (
        <>
          <CustomLink path={"/watch-list"} style={" hover:text-gray-300"}>
            Watch Later
          </CustomLink>

          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-300"
          >
            Logout
          </button>
        </>
      ) : (
        <CustomLink path="/login" style=" hover:text-gray-300">
          Login
        </CustomLink>
      )}
    </>
  );
}
