import axios from "axios";

const fetcher = axios.create({
  baseURL: process.env.api_web,
  headers: {
    "Content-Type": "application/json",
  },
});
fetcher.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

export default fetcher;
