import { Link, NavLink, Outlet } from "react-router";

const BusinessLayout = () => {
  return (
    <div>
      <div className="bg-emerald-900 absolute top-0 left-0 p-2 px-10 w-full flex justify-between">
        <Link className="font-normal text-white" to="/business">
          Inicio
        </Link>
        <div className="flex gap-10">
          <NavLink className="font-normal text-white" to="/">
            Cerrar Sesión
          </NavLink>
          <NavLink className="font-normal text-white" to="/business/orders">
            Ordenes
          </NavLink>
          <NavLink className="font-normal text-white" to="/business/products">
            Productos
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default BusinessLayout;
