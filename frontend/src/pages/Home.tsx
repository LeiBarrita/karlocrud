import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <main className="bg-emerald-100 p-10 flex flex-col min-h-lvh w-lvw text-black">
      <h1 className="my-8 self-center">Karlo Store</h1>
      <h2 className="text-4xl mb-6">Tienda 1</h2>
      <div className="flex py-2 gap-3 overflow-x-auto pb-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <h2 className="text-4xl mb-6">Tienda 2</h2>
      <div className="flex py-2 gap-3 overflow-x-auto pb-6">
        <ProductCard />
        <ProductCard />
      </div>
      <h2 className="text-4xl mb-6">Tienda 3</h2>
      <div className="flex py-2 gap-3 overflow-x-auto pb-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default Home;
