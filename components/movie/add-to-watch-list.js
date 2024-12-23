"use client";
import { addMovieToWatchList } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import useWatchList from "@/app/hooks/useWatchList";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AddIcon, CheckIcon } from "../svg";

export default function AddToWatchList({ id, movie }) {
  const { user } = useAuth();

  const { watchList, setWatchList } = useWatchList();

  const isMovieInWatchList = watchList.some((movie) => movie.movieId == id);

  const router = useRouter();

  const handleAddToWatchList = async () => {
    if (!user) {
      return router.push("/login");
    }

    const watchMovie = await addMovieToWatchList({
      movieId: id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      user: user.id,
    });

    setWatchList([...watchList, watchMovie]);
    toast.success("Movie added to watch list");
  };

  return (
    <div className="flex flex-wrap gap-4">
      {isMovieInWatchList ? (
        <div className="text-center">
          <button
            className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600"
            disabled
          >
            <CheckIcon />
            Added to Wacth List
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg"
            onClick={handleAddToWatchList}
          >
            <AddIcon />
            Add to Wacth List
          </button>
        </div>
      )}
    </div>
  );
}
