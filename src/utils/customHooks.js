import { useState, useEffect } from 'react';

export const useLocalStorage = (name, initialValue = null) => {
  const [value, setValue] = useState(
    +localStorage.getItem(name) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(name, value);
  }, [value]);

  return [value, setValue];
};
