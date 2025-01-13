import { useState, useEffect } from "react";
import axios from "axios";
import { ListOfProducts } from "../types";

const useProducts = (shopId: string) => {
  const [products, setProducts] = useState<ListOfProducts>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/shops/${shopId}/products`
        );
        setProducts(response.data);
      } catch (e) {
        setError(e);
        console.error("Error fetching products:", e);
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
