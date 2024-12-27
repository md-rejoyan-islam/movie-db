"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, style, children }) {
  const pathname = usePathname();

  const active =
    pathname === path ? "text-red-600 hover:text-red-700" : "text-white";

  return (
    <Link href={path} className={` ${active} ${style}`}>
      {children}
    </Link>
  );
}
