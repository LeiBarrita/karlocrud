import { useNavigate } from "react-router";
import Button from "./Button";
import Field from "./Field";

const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/client");
  };

  return (
    <div className="flex flex-col gap-2 bg-emerald-100 text-black rounded-md overflow-hidden p-5 text-left">
      <h3 className="pb-5 text-3xl text-center">Iniciar Sesión</h3>

      <div className="flex flex-col">
        <small>Email</small>
        <Field type="text" />
      </div>

      <div className="flex flex-col">
        <small>Contraseña</small>
        <Field type="password" />
      </div>

      <Button text="Ingresar" onClick={handleRegister} />
      <small className="text-center">¿Nuevo? Registrate</small>
    </div>
  );
};

export default Login;
