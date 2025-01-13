import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="bg-emerald-100 p-10 flex flex-col min-h-lvh w-lvw text-black">
      <h1 className="my-8 self-center">Karlo Store</h1>
      <div className="text-2xl pb-5">
        <Button text="Nuevo Producto" onClick={() => setOpenModal(true)} />
      </div>
      <div className="flex py-2 gap-3 overflow-x-auto pb-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div>Formulario</div>
      </Modal>
    </main>
  );
};

export default Products;
