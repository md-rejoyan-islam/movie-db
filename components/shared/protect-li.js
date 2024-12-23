"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";

export default function ProtectLi() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      {user ? (
        <>
          <Link href="/watch-list" className="text-white hover:text-gray-300">
            Watch Later
          </Link>
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-300"
          >
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" className="text-white hover:text-gray-300">
          Login
        </Link>
      )}
    </>
  );
}
