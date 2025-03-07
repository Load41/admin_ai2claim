import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { doFetchNotificationList } from "../../actions";

// doFetchNotificationList
export const useAllUserNotificationListHook = () => {
  const navigate = useNavigate();
  const [notificationList, setNotificationList] = useState({});

  const doGetNotificationList = async () => {
    const notificationResponse = await doFetchNotificationList();
    if (notificationResponse?.status == 200) {
      setNotificationList(notificationResponse?.data);
    }
  };

  useEffect(() => {
    doGetNotificationList();
  }, []);

  return {
    notificationList,
  };

};
