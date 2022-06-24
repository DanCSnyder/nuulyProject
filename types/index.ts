export type ActorType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for: MovieType[];
  known_for_department: string;
  media_type: string;
  name: string;
  popularity: number;
  profile_path: string;
};

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
