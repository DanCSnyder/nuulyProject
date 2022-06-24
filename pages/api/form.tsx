import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;

  const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.MDB_API}&language=en-US&query=${body}&include_adult=false`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  

  console.error("response?", await response.json());

  res.status(200).json({ data: `sick` });
};
