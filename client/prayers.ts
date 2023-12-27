import axios from "axios";
import dayjs from "dayjs";

const MONTHLY_URL = "/api/monthly/";
const DAILY_URL = "/api/daily/";

export const getHijriDate = async () => {
  return await axios
    .get(`https://apisearch.hadithm6.com/api/hijridate`)
    .then((res) => res.data).catch(err => console.error("Hijri date is not available at the moment", err))
};

export const getPrayers = async (city: number) => {

  const data = await fetch(`${DAILY_URL}${city}`).then((res) =>
    res.json()
  );

  return data.map((item: any) => ({...item,time:dayjs(item.time)}))
};

export const getMonthlyPrayers = async (city: number) => {
  const { data } = await fetch(`${MONTHLY_URL}${city}`).then((res) =>
    res.json()
  );
  return data;
};
