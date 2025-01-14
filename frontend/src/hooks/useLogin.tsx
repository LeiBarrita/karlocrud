import { useState } from "react";
import axios, { AxiosError } from "axios";
import { ErrorMessage, User } from "../types";

type LoginResponse = {
  token: string;
  user: User;
};

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [data, setData] = useState<LoginResponse | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        { email, password }
      );
      setData(response.data);
      return response.data;
    } catch (e) {
      const error = e as AxiosError<ErrorMessage>;
      console.log(error);
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
};

export default useLogin;
