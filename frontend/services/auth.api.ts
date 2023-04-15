
import { UserData } from "../@types/auth";
import { axiosInstance } from "../utils/axios";
export const Login = async (data: UserData) => {
  const response = await axiosInstance.put("/login", data);
  return response;
};
