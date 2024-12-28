"use server";

import {
  getWatchListMovies,
  movieAddToWatchList,
  removeWatchListMovie,
} from "@/db/watch-list";

const { createUser, userLogin } = require("@/db/user");

export async function registerUser(data) {
  try {
    const user = await createUser(data);
    return {
      status: "success",
      user,
    };
  } catch (error) {
    console.log(error);

    return {
      status: "error",
      message: error.message,
    };
  }
}

export async function loginUserWithCredentials(data) {
  try {
    const user = await userLogin(data);
    return {
      status: "success",
      user,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
}

export async function addMovieToWatchList(data) {
  try {
    const watchListMovie = await movieAddToWatchList(data);

    return watchListMovie;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeMovieFromWatchList(movieId) {
  try {
    const watchListMovie = await removeWatchListMovie(movieId);

    return watchListMovie;
  } catch (error) {
    return error;
  }
}

export async function getWatchListMoviesByUserId(userId) {
  try {
    const watchListMovies = await getWatchListMovies(userId);

    return watchListMovies;
  } catch (error) {
    return error;
  }
}
