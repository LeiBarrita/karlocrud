import Field from "./Field";

const Login = () => {
  return (
    <div className="flex flex-col gap-2 bg-emerald-100 text-black rounded-md overflow-hidden p-4 text-left">
      <h3 className="pb-5 text-5xl text-center">Login</h3>
      <small>Email</small>
      <Field type="text" />
      <small>Contraseña</small>
      <Field type="password" />
      <small className="text-center">¿Nuevo? Registrate</small>
    </div>
  );
};

export default Login;
