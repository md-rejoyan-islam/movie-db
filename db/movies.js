import axios from "axios";

const url = process.env.NEXT_PUBLIC_SITE_URL;

export async function popularMovie() {
  try {
    const response = await axios.get(url + "/api/movie/popular");
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function trendingMovie() {
  try {
    const response = await axios.get(url + "/api/movie/trending");
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getRandomMovie() {
  try {
    const response = await axios.get(url + "/api/movie/trending");

    const movie =
      response.data?.results[
        Math.floor(Math.random() * response.data?.results?.length)
      ];

    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function topRatedMovie() {
  try {
    const response = await axios.get(url + "/api/movie/top-rated");
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMovieById(id) {
  try {
    const response = await axios.get(url + `/api/movie/${id}`);
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMovieCreditsById(id) {
  try {
    const response = await axios.get(url + `/api/movie/${id}/credit`);
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSimilarMovieById(id) {
  try {
    const response = await axios.get(url + `/api/movie/${id}/similar`);
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function searchMovieByName(name) {
  try {
    const response = await axios.get(
      url + `/api/movie/search-movie?query=${name}`
    );
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllGenres() {
  try {
    const response = await axios.get(url + "/api/movie/genres");
    const genres = response.data;
    return genres;
  } catch (error) {
    throw new Error(error);
  }
}
