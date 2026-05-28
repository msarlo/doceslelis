import type {
  BeholdFeedResponse,
  BeholdPost,
  InstagramPost,
} from "./types/instagram";

const REVALIDATE_SECONDS = 3600;

function normalizePost(post: BeholdPost): InstagramPost {
  const imageUrl =
    post.mediaType === "VIDEO" && post.thumbnailUrl
      ? post.thumbnailUrl
      : post.sizes?.large?.mediaUrl ?? post.mediaUrl;

  return {
    id: post.id,
    imageUrl,
    caption: post.prunedCaption || post.caption,
    permalink: post.permalink,
    timestamp: post.timestamp,
    mediaType: post.mediaType,
    likeCount: post.likeCount,
    commentCount: post.commentsCount,
  };
}

/**
 * Busca posts do Instagram via Behold.so (server-side only).
 * Retorna null se o feed ID não estiver configurado ou a API falhar,
 * sinalizando para o componente exibir o fallback estático.
 */
export async function fetchInstagramPosts(): Promise<InstagramPost[] | null> {
  const feedId = process.env.BEHOLD_FEED_ID;

  if (!feedId) {
    console.warn(
      "[Instagram] BEHOLD_FEED_ID não configurado. Usando fallback estático."
    );
    return null;
  }

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error(
        `[Instagram] Behold API retornou ${res.status}: ${res.statusText}`
      );
      return null;
    }

    const data: BeholdFeedResponse = await res.json();

    return data.posts
      .filter(
        (post) =>
          post.mediaType === "IMAGE" ||
          post.mediaType === "VIDEO" ||
          post.mediaType === "CAROUSEL_ALBUM"
      )
      .map(normalizePost);
  } catch (error) {
    console.error("[Instagram] Falha ao buscar posts:", error);
    return null;
  }
}
