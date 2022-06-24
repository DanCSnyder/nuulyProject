import { AppProps } from "next/app";
import test from "node:test";
import { useState } from "react";
import { ActorType, MovieType } from "types";

const HomePage = () => {
  const [results, setResults] = useState<Array<ActorType> | null>(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const searchValue = event.target.search.value;

    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchValue),
    });

    const results = await response.json();
    setResults(results.data.results.filter((result) => result.name));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>SEARCH ME!</label>
        <input type="text" id="search" name="search" required></input>
      </form>
      {results != null
        ? results.map((result) => {
            return <div>{result.name}</div>;
          })
        : null}
    </>
  );
};

export default HomePage;
