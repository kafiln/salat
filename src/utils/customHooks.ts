import { useState, useEffect } from 'react';

export const useLocalStorage = (name: string, initialValue: any = null) => {
  const [value, setValue] = useState(
    parseInt(localStorage.getItem(name) || `${initialValue}`)
  );

  useEffect(() => {
    localStorage.setItem(name, `${value}`);
  }, [name, value]);

  return [value, setValue];
};
