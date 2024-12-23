"use client";
import { removeMovieFromWatchList } from "@/app/actions";
import useWatchList from "@/app/hooks/useWatchList";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { BoxIcon } from "../svg";

export default function WatchListCard() {
  const { watchList, setWatchList } = useWatchList();

  const handleRemoveFromWatchList = async (movieId) => {
    try {
      const result = await removeMovieFromWatchList(movieId);

      if (result) {
        toast.success("Movie removed from watch list");
        setWatchList((prev) => prev.filter((movie) => movie.id !== movieId));
      }
    } catch (error) {
      toast.error("Failed to remove movie from watch list");
    }
  };

  return (
    <>
      {watchList?.length ? (
        <div
          id="watchLaterList"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {/* Movie Card Template */}
          {watchList.map((movie) => (
            <div
              className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative"
              key={movie.id}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                height={450}
                width={300}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h2 className="text-xl font-bold text-light mb-2">
                  {movie?.title}
                </h2>
                <div className="flex justify-between items-center">
                  <span className="text-primary">
                    {new Date(movie?.release_date).getFullYear()}
                  </span>

                  <button
                    className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition"
                    onClick={() => handleRemoveFromWatchList(movie.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div id="emptyState" className="hidde text-center py-16">
          <BoxIcon />
          <h2 className="text-2xl font-bold text-light mb-2">
            Your Watch Later list is empty
          </h2>
          <p className="text-light/70 mb-6">
            Explore movies and add them to your list to watch later
          </p>
          <Link
            href="/"
            className="bg-primary text-dark px-6 py-2 rounded-full hover:bg-primary/80 transition"
          >
            Explore Movies
          </Link>
        </div>
      )}
    </>
  );
}
