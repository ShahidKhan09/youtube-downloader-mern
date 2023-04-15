import * as api from "../services/content.api";
let resp = "";
export const fun = async () => {
  resp = await api.getContent({ pageTitle: "home" });
  return resp;
};
