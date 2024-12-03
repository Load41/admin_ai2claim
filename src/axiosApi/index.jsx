import axios from "axios";
import { appConfig } from "../config";
import { toast } from "react-toastify";

const axiosApi = axios.create({
  baseURL: appConfig.API_URL,
});

const setAuthHeader = (token) => {
  axiosApi.defaults.headers.Authorization = token || `${token}`;
  // axiosApi.defaults.headers.common["ngrok-skip-browser-warning"] = `69420`;
};

axiosApi.defaults.headers = {
  Authorization: localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}:` : null,
  "ngrok-skip-browser-warning": `69420`,
};

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 404) {
      console.log("/404");
    } else if (error?.response?.status === 500) {
      // toast.error(error?.response?.data?.message);
      toast.error(error?.response?.data?.msg);
      console.log("/500");
    } else if (error?.response?.status === 401) {
      toast.error(error?.response?.data?.message);
      toast.error(error?.response?.data?.msg);
      localStorage?.removeItem("_token");
      // window.location.href = `/login`;
    } else {
      console.log("/other-errors.");
    }
    return Promise.reject(error);
  }
);

export { axiosApi, setAuthHeader };
