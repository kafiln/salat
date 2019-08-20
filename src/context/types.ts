export const CHANGE_CITY: string = 'CHANGE_CITY';
export const LOAD_CITIES: string = 'LOAD_CITIES';
export const LOAD_PRAYERS: string = 'LOAD_PRAYERS';
export const REFRESH_TIME: string = 'REFRESH_TIME';
export const CHANGE_LANGUAGE: string = 'CHANGE_LANGUAGE';

export interface IPrayer {
  asr: string;
  chorouq: string;
  city: string;
  dhuhr: string;
  fajr: string;
  ishae: string;
  maghrib: string;
  id: number;
  day: Date;
}
export interface ICity {
  name: string;
  id: number;
}
export interface IState {
  prayers: IPrayer[] | null;
  cities: ICity[] | null;
  id: number;
  lang: string;
  languages: string[];
  time: any;
}

export interface IAction {
  type: string;
  payload: any;
}
