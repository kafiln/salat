import { load } from "cheerio";

const VALUES = [
  "day_name",
  "arabic_month",
  "month",
  "fajr",
  "chorouq",
  "dohr",
  "asr",
  "maghrib",
  "ishae",
];

const MONTHLY_URL = "https://habous.gov.ma/prieres/horaire_hijri_2.php?ville=";
const DAILY_URL = "https://www.habous.gov.ma/prieres/horaire-api.php?ville=";

const getDataByCity = async (
  city: number,
  url: string,
  parseFn: (data: any) => any,
) => {
  try {
    const response = await fetch(`${url}${city}`, { timeout: 10000 });
    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }
    const data = await response.text();
    return parseFn(data);
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    return null;
  }
};

export const getMonthlyPrayers = async (city: number) => {
  return getDataByCity(city, MONTHLY_URL, parseMonthlyPrayers);
};
export const getDailyPrayers = async (city: number) => {
  return getDataByCity(city, DAILY_URL, parseDailyPrayers);
};

const parseMonthlyPrayers = (data: any) => {
  return parseResponse(data, "#horaire > tbody > tr", (items, $) => {
    return items.map((item: any) => {
      const result: Record<string, string> = {};
      const children = $(item).children();
      VALUES.forEach((value: string, index) => {
        // skip month
        if (index === 2) return;
        result[value] = children.eq(index).html().trim();
      });
      return result;
    });
  });
};

const parseDailyPrayers = (data: any) => {
  return parseResponse(data, "table > tbody > tr > td", (items, $) => {
    const times = items
      .filter((_: any, i: number) => i % 2)
      .map((i: any) => $(i).text().trim());
    const result: Record<string, string> = {};
    [...VALUES].splice(3).forEach((key, index) => (result[key] = times[index]));
    return result;
  });
};

const parseResponse = (
  data: any,
  path: string,
  parsingFn: (a: any, b: any) => any,
) => {
  const $ = load(data);
  const items = $(path);
  return parsingFn(Array.from(items), $);
};
