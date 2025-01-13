import Button from "../components/Button";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <main className="bg-emerald-100 p-10 flex flex-col min-h-lvh w-lvw text-black items-center">
      <h1 className="my-8">Carrito</h1>

      <div className="flex flex-col gap-6">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />

        <div className="self-end text-right">
          <h3 className="text-xl">Subtotal $ 200.00</h3>
          <h3 className="text-xl">IVA $ 300.00</h3>
          <h3 className="text-xl">Total $ 2300.00</h3>
        </div>

        <Button text="Comprar" />
      </div>
    </main>
  );
};

export default Cart;
