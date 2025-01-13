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

        <Button text="Comprar" />
      </div>
    </main>
  );
};

export default Cart;
