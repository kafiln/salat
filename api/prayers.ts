import { Prayer } from "@components/Prayer/PrayerList";
import axios from "axios";
import dayjs from "dayjs";

const mapResponseToPrayers = (data: any): Prayer[] =>
  Object.keys(data[0]).map((key) => {
    const [hours, minutes] = data[0][key].split(":");
    return {
      name: key,
      time: dayjs()
        .hour(hours)
        .minute(minutes)
        .second(0)
        .millisecond(0)
        .toString(),
    };
  });

const BASE_URL = "https://apisearch.hadithm6.com/api/prieres/ville/";

export const getHijriDate = async () => {
  return await axios
    .get(`https://apisearch.hadithm6.com/api/hijridate`)
    .then((res) => res.data);
};

export const getPrayers = async (city: number) => {
  const today = dayjs();
  const month = today.month() + 1;
  const day = today.date();

  const data = await fetch(`${BASE_URL}${city}/${month}/${day}`).then((res) =>
    res.json()
  );
  return mapResponseToPrayers(data);
};
