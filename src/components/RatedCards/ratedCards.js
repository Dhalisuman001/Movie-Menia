import React from "react";
import { Typography, Box } from "@mui/material";
import Movie from "../Movie/Movie";
import useStyles from "./styles";

const RatedCards = ({ title, movies }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {movies?.map((movie, i) => (
          <Movie key={movie?.show?.id} movie={movie?.show} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
