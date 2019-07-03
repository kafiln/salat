import { useState, useEffect } from 'react';
import axios from 'axios';
export const useLocalStorageOrApi = async (name, url) => {
  const tmp = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : (await axios.get(url)).data;

  const [value, setvalue] = useState(tmp);
  localStorage.setItem(name, JSON.stringify(value));

  return [value, setvalue];
};

export const useLocalStorage = (name, initialValue = null) => {
  const [value, setValue] = useState(
    +localStorage.getItem(name) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(name, value);
  }, [value]);

  return [value, setValue];
};

/**
 *Delete all items in the localStorage that are not specified as arguments
 *
 * @param {*} args  keys that should not be deleted from localStorage
 */

export const cleanLocalStorage = (...args) => {
  Object.keys({ ...localStorage })
    .filter(e => !args.includes(e))
    .forEach(e => localStorage.removeItem(e));
};
