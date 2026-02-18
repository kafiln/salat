const HIJRI_API = "https://apisearch.hadithm6.ma/api/hijridate";
const HIJRI_ERROR = "Hijri date is not available at the moment";

export const getHijriDate = async (): Promise<string> => {
  try {
    const response = await fetch(HIJRI_API);

    if (!response.ok) {
      throw new Error("Failed to fetch Hijri date");
    }

    const text = await response.text();
    console.log("text in api", text);
    return text;
  } catch (err) {
    console.error(HIJRI_ERROR, err);
    throw new Error(HIJRI_ERROR);
  }
};

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = await getHijriDate();

    // ✅ You MUST send the response
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: HIJRI_ERROR });
  }
}
