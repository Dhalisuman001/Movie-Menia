import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Starred";
import { ThemeProvider } from "styled-components";
// import NotFound from "./pages/NotFound";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Starred" element={<Starred />} />
        <Route path="/show/:id" element={<Show />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
