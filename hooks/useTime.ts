import dayjs from "dayjs";
import { useState } from "react";

const useTime = () => {
  const initTime = () => dayjs();
  const [time, setTime] = useState(initTime());
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(initTime());
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return time;
};

export default useTime;
