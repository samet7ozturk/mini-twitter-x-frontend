import axios, { AxiosInstance as AxiosInstanceType } from "axios";

export const createAxiosInstance = (): AxiosInstanceType => {
  const token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: "http://localhost:3001/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    : axios.create({
        baseURL: "http://localhost:3001/",
        headers: {},
      });
};

export let AxiosInstance: AxiosInstanceType;

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
