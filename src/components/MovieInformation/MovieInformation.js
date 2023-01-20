import React, { useState } from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  Rating,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Favorite,
  FavoriteBorder,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import {
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from "../../redux/Api/Api";
import { selectGenreOrCategory } from "../../redux/slices/GenresSlices";
import genreIcons from "../../assets/genres";
import MovieList from "../MovieList/MovieList";
import { useShows } from "../../redux/misc/config";

const MovieInfo = () => {
  const [WatchList, setWatchList] = useShows();
  const { id } = useParams();
  const style = useStyles();
  const dispatch = useDispatch();

  const { data, error, isFetching } = useGetMovieQuery(id);
  const { data: recommendations } = useGetRecommendationsQuery({
    list: "/recommendations",
    movie_id: id,
  });
  const [open, setOpen] = useState(false);
  const isMovieWatchlisted = WatchList.includes(id);

  const addToWatchList = () => {
    if (isMovieWatchlisted) {
      setWatchList({ type: "REMOVE", showId: id });
    } else {
      console.log("add to click");
      setWatchList({ type: "ADD", showId: id });
    }
  };

  if (isFetching) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link to="/">Something went wrong - Go back.</Link>
      </Box>
    );
  }

  return (
    <Grid container className={style.containerSpaceAround}>
      <Grid item sm={12} lg={4} align="center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          className={style.poster}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data.release_date.split("-")[0]}){" "}
          <Button endIcon={<ArrowBack />} sx={{ borderColor: "primary.main" }}>
            <Typography
              variant="subtitle2"
              component={Link}
              to="/"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              Back
            </Typography>
          </Button>
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={style.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />{" "}
            <Typography
              gutterBottom
              variant="subtitle1"
              style={{ marginLeft: "10px" }}
            >
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography gutterBottom variant="h6" align="center">
            {data?.runtime}min
          </Typography>
        </Grid>
        <Grid item className={style.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              className={style.links}
              key={genre.name}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={style.genreImage}
                height={30}
                alt="genres"
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: "2rem" }}>
          {data?.overview}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>
        <Grid item container spacing={2}>
          {data &&
            data?.credits?.cast
              ?.map(
                (character, i) =>
                  character.profile_path && (
                    <Grid
                      key={i}
                      item
                      xs={4}
                      md={2}
                      component={Link}
                      to={`/actors/${character.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        className={style.castImage}
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt={character.name}
                      />
                      <Typography color="textPrimary" align="center">
                        {character?.name}
                      </Typography>
                      <Typography color="textSecondary" align="center">
                        {character.character.split("/")[0]}
                      </Typography>
                    </Grid>
                  )
              )
              .slice(0, 6)}
        </Grid>
        <Grid item container style={{ marginTop: "2rem" }}>
          <div className={style.buttonContainer}>
            <Grid item xs={12} sm={6} className={style.buttonContainer}>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button
                  onClick={() => setOpen(true)}
                  href="#"
                  endIcon={<Theaters />}
                >
                  Trailer
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={6} className={style.buttonContainer}>
              <Button
                color="primary"
                variant="elevated"
                endIcon={isMovieWatchlisted ? <Favorite /> : <FavoriteBorder />}
                onClick={addToWatchList}
              >
                {!isMovieWatchlisted ? "Remove" : "Add"}
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList movies={recommendations} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found.</Box>
        )}
      </Box>
      <Modal
        closeAfterTransition
        className={style.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        {data?.videos?.results?.length > 0 && (
          <iframe
            autoPlay
            className={style.video}
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </Modal>
    </Grid>
  );
};

export default MovieInfo;
