import { AppProps } from "next/app";
import { useState } from "react";
import { ActorType, MovieType } from "types";
import Link from "next/link";

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
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <form className="flex" onSubmit={handleSubmit}>
              <input
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                type="text"
                id="search"
                name="search"
                required
              />
              <button
                className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="submit"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {results != null ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2">
          {results.map((result) => {
            return (
              <div className="flex flex-col items-center">
                {result.name}
                <Link href={`/actors/${result.id}`}>
                  <img className="rounded-md"
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
