import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_TMDB_API_URL;
  try {
    const response = await axios.get(`${url}/movie/popular`, {
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    });
    const movie = response.data;
    return NextResponse.json(movie);
  } catch (error) {
    console.log(error);

    return NextResponse.error(error);
  }
}
