export interface VideoData {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: "Movie" | "TV Series";
  rating: "PG" | "E" | "18+";
  isBookmarked: boolean;
  isTrending: boolean;
}
