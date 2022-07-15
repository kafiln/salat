import { Prayer } from "@components/Prayer/PrayerList";
import axios from "axios";
import dayjs from "dayjs";

const isDev = () => process.env.NODE_ENV === "development";

const mapResponseToPrayers = (data: any): Prayer[] => {
  return Object.keys(data[0])
    .map((key) => {
      return {
        name: key,
        time: data[0][key],
      };
    })
    .splice(0, 6);
};

const BASE_URL = "https://maroc-salat.herokuapp.com/";

export const getHijriDate = async () => {
  return await axios
    .get(`https://apisearch.hadithm6.com/api/hijridate`)
    .then((res) => res.data);
};

export const getPrayers = async (city: number) => {
  const today = dayjs();
  const month = today.month() + 1;
  const day = today.date();

  const data = await fetch(
    `${BASE_URL}prayer?city=${city}&month=${month}&day=${day}`
  ).then((res) => res.json());
  return mapResponseToPrayers(data);
};

export const getAllCities = async () => {
  const data = await fetch(`${BASE_URL}city`).then((res) => res.json());
  return data;
};
