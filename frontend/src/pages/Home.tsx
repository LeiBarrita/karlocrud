import ProductList from "../components/ProductList";
import useShops from "../hooks/useShops";

const Home = () => {
  const { shops, loading } = useShops();

  return (
    <main className="bg-emerald-100 p-10 flex flex-col min-h-lvh w-lvw text-black">
      <h1 className="my-8 self-center">Karlo Store</h1>
      {loading && <p>Loading products...</p>}
      {shops.map((shop) => (
        <div key={shop.id} className="w-full">
          <h2 className="text-4xl mb-6">{shop.name}</h2>
          <ProductList shopId={shop.id} />
        </div>
      ))}
    </main>
  );
};

export default Home;
