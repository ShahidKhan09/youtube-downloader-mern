import { VideoDetails, ViewVideo } from "../@types/video";
import { axiosInstance } from "../utils/axios";

export const viewVideo = async (data: ViewVideo) => {
  const response = await axiosInstance.post("/view", data);
  return response;
};
export const downloadVideo = async (data: VideoDetails) => {
  const response = await axiosInstance.get(
    `/download?link=${data.link}&format=${data.format}&quality=${data.quality}`
  );
  return response;
};
