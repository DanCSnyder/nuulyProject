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
  return <div>{data}</div>;
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
