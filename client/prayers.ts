import dayjs from "dayjs";

const MONTHLY_URL = "/api/monthly/";
const DAILY_URL = "/api/daily/";


export const getPrayers = async (city: number) => {
  const data = await fetch(`${DAILY_URL}${city}`).then((res) =>
    res.json()
  );

  return data.map((item: any) => ({ ...item, time: dayjs(item.time) }))
};

export const getMonthlyPrayers = async (city: number) => {
  return await fetch(`${MONTHLY_URL}${city}`).then((res) =>
    res.json()
  );
};
