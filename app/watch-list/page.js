import WatchListCard from "@/components/watch-list/watch-list-card";

export const metadata = {
  title: "Watch Later | Movie DB",
  description: "A simple movie website built with Next.js",
};

export default function WatchList() {
  return (
    <div className="bg-body text-light min-h-screen">
      <div className="container mx-auto pt-24 pb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">Watch Later</h1>
          <p className="text-light/70 mt-2">
            Movies you&apos;ve saved to watch in the future
          </p>
        </div>
        <WatchListCard />
      </div>
    </div>
  );
}
