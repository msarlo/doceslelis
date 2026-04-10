"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import type { InstagramPost } from "@/app/lib/types/instagram";

const ASPECT_CLASSES = [
  "aspect-square",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
];

interface Props {
  posts: InstagramPost[];
}

export default function InstagramGalleryClient({ posts }: Props) {
  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 lg:gap-5">
      {posts.map((post, i) => (
        <ScrollReveal key={post.id} delay={i * 80}>
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="img-zoom group relative mb-4 block overflow-hidden rounded-2xl lg:mb-5 lg:rounded-3xl"
          >
            <div
              className={`relative w-full ${ASPECT_CLASSES[i % ASPECT_CLASSES.length]}`}
            >
              <Image
                src={post.imageUrl}
                alt={
                  post.caption
                    ? post.caption.slice(0, 120)
                    : "Doce artesanal Doces da Lelis"
                }
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* Hover overlay estilo Instagram */}
            <div className="absolute inset-0 flex items-center justify-center bg-choco-600/0 transition-all duration-500 group-hover:bg-choco-600/40">
              <div className="flex items-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  {post.likeCount ?? ""}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  {post.commentCount ?? ""}
                </span>
              </div>
            </div>
          </a>
        </ScrollReveal>
      ))}
    </div>
  );
}
