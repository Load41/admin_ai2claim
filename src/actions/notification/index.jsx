// notification/list
import { axiosApi } from "../../axiosApi";

export const doFetchNotificationList = async () => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/notification/list`,
    });
    return response?.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};
