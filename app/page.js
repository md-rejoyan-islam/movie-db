import HomeHero from "@/components/home/hero";
import HomeMovies from "@/components/home/movies";
import {
  getRandomMovie,
  popularMovie,
  topRatedMovie,
  trendingMovie,
} from "@/db/movies";

export default async function Home() {
  // const { results: popularMovies } = await popularMovie();
  // const { results: trendingMovies } = await trendingMovie();
  // const { results: topRatedMovies } = await topRatedMovie();
  // const randomMovie = await getRandomMovie();

  const [
    { results: popularMovies },
    { results: trendingMovies },
    { results: topRatedMovies },
    randomMovie,
  ] = await Promise.all([
    popularMovie(),
    trendingMovie(),
    topRatedMovie(),
    getRandomMovie(),
  ]);

  return (
    <>
      <HomeHero randomMovie={randomMovie} />
      <HomeMovies
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        trendingMovies={trendingMovies}
      />
    </>
  );
}
