import { axiosApi } from "../../axiosApi";

export const doFetchLogin = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/auth/login`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};
