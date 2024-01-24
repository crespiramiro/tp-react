"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewProducts({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  const [productos, setProductos] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:5050/products");
    const products = await res.data;
    setProductos(products);
    // console.log(products);
  };

  useEffect(() => {
    getData();
  }, []);

  ////////////////////////////////////////////////////////////////////

  const onAddProduct = (nuevoProducto) => {
    if (allProducts.find((item) => item.id === nuevoProducto.id)) {
      const productosActualizados = allProducts.map((item) =>
        item.id === nuevoProducto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      const nuevoTotal = (
        total +
        nuevoProducto.price * nuevoProducto.quantity
      ).toFixed(2);
      setTotal(parseFloat(nuevoTotal));
      setCountProducts(countProducts + nuevoProducto.quantity);
      return setAllProducts([...productosActualizados]);
    }

    const nuevoTotal = (
      total +
      nuevoProducto.price * nuevoProducto.quantity
    ).toFixed(2);
    setTotal(parseFloat(nuevoTotal));
    setCountProducts(countProducts + nuevoProducto.quantity);
    setAllProducts([...allProducts, nuevoProducto]);
  };
  ////////////////////////////////////////////////////////////////////
  return (
    <section id="productos" className="h-1/2 w-full">
      <h2 className=" text-2xl lg:text-4xl text-center py-8 font-bold ">
        Nuestros <span className="text-green-800"> Productos</span>
      </h2>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 gap-y-8 ">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="h-auto flex flex-col gap-y-1 w-auto rounded-lg shadow-lg justify-center items-center mx-4 "
          >
            <img
              src={producto.img}
              alt={producto.name}
              className="rounded-md pb-1 h-90 object-cover"
              loading="lazy"
            />
            <h2 className="text-center lg:text-2xl font-semibold ">
              {producto.name}
            </h2>
            <div className="prices p-1 flex flex-row gap-x-2 justify-center ">
              <h3 className="text-green-600 lg:text-xl ">{producto.price}</h3>
              <h3 className="line-through opacity-50 lg:text-lg ">
                {producto.oldprice}
              </h3>
            </div>
            <button
              onClick={() => onAddProduct(producto)}
              className="bg-green-700 p-3 mb-4 rounded-md text-center "
            >
              <p className="text-white font-semibold text-center lg:text-lg ">
                Agregar al Carrito
              </p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
