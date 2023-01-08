import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Movie Mania"
        subtitle="Are you looking for a movie or  Series"
      />
      <Navbar />

      {children}
    </div>
  );
};

export default MainLayout;
