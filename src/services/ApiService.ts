import Axios from "axios";

const get = <T>(url: string) => {
  return Axios.get<T>(url);
};
const post = <T>(url: string, data: any) => {
  return Axios.post<T>(url, data);
};
const put = <T>(url: string, data: any) => {
  return Axios.put<T>(url, data);
};
const del = <T>(url: string) => {
  return Axios.delete<T>(url);
};

export default { get, post, put, del };
