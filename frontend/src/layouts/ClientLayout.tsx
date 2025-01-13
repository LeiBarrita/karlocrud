import { Link, NavLink, Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <div>
      <div className="bg-emerald-900 absolute top-0 left-0 p-2 px-10 w-full flex justify-between">
        <Link className="font-normal text-white" to="/client">
          Inicio
        </Link>
        <div className="flex gap-10">
          <NavLink className="font-normal text-white" to="/">
            Cerrar Sesión
          </NavLink>
          <NavLink className="font-normal text-white" to="/client/orders">
            Ordenes
          </NavLink>
          <NavLink className="font-normal text-white" to="/client/cart">
            Carrito
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ClientLayout;
