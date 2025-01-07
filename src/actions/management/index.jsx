import { axiosApi } from "../../axiosApi";

export const doFetchAllManagementList = async (data) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/management/list?page=${data?.currentPage}&pageSize=${data?.pageSize}&search=${data?.search}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchAllManagementPendingList = async (data) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/management/pending-list?page=${data?.currentPage}&pageSize=${data?.pageSize}&search=${data?.search}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};
export const doFetchAllManagementRejectList = async (data) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/management/reject-list?page=${data?.currentPage}&pageSize=${data?.pageSize}&search=${data?.search}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchManagementCreate = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/management/create`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchManagementUpdate = async (data, id) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/management/update/${id}`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchManagementDetail = async (id) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/management/detail/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchManagementDelete = async (id) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/management/delete/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchManagementStatusUpdate = async (data) => {
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

export const doFetchManagementStatusServiceUpdate = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/management/status-service-update`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};


export const doFetchManagementProjectList = async (id) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/management/project/list/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};
