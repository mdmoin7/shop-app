import ApiService from "./ApiService";

const login = (email: string, password: string) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    apiKey;
  const data = { email, password, returnSecureToken: true };
  return ApiService.post(url, data);
};

const register = (email: string, password: string) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + apiKey;
  const data = { email, password, returnSecureToken: true };
  return ApiService.post(url, data);
};

export default { login, register };
