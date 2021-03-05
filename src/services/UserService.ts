import Axios from "axios";

const login = (email: string, password: string) => {
  const apiKey = "AIzaSyDqxqa-4XEB-J-cDrzR-ZZdxQ7E5YPuROw";
  const endPoint =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    apiKey;
  const data = { email, password, returnSecureToken: true };
  return Axios.post(endPoint, data);
};

const UserService = { login };
export default UserService;
