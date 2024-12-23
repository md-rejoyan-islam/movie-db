import Image from "next/image";

export default function MovieCompareCard({ slot, slots, setSlots, index }) {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col">
      <div className="flex justify-end mb-4">
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => {
            const newSlots = slots.filter((_, i) => i !== index);
            setSlots(newSlots);
          }}
        >
          ✕
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 h-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${slot.poster_path}`}
            alt={slot?.title}
            height={96}
            width={64}
            className="w-full rounded-lg mb-4 object-contain max-h-full"
          />
          <h2 className="text-xl font-bold mb-2 text-center">{slot?.title}</h2>
        </div>
        <div className="w-full space-y-4 col-span-3">
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Rating:</span>
            <span className="float-right">
              {slot?.vote_average?.toFixed(2)}/10
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Release Year:</span>
            <span className="float-right">
              {new Date(slot?.release_date).getFullYear()}
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Runtime:</span>
            <span className="float-right">{slot?.runtime} min</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Budget:</span>
            <span className="float-right">${slot?.budget}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Revenue:</span>
            <span className="float-right">${slot?.revenue}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Genres:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {slot?.genres?.map((genre) => (
                <span
                  className="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
