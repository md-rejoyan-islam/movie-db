import { getWatchListMoviesByUserId } from "../actions";

export default async function useMovieInWatchList(id, userId) {
  if (!userId) {
    return false;
  }

  const watchListMovies = await getWatchListMoviesByUserId(userId);

  const isMovieInWatchList = watchListMovies?.length
    ? watchListMovies?.some((movie) => movie.movieId === id)
    : false;

  console.log(isMovieInWatchList);

  return isMovieInWatchList;
}
