import Cookies from "js-cookie";
import { encryptJWT, decryptJWT } from "./jwt";

export const setCookie = async (key, data) => {
  const token = await encryptJWT(data);
  Cookies.set(key, token);
};

export const getCookie = async (key) => {
  const token = Cookies.get(key);
  if (!token) return null;
  return await decryptJWT(token);
};

export const removeCookie = (key) => Cookies.remove(key);
