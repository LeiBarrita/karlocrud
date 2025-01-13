const ProductCard = () => {
  return (
    <div className="bg-white rounded-md min-w-48 h-60 overflow-hidden">
      <img
        className="object-cover w-full h-2/3"
        src="https://i.pinimg.com/474x/dc/95/b9/dc95b95c90c71fd83e88369c31ecce8b.jpg"
        alt="product image"
      />

      <div className="p-1 px-2 pb-2 flex flex-col justify-between">
        <h5>Producto</h5>
        <small>$ 899.00</small>
        <a className="text-sm text-violet-400">agregar al carrito</a>
      </div>
    </div>
  );
};

export default ProductCard;
