/* ---- Tipos da resposta do Behold.so JSON Feed ---- */

export interface BeholdImageSize {
  mediaUrl: string;
  width: number;
  height: number;
}

export interface BeholdPost {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  caption: string;
  prunedCaption: string;
  likeCount: number;
  commentsCount: number;
  sizes: {
    small: BeholdImageSize;
    medium: BeholdImageSize;
    large: BeholdImageSize;
    full: BeholdImageSize;
  };
}

export interface BeholdFeedResponse {
  username: string;
  biography: string;
  profilePictureUrl: string;
  followersCount: number;
  posts: BeholdPost[];
}

/* ---- Post normalizado para os componentes da galeria ---- */

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  permalink: string;
  timestamp: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  likeCount?: number;
  commentCount?: number;
}
