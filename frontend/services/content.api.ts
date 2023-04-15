import { GetContent } from "../@types/content";
import { axiosInstance, protectedInstance } from "../utils/axios";
export const getContent = async (data: GetContent) => {
  const resp = await axiosInstance.get(`content?&pageTitle=${data.pageTitle}`);
  return resp.data;
};

export const updateContent = async (data: any) => {
  const resp = await protectedInstance.put("/update-content", data);
  return resp;
};
