import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import NavBar from "./layouts/ClientLayout";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="client" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      <Route path="business">
        <Route index element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
