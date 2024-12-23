"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Loading from "../loading";
function Search() {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("value") || "");

  const router = useRouter();

  const pathname = usePathname();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search) {
      router.push(`/search?value=${search}`);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        id="searchInput"
        placeholder="Search movies..."
        className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          const params = new URLSearchParams(searchParams);

          if (e.target.value === "") {
            params.delete("value");
          } else {
            params.set("value", e.target.value);
            router.replace(`${pathname}?${params.toString()}`);
          }
        }}
        onKeyUp={(e) => handleSearch(e)}
      />
      <div
        id="searchResults"
        className="absolute w-full mt-2 bg-black bg-opacity-90 rounded-lg hidden"
      />
    </div>
  );
}

export default function MovieSearch() {
  return (
    <Suspense fallback={<Loading />}>
      <Search />
    </Suspense>
  );
}
