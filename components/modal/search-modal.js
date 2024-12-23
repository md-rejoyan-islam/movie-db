import { getAllGenres, getMovieById, searchMovieByName } from "@/db/movies";
import { getGenresById } from "@/helper/helper";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export default function SearchModal({
  isOpen,
  setIsOpen,
  setSlots,
  slotNumber,
}) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // debounce handleSearch
  const handleSearch = async (e) => {
    setSearch(e.target.value);

    setTimeout(async () => {
      const response = await searchMovieByName(e.target.value);

      setSearchResults(response?.results);
    }, 1000);
  };

  const handleMovieSelect = async (movie) => {
    const { genres } = await getAllGenres();
    const movieDetails = await getMovieById(movie?.id);
    const movieGenres = getGenresById(genres, movie?.genre_ids);

    movie.genres = movieGenres;
    movie.runtime = movieDetails?.runtime;
    movie.budget = movieDetails?.budget;
    movie.revenue = movieDetails?.revenue;

    setSlots((prev) =>
      prev.map((slot, i) => (i === slotNumber ? movie : slot))
    );
    setIsOpen(false);
    setSearch("");
    setSearchResults([]);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search Movie</h2>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            <input
              type="text"
              placeholder="Type movie name..."
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={search}
              onChange={handleSearch}
            />
            <div className="max-h-96 overflow-y-auto">
              {searchResults?.map((movie) => (
                <div
                  className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
                  key={movie?.id}
                  onClick={() => handleMovieSelect(movie)}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${movie?.poster_path}`}
                    alt={movie?.title}
                    height={96}
                    width={64}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold">{movie?.title}</h3>
                    <p className="text-sm text-gray-400">
                      {new Date(movie?.release_date).getFullYear()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
