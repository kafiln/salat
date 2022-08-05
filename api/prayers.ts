import { Prayer } from "@components/Prayer/PrayerList";
import axios from "axios";
import dayjs from "dayjs";

const values = [
  "day_name",
  "arabic_month",
  // "month",
  "fajr",
  "chorouq",
  "dohr",
  "asr",
  "maghrib",
  "ishae",
];

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

const mapResponseToMonthlyPrayers = (data: any): any => {
  const root = document.createElement("html");
  root.innerHTML = data;
  const items = root.querySelectorAll("#horaire > tbody > tr");
  return Array.from(items).map((item) => {
    const result: any = {};
    const children = Array.from(item.children);
    values.forEach((value: string, index) => {
      if (index === 2) return;
      result[value] = children[index].innerHTML.replace(/\s/g, "");
    });
    return result;
  });
};

const BASE_URL = "https://apisearch.hadithm6.com/api/prieres/ville/";
const MONTHLY_URL =
  "https://cors-anywhere-kafil.herokuapp.com/https://habous.gov.ma/prieres/horaire_hijri_2.php?ville=";

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

export const getMonthlyPrayers = async (city: number) => {
  const data = await fetch(`${MONTHLY_URL}${city}`).then((res) => res.text());
  const mappedData = mapResponseToMonthlyPrayers(data);
  console.log(mappedData);
  return mappedData;
};
