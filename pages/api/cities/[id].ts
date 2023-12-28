import { getCityById } from 'data/cityService';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const data = await getCityById(Number(id));
    if (data) return res.json(data);

    return res.status(404).send('Not found')
}