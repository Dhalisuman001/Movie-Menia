import React from "react";
// import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

const theme = {
  mainColors: {
    blue: "#03DAC6",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
