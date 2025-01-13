import Button from "./Button";

const OrderCard = () => {
  return (
    <div className="bg-white flex h-12 w-full justify-between items-center gap-6 px-10 rounded-sm overflow-hidden">
      {/* <div className="flex gap-16"></div> */}
      <h2 className="text-2xl">Tienda</h2>
      <h2 className="text-2xl">Estado</h2>
      <h2 className="text-2xl">Total: $ 899.00</h2>
      <Button text="Cancelar" />
    </div>
  );
};

export default OrderCard;
