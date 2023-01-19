import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { useGetMoviesQuery } from "../../redux/Api/Api";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";
import { useState } from "react";

const Movies = () => {
  const [page] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategoryReducer
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

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
