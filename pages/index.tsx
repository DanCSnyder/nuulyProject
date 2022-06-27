import { AppProps } from "next/app";
import { useState } from "react";
import { ActorType, MovieType } from "types";
import Link from "next/link";
import SearchBar from "./SearchBar";

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
    setResults(
      results.data.results.filter(
        (result) => result.name && result.profile_path
      )
    );
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="my-4">Search for an actor:</div>
        <div className="mb-3 xl:w-96">
          <SearchBar onSubmit={handleSubmit} />
        </div>
      </div>

      {results != null ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2">
          {results.map((result) => {
            return (
              <div key={result.id} className="flex flex-col items-center">
                {result.name}
                <Link href={`/actors/${result.id}`}>
                  <img
                    className="shadow-lg rounded max-w-full border-none"
                    src={`http://image.tmdb.org/t/p/w300${result.profile_path}`}
                  ></img>
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default HomePage;
