"use client";
import { useEffect, useState } from "react";
import { getWatchListMoviesByUserId } from "../actions";
import { WatchListContext } from "../context/watch-list.context";
import { useAuth } from "../hooks/useAuth";

export default function WatchListProvider({ children }) {
  const [watchList, setWatchList] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      if (!user) {
        return;
      }

      const watchListMovies = await getWatchListMoviesByUserId(user.id);
      setWatchList(watchListMovies);
    })();
  }, [user]);

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
}
