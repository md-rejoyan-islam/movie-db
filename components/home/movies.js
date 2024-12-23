import Image from "next/image";
import Link from "next/link";

export default async function HomeMovies({
  popularMovies,
  trendingMovies,
  topRatedMovies,
}) {
  // const [
  //   { results: popularMovies },
  //   { results: trendingMovies },
  //   { results: topRatedMovies },
  // ] = await Promise.all([popularMovie(), trendingMovie(), topRatedMovie()]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Trending Movies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div
          id="trendingMovies"
          className="flex space-x-4 overflow-x-auto pb-4"
        >
          {trendingMovies?.map((movie) => (
            <div
              className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
              key={movie.id}
            >
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}/${movie.poster_path}`}
                  alt={movie?.title}
                  className="w-full rounded-lg"
                  height={200}
                  width={150}
                />
                <div className="mt-2">
                  <h3 className="text-light text-sm font-bold truncate">
                    {movie.title}
                  </h3>
                  <p className="text-primary text-xs">
                    {new Date(movie.release_date).getFullYear()}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* Popular Movies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular on MOVIE DB</h2>
        <div id="popularMovies" className="flex space-x-4 overflow-x-auto pb-4">
          {popularMovies?.map((movie) => (
            <div
              className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
              key={movie.id}
            >
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}/${movie.poster_path}`}
                  alt={movie?.title}
                  className="w-full rounded-lg"
                  height={200}
                  width={150}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* Top Rated Movies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
        <div
          id="topRatedMovies"
          className="flex space-x-4 overflow-x-auto pb-4"
        >
          {topRatedMovies.map((movie) => (
            <div
              className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
              key={movie.id}
            >
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}/${movie.poster_path}`}
                  alt="The Shawshank Redemption"
                  className="w-full rounded-lg"
                  width={150}
                  height={250}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
