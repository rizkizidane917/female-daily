import { useQuery } from "@tanstack/react-query";
import fetcher from "../fetcher";
export const API_SERVER = process.env.api_web;

export const useListData = () => {
  const doFetchList = async () => {
    const res = await fetcher.get(`${API_SERVER}hqms/FDN-WP/0.1/wp`);
    return res.data;
  };

  const getListAllData = () =>
    useQuery([`${API_SERVER}`], () => doFetchList(), {
      keepPreviousData: true,
    });

  return {
    getListAllData,
  };
};
