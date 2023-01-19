import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey =
  "734f9ebb8853a3ddec313e0f0c5b6338" || process.env.RECAT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  reducerPath: "tmdbApi",
  endpoints: (build) => ({
    //getGenres
    getGenres: build.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //getMovies
    getMovies: build.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
