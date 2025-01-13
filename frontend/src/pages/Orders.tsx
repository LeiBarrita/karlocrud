import OrderCard from "../components/OrderCard";

const Orders = () => {
  return (
    <main className="bg-emerald-100 p-10 flex flex-col min-h-lvh w-lvw text-black items-center">
      <h1 className="my-8">Ordenes de Compra</h1>

      <div className="flex flex-col gap-1 w-full">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </main>
  );
};

export default Orders;
