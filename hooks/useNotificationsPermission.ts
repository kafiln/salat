import { useEffect } from "react";

const useNotificationsPermission = () => {
  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);
};

export default useNotificationsPermission;
