import { useQuery } from "react-query";
import axiosInstance from "../config/axiosInstance";

export const useFetchData = <T>(url: string, select?: (data: T) => T) => {
  return useQuery<T, Error>(
    ["data", url],
    async () => {
      const response = await axiosInstance.get(url);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
      select
    }
  );
};
