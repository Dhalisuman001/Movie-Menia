import { configureStore } from "@reduxjs/toolkit";
// import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/dist/query/defaultSerializeQueryArgs.js";
import { tmdbApi } from "../Api/Api.js";
import genreOrCategoryReducer from "../slices/GenresSlices.js";
import userAuth from "../slices/UserSlice";

export const store = configureStore({
  reducer: {
    tmdbApi: tmdbApi.reducer,
    currentGenreOrCategoryReducer: genreOrCategoryReducer,
    userAuth: userAuth,
  },
  middleware: (gDM) =>
    gDM({ serializableCheck: false }).concat(tmdbApi.middleware),
});
