"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

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
    const res = await axios.get("https://my-json-server.typicode.com/crespiramiro/tp-api/products");
    const products = await res.data;
    setProductos(products);
    // console.log(products);
  };

  useEffect(() => {
    getData();
  }, []);

  ////////////////////////////////////////////////////////////////////

  const onAddProduct = (nuevoProducto) => {
    // Verificar si el producto ya está en el carrito
    const productoExistente = allProducts.find(
      (item) => item.id === nuevoProducto.id
    );

    if (productoExistente) {
      // Actualizar la cantidad del producto existente
      const productosActualizados = allProducts.map((item) =>
        item.id === nuevoProducto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const nuevoTotal = (
        total +
        nuevoProducto.price * nuevoProducto.quantity
      ).toFixed(2);

      // Actualizar el estado con los productos actualizados
      setTotal(parseFloat(nuevoTotal));
      setCountProducts(countProducts + nuevoProducto.quantity);
      setAllProducts(productosActualizados);
    } else {
      // Agregar el nuevo producto al carrito
      const nuevoTotal = (
        total +
        nuevoProducto.price * nuevoProducto.quantity
      ).toFixed(2);

      setTotal(parseFloat(nuevoTotal));
      setCountProducts(countProducts + nuevoProducto.quantity);
      setAllProducts([...allProducts, nuevoProducto]);
    }
    setAbierto(false);
  };
  ////////////////////////////////////////////////////////////////////
  const [abierto, setAbierto] = useState(false);

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setAbierto(true);
  };
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

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
              <h3 className="text-green-600 lg:text-xl ">
                {producto.symbol}
                {producto.price}
              </h3>
              <h3 className="line-through opacity-50 lg:text-lg ">
                {producto.symbol}
                {producto.oldprice}
              </h3>
            </div>
            <button
              onClick={() => abrirModal(producto)}
              className="bg-green-700 p-3 mb-4 rounded-md text-center"
            >
              <p className="text-white font-semibold text-center lg:text-lg">
                Agregar al Carrito
              </p>
            </button>
          </div>
        ))}
      </div>
      <Modal isOpen={abierto}>
        <ModalHeader>Confirmacion de compra</ModalHeader>
        <ModalBody>
          {productoSeleccionado ? (
            <>
              <label htmlFor="texto">Desea confirmar la compra:</label>
              {/* Puedes mostrar detalles del producto aquí si es necesario */}
            </>
          ) : (
            <p>Error: productoSeleccionado es nulo</p>
          )}
        </ModalBody>
        <ModalFooter>
          {productoSeleccionado && (
            <>
              <Button
                color="primary"
                onClick={() => onAddProduct(productoSeleccionado)}
              >
                Confirmar
              </Button>
              <Button color="secondary" onClick={() => setAbierto(false)}>
                Cancelar
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </section>
  );
}
