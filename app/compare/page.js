"use client";

import EmptyCompareCard from "@/components/compare-movie/empty-compare-card";
import MovieCompareCard from "@/components/compare-movie/movie-compare-card";
import SearchModal from "@/components/modal/search-modal";
import { useState } from "react";

export default function Compare() {
  const [slots, setSlots] = useState([]);
  const [slotNumber, setSlotNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Compare Movies</h1>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
            onClick={() => setSlots([...slots, null])}
          >
            Add Movie +
          </button>
        </div>
        {/* Movie Comparison Container */}
        {slots.length === 0 ? (
          <p className="text-center text-gray-400 py-20 ">
            No movie selected. Click on the {'"'}Add Movie +{'"'} button to add
            a movie to compare.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {slots.map((slot, index) => {
              return (
                <div key={index}>
                  {slot ? (
                    <MovieCompareCard
                      slot={slot}
                      slots={slots}
                      setSlots={setSlots}
                      index={index}
                    />
                  ) : (
                    <EmptyCompareCard
                      slots={slots}
                      setSlots={setSlots}
                      index={index}
                      setIsOpen={setIsOpen}
                      setSlotNumber={setSlotNumber}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
      {/* Movie Search Modal */}
      <SearchModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        slots={slots}
        slotNumber={slotNumber}
        setSlots={setSlots}
      />
    </div>
  );
}
