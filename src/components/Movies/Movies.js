import React from "react";
// import {
//   Box,
//   CircularProgress,
//   useMediaQuery,
//   Typography,
// } from "@mui/material";
// import { useSelector } from "react-redux";
// import { MovieList, Pagination, FeaturedMovie } from "../index";

import { useGetMoviesQuery } from "../../redux/Api/TMDB";

const Movies = () => {
  const { data } = useGetMoviesQuery();
  console.log(data);

  return <div>Movies</div>;
};

export default Movies;
