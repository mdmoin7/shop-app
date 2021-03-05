import Axios from "axios";

const login = (email: string, password: string) => {
  const endPoint = "";
  const data = { email, password };
  return Axios.post(endPoint, data);
};

const UserService = { login };
export default UserService;
