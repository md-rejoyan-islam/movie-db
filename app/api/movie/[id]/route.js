import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.NEXT_PUBLIC_TMDB_API_URL;

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const response = await axios.get(`${url}/movie/${id}`, {
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
