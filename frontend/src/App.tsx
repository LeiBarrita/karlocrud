import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<div>Register</div>} />

      <Route path="client">
        <Route index element={<div>Client Home</div>} />
        <Route path="cart" element={<div>Client Cart</div>} />
        <Route path="orders" element={<div>Client Orders</div>} />
      </Route>

      <Route path="business">
        <Route index element={<div>Business Home</div>} />
        <Route path="products" element={<div>Business Products</div>} />
        <Route path="orders" element={<div>Business Orders</div>} />
      </Route>
    </Routes>
  );
}

export default App;
