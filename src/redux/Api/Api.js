import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey =
  "734f9ebb8853a3ddec313e0f0c5b6338" || process.env.RECAT_APP_TMDB_KEY;

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
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get Movies by Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Genre
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get popular movies by default
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // Get Movie
    getMovie: build.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    // Get Recommendations
    getRecommendations: build.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),

    // Get Actor
    getActor: build.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by Actor
    getMoviesByActorId: build.query({
      query: ({ id, page }) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),

    // Get User Specific Lists
    getList: build.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
