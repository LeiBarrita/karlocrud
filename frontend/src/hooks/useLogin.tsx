import { useState } from "react";
import axios from "axios";
import { User } from "../types";

type LoginResponse = {
  token: string; // Assuming the API returns a token
  user: User;
};

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<LoginResponse | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        { email, password }
      );
      setData(response.data);
      return response.data;
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
};

export default useLogin;
