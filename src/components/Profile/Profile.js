import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { useShows } from "../../redux/misc/config";
import { useState } from "react";
import { useEffect } from "react";
import { getWatchList } from "../../redux/misc/getWatchList";
import Loading from "./Loading";
import RatedCards from "../RatedCards/ratedCards";

const Profile = () => {
  const { user } = useSelector((state) => state.userAuth);
  const style = useStyles();
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };
  const [starred] = useShows();
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => getWatchList(showId));

      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  const renderComponent = () => {
    if (!shows) return <Typography variant="h5">WatchList is empty</Typography>;
    else
      return (
        <Box>
          <RatedCards title="Watchlist" movies={shows} />
        </Box>
      );
  };

  return (
    <Box className={style.container}>
      <Avatar
        alt="Remy Sharp"
        src={user?.photoURL}
        sx={{ width: 150, height: 150 }}
      />
      <Typography fontSize={25} fontWeight="bolder">
        {user?.displayName}
      </Typography>
      <Typography fontSize={10} fontWeight="bold">
        Mail: {user?.email}
      </Typography>
      <span style={{ marginTop: "20px" }}>
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      </span>
      {error ? (
        <Typography variant="h5">Something Worng happen</Typography>
      ) : isLoading ? (
        <Loading />
      ) : (
        renderComponent()
      )}
    </Box>
  );
};

export default Profile;
