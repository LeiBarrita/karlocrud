const CartItem = () => {
  return (
    <div className="bg-white flex h-12 items-center gap-6 pr-4 rounded-sm overflow-hidden">
      <img
        className="object-cover h-full"
        src="https://i.pinimg.com/474x/dc/95/b9/dc95b95c90c71fd83e88369c31ecce8b.jpg"
        alt="product image"
      />
      <h2 className="text-2xl">Producto</h2>
      <h2 className="text-2xl">$ 899.00</h2>
      <h2 className="text-2xl">x 4</h2>
    </div>
  );
};

export default CartItem;
