import { Link, useNavigate } from "react-router";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import Button from "./Button";
import Field from "./Field";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
      console.log(result);
      if (result) {
        const roleId = result.roleId;
        if (roleId === 2) {
          navigate("/client");
        } else if (roleId === 1) {
          navigate("/business");
        } else {
          console.error("Unhandled roleId:", roleId);
        }
      }
    } catch (e) {
      console.error("Login failed:", e);
    }
  };

  return (
    <main className="bg-stone-800 p-10 flex min-h-lvh w-lvw justify-center items-center">
      <div className="flex flex-col gap-2 bg-emerald-100 h-fit text-black rounded-md overflow-hidden p-5 text-left">
        <h3 className="pb-5 text-3xl text-center">Iniciar Sesión</h3>

        <div className="flex flex-col">
          <small>Email</small>
          <Field
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <small>Contraseña</small>
          <Field
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error ? <p className="text-red-500">{error}</p> : undefined}

        <Button
          text={loading ? "Ingresando..." : "Ingresar"}
          onClick={handleLogin}
        />
        <Link
          to="/register"
          className="text-center text-xs text-black font-thin"
        >
          ¿Nuevo? Registrate
        </Link>
      </div>
    </main>
  );
};

export default Login;
