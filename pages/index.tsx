import { AppProps } from "next/app";
import { useState } from "react";

const handleSubmit = async (event) => {
  event.preventDefault();

  const searchValue = event.target.search.value;

  console.error({ searchValue });

  const response = await fetch("/api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchValue),
  });

  const result = await response.json();
  console.error("result", result);
};

const HomePage = () => {
  return (
    <form onSubmit={handleSubmit}>
      <label>SEARCH ME!</label>
      <input type="text" id="search" name="search" required></input>
    </form>
  );
};

export default HomePage;
