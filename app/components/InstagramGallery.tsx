import ScrollReveal from "./ScrollReveal";
import { fetchInstagramPosts } from "@/app/lib/instagram";
import InstagramGalleryClient from "./InstagramGalleryClient";

/* ---------- Fallback estático (gradientes) ---------- */

const fallbackItems = [
  { gradient: "linear-gradient(135deg, #F5E6D3, #FDDDD6)", aspect: "aspect-square" },
  { gradient: "linear-gradient(135deg, #5C3D2E, #8B6F47)", aspect: "aspect-[3/4]" },
  { gradient: "linear-gradient(135deg, #E8968A, #F5B8AC)", aspect: "aspect-square" },
  { gradient: "linear-gradient(135deg, #3E2723, #6B4F37)", aspect: "aspect-[4/3]" },
  { gradient: "linear-gradient(135deg, #FDDDD6, #E8B4B8)", aspect: "aspect-square" },
  { gradient: "linear-gradient(135deg, #8B6F47, #B8986E)", aspect: "aspect-[3/4]" },
  { gradient: "linear-gradient(135deg, #D4716A, #E8968A)", aspect: "aspect-square" },
  { gradient: "linear-gradient(135deg, #F5B8AC, #FFF0ED)", aspect: "aspect-[4/5]" },
];

function FallbackGallery() {
  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 lg:gap-5">
      {fallbackItems.map((item, i) => (
        <ScrollReveal key={i} delay={i * 80}>
          <div className="img-zoom group relative mb-4 cursor-pointer overflow-hidden rounded-2xl lg:mb-5 lg:rounded-3xl">
            <div
              className={`w-full ${item.aspect}`}
              style={{ background: item.gradient }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-choco-600/0 transition-all duration-500 group-hover:bg-choco-600/40">
              <div className="flex items-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

/* ---------- Componente principal (async server component) ---------- */

export default async function InstagramGallery() {
  const posts = await fetchInstagramPosts();

  return (
    <section id="galeria" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-rosa-50 blur-3xl" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header da seção */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block font-body text-xs font-medium uppercase tracking-[0.3em] text-rosa-400">
              @doces_da_lelis
            </span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-choco-600 sm:text-4xl lg:text-5xl">
              Nosso <span className="italic text-rosa-500">feed</span> de
              delícias
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-base text-choco-300">
              Cada foto é uma tentação. Siga-nos no Instagram para mais.
            </p>
          </div>
        </ScrollReveal>

        {/* Galeria real ou fallback */}
        {posts && posts.length > 0 ? (
          <InstagramGalleryClient posts={posts} />
        ) : (
          <FallbackGallery />
        )}

        {/* CTA Instagram */}
        <ScrollReveal>
          <div className="mt-14 text-center">
            <a
              href="https://www.instagram.com/doces_da_lelis/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-choco-100 bg-white px-7 py-3.5 font-body text-sm font-medium text-choco-500 transition-all duration-300 hover:border-rosa-300 hover:bg-rosa-50 hover:shadow-lg hover:shadow-rosa-200/30"
            >
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Siga no Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
