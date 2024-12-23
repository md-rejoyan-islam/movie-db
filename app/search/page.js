import SearchResult from "@/components/search-movie/search-results";
import { searchMovieByName } from "@/db/movies";

export async function generateMetadata({ searchParams }) {
  const { value } = searchParams;
  if (!value) {
    return {
      title: "Search - Movies",
      description: "Find your favorite movies by searching.",
    };
  }

  try {
    const response = await searchMovieByName(value);
    const result = response?.results;

    return {
      title: `Search - ${value}`,
      description: `${result?.overview}`,
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Search - Error",
      description: "There was an issue fetching movie data.",
    };
  }
}

export default async function Search({ searchParams }) {
  const { value } = searchParams;

  let searchResults = [];

  try {
    const response = searchParams && (await searchMovieByName(value));
    if (response && response?.results) {
      searchResults = response?.results;
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Search Stats */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Search Results for {value}</h1>
          <p className="text-gray-400">Found {searchResults?.length} results</p>
        </div>
        {/* Filters and Sort Section */}
        <SearchResult searchResults={searchResults} />
      </main>
    </div>
  );
}
