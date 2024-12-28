import mongoose, { Schema } from "mongoose";

const WatchListSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  movieId: {
    type: Number,
    required: [true, "Movie ID is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  poster_path: {
    type: String,
    required: [true, "Poster path is required"],
  },
  release_date: {
    type: String,
    required: [true, "Release date is required"],
  },
});

export default mongoose.models?.WatchList ||
  mongoose.model("WatchList", WatchListSchema);
