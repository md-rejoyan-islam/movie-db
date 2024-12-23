import watchListModel from "@/models/watch-list.model";

export async function movieAddToWatchList(data) {
  try {
    const watchListMovie = await watchListModel.create({
      movieId: data.movieId,
      user: data.user,
      title: data.title,
      poster_path: data.poster_path,
      release_date: data.release_date,
    });

    return {
      id: watchListMovie._id.toString(),
      movieId: watchListMovie.movieId,
      user: watchListMovie.user?.toString(),
      title: watchListMovie.title,
      poster_path: watchListMovie.poster_path,
      release_date: watchListMovie.release_date,
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getWatchListMovies(user) {
  try {
    const watchListMovies = await watchListModel.find({ user }).lean();

    return watchListModel?.length
      ? watchListMovies?.map((movie) => {
          return {
            id: movie._id.toString(),
            movieId: movie.movieId,
            user: movie.user?.toString(),
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
          };
        })
      : [];
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeWatchListMovie(movieId) {
  try {
    const watchListMovie = await watchListModel
      .findById({ _id: movieId })
      .lean();

    if (!watchListMovie) throw new Error("Movie not found");

    await watchListModel.deleteOne({ _id: movieId });

    return {
      id: watchListMovie._id.toString(),
      movieId: watchListMovie.movieId,
      user: watchListMovie.user?.toString(),
      title: watchListMovie.title,
      poster_path: watchListMovie.poster_path,
      release_date: watchListMovie.release_date,
    };
  } catch (error) {
    throw new Error(error.message);
  }
}
