import { getAllCities } from "data/cityService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = getAllCities();
  return res.json(data);
}
