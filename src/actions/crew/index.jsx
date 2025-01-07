import { axiosApi } from "../../axiosApi";

export const doFetchAllCrewList = async (data) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/crew/list?page=${data?.currentPage}&pageSize=${data?.pageSize}&search=${data?.search}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchAllCrewPendingList = async (data) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/crew/pending-list?page=${data?.currentPage}&pageSize=${data?.pageSize}&search=${data?.search}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};
export const doFetchAllCrewRejectList = async (data) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/crew/reject-list?page=${data?.currentPage}&pageSize=${data?.pageSize}&search=${data?.search}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchCrewCreate = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/crew/create`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchCrewUpdate = async (data, id) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/crew/update/${id}`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchCrewDetail = async (id) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/crew/detail/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchCrewDelete = async (id) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/crew/delete/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchCrewStatusUpdate = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/crew/status-update`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};
export const doFetchCrewStatusServiceUpdate = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: `admin/crew/status-service-update`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

export const doFetchCrewProjectList = async (id) => {
  try {
    const response = await axiosApi({
      method: "get",
      url: `admin/crew/project/list/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

 