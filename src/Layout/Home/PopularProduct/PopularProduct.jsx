import { useEffect, useState } from "react";
import Product from "./Product";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/popularProduct.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="mt-32 text-center">
      <h3 className="text-primary text-xl font-bold">Popular Product</h3>
      <h2 className="text-5xl font-bold mb-5">Browse Our Products</h2>
      <p className="text-base font-normal md:w-[700px] mx-auto mb-12">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don&apos;t look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <button className="btn btn-outline mt-12 text-[#FF3811]">
        More Products
      </button>
    </div>
  );
};

export default PopularProduct;
