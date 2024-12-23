import { useContext } from "react";
import { WatchListContext } from "../context/watch-list.context";

export default function useWatchList() {
  const { watchList, setWatchList } = useContext(WatchListContext);

  return {
    watchList,
    setWatchList,
  };
}
