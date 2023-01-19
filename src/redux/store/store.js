import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../Api/Api.js";
import genreOrCategoryReducer from "../slices/GenresSlices.js";

export const store = configureStore({
  reducer: {
    tmdbApi: tmdbApi.reducer,
    currentGenreOrCategoryReducer: genreOrCategoryReducer,
  },
  middleware: (gDM) => gDM().concat(tmdbApi.middleware),
});
