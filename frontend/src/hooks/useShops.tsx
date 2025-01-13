import { useState, useEffect } from "react";
import axios from "axios";
import { ListOfShops } from "../types";

const useShops = () => {
  const [shops, setShops] = useState<ListOfShops>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/shops`
        );
        setShops(response.data);
      } catch (e) {
        setError(e);
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  return { shops, loading, error };
};

export default useShops;
