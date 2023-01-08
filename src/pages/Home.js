import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { getApi } from "../misc/config";
import { useLastQuary } from "../misc/custom-hooks";
import ShowGrid from "../show/ShowGrid";
import { SearchButtonWrapper, SearchInput } from "./HomeStyled";

const Home = () => {
  const [input, setInput] = useLastQuary();
  const [result, setResult] = useState(null);

  const onSearch = () => {
    getApi(`/search/shows?q=${input}`).then((result) => {
      setResult(result);
    });
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  const renderResult = () => {
    if (result && result.length === 0) {
      return <div>No result found!</div>;
    }
    if (result && result.length > 0) {
      return <ShowGrid data={result} />;
    }
    return null;
  };

  return (
    <MainLayout>
      <SearchInput
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={onEnter}
        placeholder="Search for something"
      />

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResult()}
    </MainLayout>
  );
};

export default Home;
