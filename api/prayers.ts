import { Prayer } from "@components/Prayer/PrayerList";
import dayjs from "dayjs";

const mapResponseToPrayers = (data: any): Prayer[] =>
  Object.keys(data).map((key) => {
    const [hours, minutes] = data[key].split(":");
    return {
      name: key,
      time: dayjs().hour(hours).minute(minutes).second(0).millisecond(0),
    };
  });

const MONTHLY_URL = "/api/monthly/";
const DAILY_URL = "/api/daily/";
const HIJRI = "/api/hijri";

export const getPrayers = async (city: number) => {
  const data = await fetch(`${DAILY_URL}${city}`).then((res) => res.json());
  return mapResponseToPrayers(data);
};
export const getHIJRI = async () => {
  const data = await fetch(`${HIJRI}`).then((res) => res.text());
  return data;
};

export const getMonthlyPrayers = async (city: number) => {
  return await fetch(`${MONTHLY_URL}${city}`).then((res) => res.json());
};
