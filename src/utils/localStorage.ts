import axios from "axios";

//TODO: Add JSDoc
export const getFromLocalStorageOrApi = async (name: string, url: string) => {
  if (!localStorage.getItem(name)) {
    const value = (await axios.get(url)).data;
    localStorage.setItem(name, JSON.stringify(value));
    return value;
  }

  return JSON.parse(localStorage.getItem(name) || "");
};

/**
 *Delete all items in the localStorage that are not specified as arguments
 *
 * @param {*} args  keys that should not be deleted from localStorage
 */

export const cleanLocalStorage = (...args: any) => {
  Object.keys({ ...localStorage })
    .filter(e => !args.includes(e))
    .forEach(e => localStorage.removeItem(e));
};
