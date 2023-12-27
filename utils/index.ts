import { JSDOM } from "jsdom";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

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
const DAILY_URL = "https://www.habous.gov.ma/prieres/horaire_hijri_fr.php?ville=";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


export const getMonthlyPrayers = async (city: number) => {
    const data = await fetch(`${MONTHLY_URL}${city}`).then((res: { text: () => any; }) => res.text()).catch(e => console.log(e))
    return mapResponseToMonthlyPrayers(data);
};
export const getDailyPrayers = async (city: number) => {
    const data = await fetch(`${DAILY_URL}${city}`).then((res: { text: () => any; }) => res.text()).catch(e => console.log(e))
    return mapResponseToDailyPrayers(data);
};

const mapResponseToMonthlyPrayers = (data: any): any => {

    const dom = new JSDOM(data);
    const items = dom.window.document.querySelectorAll("#horaire > tbody > tr");
    return Array.from(items).map((item) => {
        const result: any = {};
        // @ts-ignore
        const children = Array.from(item.children);
        VALUES.forEach((value: string, index) => {
            // skip month
            if (index === 2) return;
            // @ts-ignore
            result[value] = children[index]!.innerHTML;
        });
        return result;
    });
};

const mapResponseToDailyPrayers = (data: any): any => {

    const dom = new JSDOM(data);
    const items = dom.window.document.querySelectorAll('#horaire > tbody > tr.cournt > td')
    const times = Array.from(items).slice(3).map(i => i.innerHTML.replace(/\s/g, ""))
    const result: Record<string, string> = {};
    [...VALUES].splice(3).forEach((key, index) => result[key] = times[index])
    return result;
};