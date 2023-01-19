import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import { MovieList, Pagination, FeaturedMovie } from "../index";

import { useGetMoviesQuery } from "../../redux/Api/Api";
import MovieList from "../MovieList/MovieList";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies found with that name.
          <br />
          Please searh for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return "An error has occured.";

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
