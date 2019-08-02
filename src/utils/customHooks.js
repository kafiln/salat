import { useState, useEffect } from 'react';

export const useLocalStorage = (name, initialValue = null) => {
  const [value, setValue] = useState(
    +localStorage.getItem(name) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(name, value);
  }, [name, value]);

  return [value, setValue];
};
