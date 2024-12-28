const url = process.env.NEXT_PUBLIC_SITE_URL;

export async function popularMovie() {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }

    const movie = await fetch(url + "/api/movie/popular").then((res) =>
      res.json()
    );

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
    const response = await fetch(url + "/api/movie/trending").then((res) =>
      res.json()
    );

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getRandomMovie() {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }

    const response = await fetch(url + "/api/movie/trending").then((res) =>
      res.json()
    );

    const movie =
      response.results[Math.floor(Math.random() * response.results.length)];

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

    const response = await fetch(url + "/api/movie/top-rated").then((res) =>
      res.json()
    );

    return response;
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

    const response = await fetch(url + `/api/movie/${id}`).then((res) =>
      res.json()
    );

    return response;
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

    const response = await fetch(url + `/api/movie/${id}/credit`).then((res) =>
      res.json()
    );

    return response;
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

    const response = await fetch(url + `/api/movie/${id}/similar`).then((res) =>
      res.json()
    );

    return response;
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

    const response = await fetch(
      url + `/api/movie/search-movie?query=${name}`
    ).then((res) => res.json());

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllGenres() {
  try {
    if (!url) {
      throw new Error("Site URL is not defined");
    }

    const response = await fetch(url + "/api/movie/genres").then((res) =>
      res.json()
    );

    return response;
  } catch (error) {
    throw new Error(error);
  }
}
