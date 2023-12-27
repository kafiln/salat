import type { NextApiRequest, NextApiResponse } from 'next';
import { getDailyPrayers } from 'utils';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const data = await getDailyPrayers(Number(id));
    return res.json(data);
}