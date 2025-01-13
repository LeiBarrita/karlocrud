import Button from "./Button";
import Field from "./Field";

const Register = () => {
  return (
    <div className="flex flex-col gap-2 bg-emerald-100 text-black rounded-md overflow-hidden p-5 text-left">
      <h3 className="pb-5 text-3xl text-center">Registrarse</h3>
      <div className="flex flex-col">
        <small>Usuario</small>
        <Field type="text" />
      </div>

      <div className="flex flex-col">
        <small>Email</small>
        <Field type="text" />
      </div>

      <div className="flex flex-col">
        <small>Contraseña</small>
        <Field type="password" />
      </div>

      <div className="flex flex-col">
        <small>Cofirmar contraseña</small>
        <Field type="password" />
      </div>

      <Button text="Registrarse" />
      <small className="text-center">¿Ya tienes cuenta? Ingresa</small>
    </div>
  );
};

export default Register;
