import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const url = process.env.NEXT_PUBLIC_TMDB_API_URL;
  try {
    const searchQuery = query ? `query=${query}` : "";
    const response = await axios.get(`${url}/search/movie?${searchQuery}`, {
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    });
    const movie = response.data;
    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.error(error);
  }
}
