import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import { Actors, MovieInfo, Movies, Navbar, Profile } from "./components/";

import PrivateRoute from "./components/Private/PrivateRoute";
import useStyles from "./style";
const App = () => {
  const style = useStyles();
  return (
    <div className={style.root}>
      <CssBaseline />
      <Navbar />
      <main className={style.content}>
        <div className={style.toolkit}>
          <Routes>
            <Route exact path="/" element={<Movies />} />

            <Route exact path="/approved" element={<Movies />} />
            <Route exact path="/actors/:id" element={<Actors />} />
            <Route
              exact
              path="/profile/:id"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <PrivateRoute>
                  <MovieInfo />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
