import Link from "next/link";
import ProtectLi from "./protect-li";
import MovieSearch from "./search";

export default function Header() {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-red-600 text-4xl font-bold">
            MOVIE DB
          </Link>
          <div className="ml-8 space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/compare" className="text-white hover:text-gray-300">
              Compare Movies
            </Link>

            <ProtectLi />
          </div>
        </div>
        <MovieSearch />
      </div>
    </nav>
  );
}
