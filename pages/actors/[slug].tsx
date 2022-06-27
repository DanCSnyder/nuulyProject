import { useRouter } from "next/router";
import bradPittData from "bradPittData";
import moreData from "moreData";

const getCredits = (id: string) => {
  const url = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.MDB_API}&language=en-US`;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getActorDetails = (id: string) => {
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.MDB_API}&language=en-US`;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const Actors = ({ data }) => {
  const { biography, cast, name, profile_path } = JSON.parse(data);
  return (
    <>
      <div>
        <h1>{name}</h1>
        <img src={`http://image.tmdb.org/t/p/w300${profile_path}`} />
        <span>{biography}</span>
        <div>
          <h1>Known work:</h1>
          {cast.map((film) => {
            return (
              <img src={`http://image.tmdb.org/t/p/w300${film.poster_path}`} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  // const getData = await Promise.all([getActorDetails(slug), getCredits(slug)]);
  // let results = await Promise.all(getData.map((r) => r.json()));
  let results = [bradPittData, moreData];
  results = results.reduce(
    (accum, data) => ({
      ...data,
      ...accum,
    }),
    {}
  );
  return {
    props: {
      data: JSON.stringify(results),
    },
  };
}

export default Actors;
