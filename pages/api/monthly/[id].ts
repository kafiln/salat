import type { NextApiRequest, NextApiResponse } from 'next';
import { getMonthlyPrayers } from 'utils';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const data = await getMonthlyPrayers(Number(id));
    return res.json({
        data,
    });
}