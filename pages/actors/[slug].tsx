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
    <div className="flex flex-col items-center">
      <p className="font-medium leading-tight text-5xl mt-0 mb-2">{name}</p>
      <div className="flex w-6/12 sm:w-4/12 px-4 justify-center">
        <img
          className="shadow-lg rounded max-w-full border-none"
          src={`http://image.tmdb.org/t/p/w300${profile_path}`}
        />
      </div>
      <span className="p-4">{biography}</span>
      <p className="font-medium leading-tight text-3xl mt-0 mb-2">
        Top 20 Rated Work:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {cast.map((film) => {
          return (
            <div key={film.id}>
              <img
                alt={film.title}
                className="rounded-md"
                src={`http://image.tmdb.org/t/p/w300${film.poster_path}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  const getData = await Promise.all([getActorDetails(slug), getCredits(slug)]);
  let results = await Promise.all(getData.map((r) => r.json()));
  // let results = [bradPittData, moreData];
  results = results
    .map((result) => {
      if (result?.cast) {
        result.cast = result.cast.slice(0, 20);
      }
      return result;
    })
    .reduce(
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
