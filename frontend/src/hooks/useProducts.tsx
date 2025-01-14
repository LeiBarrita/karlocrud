import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { ErrorMessage, ListOfProducts } from "../types";

const useProducts = (shopId: string) => {
  const [products, setProducts] = useState<ListOfProducts>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/shops/${shopId}/products`
        );
        setProducts(response.data);
      } catch (e) {
        const error = e as AxiosError<ErrorMessage>;
        console.log(error);
        setError(error.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    if (shopId) {
      fetchProducts();
    }
  }, [shopId]);

  return { products, loading, error };
};

export default useProducts;
