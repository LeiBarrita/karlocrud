import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList = ({ shopId }: { shopId: string }) => {
  const { products, loading } = useProducts(shopId);

  return (
    <div className="flex py-2 gap-3 overflow-x-auto pb-6">
      {!loading &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
