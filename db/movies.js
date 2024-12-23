import axios from "axios";

const url = process.env.NEXT_PUBLIC_SITE_URL;

export async function popularMovie() {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }

    const response = await axios.get(url + "/api/movie/popular");
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function trendingMovie() {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }
    const response = await axios.get(url + "/api/movie/trending");
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getRandomMovie() {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }

    // if (process.env.BUILD_TIME === "true") {
    //   return {};
    // }

    const response = await axios.get(url + "/api/movie/trending");

    const movie =
      response.data?.results[
        Math.floor(Math.random() * response.data?.results?.length)
      ];

    return movie;
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
}

export async function topRatedMovie() {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }
    const response = await axios.get(url + "/api/movie/top-rated");
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMovieById(id) {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }
    if (!id) {
      throw new Error("Movie ID is not defined");
    }
    const response = await axios.get(url + `/api/movie/${id}`);
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMovieCreditsById(id) {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }
    if (!id) {
      throw new Error("Movie ID is not defined");
    }
    const response = await axios.get(url + `/api/movie/${id}/credit`);
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSimilarMovieById(id) {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }
    if (!id) {
      throw new Error("Movie ID is not defined");
    }

    const response = await axios.get(url + `/api/movie/${id}/similar`);
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function searchMovieByName(name) {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }
    if (!name) {
      throw new Error("Movie name is not defined ");
    }

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
    if (!url) {
      throw new Error("Site URL is not defined");
    }
    const response = await axios.get(url + "/api/movie/genres");
    const genres = response.data;
    return genres;
  } catch (error) {
    throw new Error(error);
  }
}
