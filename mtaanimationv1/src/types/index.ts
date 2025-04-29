export interface Episode {
  id: string;
  title: string;
  synopsis: string;
  releaseDate: string;
  thumbnail: string;
  videoUrl: string;
  featured?: boolean;
}

export interface Character {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  content: string;
  date: string;
  author: string;
  image: string;
}