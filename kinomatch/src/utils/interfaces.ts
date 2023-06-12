//===========PROFILE PAGE 

export interface WatchedListEntry {
  id: number;
  user_id: string;
  film_id: string;
  createdAt: string;
  updatedAt: string;
}

export type WatchedListArray = WatchedListEntry[];

//---

export interface WatchedMoviesListEntry {
  movie_id: string;
  name: string;
}

export type WatchedMoviesObject = Record<number, WatchedMoviesListEntry | undefined>;

//---

export interface ToWatchListEntry {
  id: number;
  user_id: string;
  film_id: string;
  createdAt: string;
  updatedAt: string;
}

export type ToWatchListArray = ToWatchListEntry[];

//---

export interface toWatchMoviesEntry {
  name: string;
  movie_id?: string;
}

export type toWatchMoviesObject = Record<number , toWatchMoviesEntry | undefined>;

//---

export interface BookmarkedListEntry {
  id: number;
  user_id: string;
  film_id: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export type BookmarkedListObject = {
  [key: number]: BookmarkedListEntry | undefined;
};


//=========== AUTHCONTEXT


export interface UserData {
  email: string;
  id: string;
  bookmarked: string;
}

//=========== HOME & FILTERSROLL


export interface Genre {
  id: number;
  name: string;
}

export interface Provider {
  provider_id: number;
  provider_name: string;
}