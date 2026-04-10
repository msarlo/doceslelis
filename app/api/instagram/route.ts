import { NextResponse } from "next/server";
import { fetchInstagramPosts } from "@/app/lib/instagram";

export const revalidate = 3600;

export async function GET() {
  const posts = await fetchInstagramPosts();

  if (!posts) {
    return NextResponse.json(
      { error: "Instagram feed indisponível" },
      { status: 503 }
    );
  }

  return NextResponse.json({ posts });
}
