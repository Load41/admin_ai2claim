import { axiosApi } from "../../axiosApi";

export const doFetchAllUserList = async (data) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/user/list?page=${data?.currentPage}&pageSize=${data?.pageSize}&search=${data?.search}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchAllUserPendingList = async (data) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/user/pending-list?page=${data?.currentPage}&pageSize=${data?.pageSize}&search=${data?.search}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchUserCreate = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/user/create`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchUserUpdate = async (data, id) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/user/update/${id}`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchUserDetail = async (id) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/user/detail/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchUserDelete = async (id) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/user/delete/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchClientStatusUpdate = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/management/status-update`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};
