export const dynamic = "force-dynamic";

import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connect = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    console.log("Connected to MongoDB");

    return connect;
  } catch (error) {
    console.log(error);
  }
}
