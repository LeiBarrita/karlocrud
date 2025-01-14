import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { ErrorMessage, ListOfShops } from "../types";

const useShops = () => {
  const [shops, setShops] = useState<ListOfShops>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchShops = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/shops`
        );
        setShops(response.data);
      } catch (e) {
        const error = e as AxiosError<ErrorMessage>;
        console.log(error);
        setError(error.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  return { shops, loading, error };
};

export default useShops;
