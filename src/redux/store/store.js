import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../Api/TMDB.js";

export const store = configureStore({
  reducer: {
    tmdbApi: tmdbApi.reducer,
  },
  middleware: (gDM) => gDM().concat(tmdbApi.middleware),
});
