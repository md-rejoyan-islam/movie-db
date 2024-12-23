import Image from "next/image";
import Link from "next/link";

export default async function SearchResult({ searchResults }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {searchResults?.map((movie) => (
        <Link
          href={`/movie/${movie.id}`}
          className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
          key={movie.id}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${movie?.poster_path}`}
            alt={movie?.title}
            height={500}
            width={333}
            className="w-full aspect-[2/3] object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">{movie?.title}</h3>
            <div className="flex justify-between text-sm text-gray-400">
              {movie?.release_date && (
                <span>{new Date(movie?.release_date)?.getFullYear()}</span>
              )}
              <span>⭐ {movie?.vote_average?.toFixed(2)}</span>
            </div>
          </div>
        </Link>
      ))}
      {searchResults?.length === 0 && (
        <p className="text-red-400">No results found</p>
      )}
    </div>
  );
}
