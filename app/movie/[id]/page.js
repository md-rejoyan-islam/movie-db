import AddToWatchList from "@/components/movie/add-to-watch-list";
import {
  getMovieById,
  getMovieCreditsById,
  getSimilarMovieById,
} from "@/db/movies";
import { dateFormater } from "@/helper/helper";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function getMovie(id) {
  try {
    const movie = await getMovieById(id);
    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const movie = await getMovie(id);

    if (!movie) throw new Error("Movie not found");

    return {
      title: `${movie?.original_title} (${new Date(
        movie?.release_date
      )?.getFullYear()})`,
      description: movie?.overview,
      openGraph: {
        title: `${movie.original_title} (${new Date(
          movie?.release_date
        )?.getFullYear()})`,
        description: movie.overview,
        url: `https://yourdomain.com/movie/${id}`,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${movie?.poster_path}`,
            width: 780,
            height: 439,
            alt: `${movie.title} Backdrop`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${movie?.original_title} (${new Date(
          movie?.release_date
        )?.getFullYear()})`,
        description: movie.overview,
        images: `[${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${movie?.poster_path}]`,
      },
    };
  } catch (error) {
    return {
      title: "Movie Not Found",
      description: "The movie you are looking for does not exist.",
    };
  }
}

export default async function Movie({ params }) {
  const { id } = params;

  const movie = await getMovie(id);

  const { cast } = await getMovieCreditsById(id);
  const { results: relatedMovies } = await getSimilarMovieById(id);

  if (!movie) {
    notFound();
  }

  return (
    <div className="bg-black text-white">
      {/* Movie Details Section */}
      <div id="movieDetails" className="pt-20 mb-8">
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKDROP_BASE_URL}${movie?.backdrop_path}`}
              alt={movie?.title}
              className="w-full h-full object-cover"
              width={1280}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70" />
          </div>
          <div className="relative container mx-auto px-4 pt-32">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Image
                  src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${movie?.poster_path}`}
                  alt={movie?.title}
                  className="w-full rounded-lg shadow-lg"
                  width={1280}
                  height={600}
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-4">{movie?.title}</h1>
                <div className="flex items-center mb-4 space-x-4">
                  <span className="text-green-500">
                    {" "}
                    {dateFormater(movie?.release_date)}
                  </span>
                  <span>| </span>
                  <span>{movie?.runtime} min</span>
                </div>
                <p className="text-lg mb-6">{movie?.overview}</p>
                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Genres</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie?.genres.map((genre) => (
                      <span
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                        key={genre.id}
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Cast</h3>
                  <div className="flex flex-wrap gap-4 h-full">
                    {cast?.map((movie, index) => (
                      <div className="text-center" key={index}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CAST_PROFILE_URL}${movie?.profile_path}`}
                          alt={movie?.name}
                          className="w-24 h-24 rounded-full object-cover mb-2"
                          width={200}
                          height={120}
                        />
                        <p className="text-sm pt-4 text-white block">
                          {cast?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <AddToWatchList id={id} movie={movie} />
                </div>
                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Share on social media</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="text-center cursor-pointer">
                      <Image
                        src="http://facebook.com/favicon.ico"
                        alt="Facebook"
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                        width={200}
                        height={300}
                      />
                      <p className="text-sm">Facebook</p>
                    </button>
                    <button className="text-center cursor-pointer">
                      <Image
                        src="http://x.com/favicon.ico"
                        alt="Facebook"
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                        width={200}
                        height={300}
                      />
                      <p className="text-sm">X</p>
                    </button>
                    <button className="text-center cursor-pointer">
                      <Image
                        src="http://linkedin.com/favicon.ico"
                        alt="Facebook"
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                        width={200}
                        height={300}
                      />
                      <p className="text-sm">Linkedin</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Similar Movies Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <div className="flex w-48 h-[288px] rounded-lg cursor-pointer hover:scale-105 transition-transform">
            <div className="w-48 h-[288px] rounded-lg bg-zinc-800 relative">
              <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
                <div className="animate-pulse w-full h-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-[length:200%_100%] animate-[shimmer_.5s_infinite]" />
              </div>
            </div>
          </div>
          {relatedMovies?.map((movie, index) => (
            <div
              className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
              key={index}
            >
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${movie?.poster_path}`}
                  alt={movie?.title}
                  className="w-full rounded-lg"
                  width={250}
                  height={300}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
