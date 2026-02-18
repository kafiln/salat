import type { NextApiRequest, NextApiResponse } from "next";
import { getMonthlyPrayers } from "utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Invalid city ID" });
    }

    const cityId = Number(id);
    if (isNaN(cityId)) {
      return res.status(400).json({ error: "City ID must be a number" });
    }

    const data = await getMonthlyPrayers(cityId);

    if (!data) {
      return res.status(500).json({ error: "Failed to fetch prayer times" });
    }

    return res.json(data);
  } catch (error) {
    console.error("Monthly prayers API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
