"use client";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Link from "next/link";
import "@/styles/NavCartStyles.css";

function Navbar({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) {
  const [nav, setNav] = useState(false);

  const [active, setActive] = useState(false);

  const [productos, setProductos] = useState([]);

  const onDeleteProduct = (producto) => {
    const results = allProducts.filter((item) => item.id !== producto.id);

    const nuevoTotal = (total - producto.price * producto.quantity).toFixed(2);
    setTotal(parseFloat(nuevoTotal));
    setCountProducts(countProducts - producto.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex flex-row justify-around items-center h-auto bg-green-800 py-5 text-white ">
      <div className="logo">
<img src="logo.png" alt="Ceramica Viva" width={80} />     
 </div>
      <ul className="font-semibold hidden lg:flex lg:flex-row gap-x-12 text-xl md:text-2xl items-center justify-center ">
        <li className="hover:cursor-pointer hover:scale-105 ">
          <Link href="#inicio">Inicio</Link>
        </li>
        <li className="hover:cursor-pointer hover:scale-105 ">
          <Link href="#nosotros">Sobre Nosotros</Link>
        </li>
        <li className="hover:cursor-pointer hover:scale-105 ">
          <Link href="#productos">Productos</Link>
        </li>
        <li className="hover:cursor-pointer hover:scale-105 ">
          <Link href="#taller">Taller</Link>
        </li>
      </ul>
      <div className="icons hidden lg:flex lg:flex-row gap-x-6 items-center ">
        <AiOutlineSearch size={40} />
        <AiOutlineUser size={40} />
        {/* Comienza carrito--------------------------------------------------------------------------------------------------------------------- */}
        <div className="container-icon">
          <div
            className="container-cart-icon"
            onClick={() => setActive(!active)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-cart"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="count-products">
              <span id="contador-productos">{countProducts}</span>
            </div>
          </div>

          <div
            className={`container-cart-products ${active ? "" : "hidden-cart"}`}
          >
            {allProducts.length ? (
              <>
                <div className="row-product">
                  {allProducts.map((producto) => (
                    <div className="cart-product" key={producto.id}>
                      <div className="info-cart-product">
                        <span className="cantidad-producto-carrito">
                          {producto.quantity}
                        </span>
                        <p className="titulo-producto-carrito">
                          {producto.name}
                        </p>
                        <span className="precio-producto-carrito">
                          ${producto.price}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-close"
                        onClick={() => onDeleteProduct(producto)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                <div className="cart-total">
                  <h3>Total:</h3>
                  <span className="total-pagar">${total}</span>
                </div>

                <button className="btn-clear-all" onClick={onCleanCart}>
                  Vaciar Carrito
                </button>
              </>
            ) : (
              <p className="cart-empty">El carrito está vacío</p>
            )}
          </div>
        </div>
      </div>

      <div className="block lg:hidden text-3xl " onClick={handleNav}>
        {nav ? null : <AiOutlineMenu />}
      </div>

      <nav
        className={
          nav
            ? " z-50 fixed flex-col gap-y-6 p-6 left-0 top-0 text-black w-[75%] md:w-[55%] h-full border-r-2 border-green-400 bg-white transition-all  ease-in-out duration-500 "
            : " hidden fixed left-[-100%]"
        }
      >
        <div className="flex flex-row items-center gap-x-3">
          <h2 className=" text-3xl font-extrabold"> Ceramica Viva </h2>
          <AiOutlineClose size={35} onClick={handleNav} className="flex items-center" />
        </div>
        <ul className="uppercase pt-4 mt-2 ">
          <li className="py-6 text-lg ">
            <Link href="#inicio">Inicio</Link>
          </li>
          <li className="py-6 text-lg ">
            <Link href="#productos">Nuestros Productos</Link>
          </li>
          <li className="py-6 text-lg ">
            <Link href="#nosotros">Sobre Nosotros</Link>
          </li>
          <li className="py-6 text-lg ">
            <Link href="#taller">Taller</Link>
          </li>
        </ul>
        <ul className="icon-container lg:hidden flex flex-row gap-x-4 pt-4 mt-2  text-2xl md:text-4xl ">
          <li className="h-auto w-fit border-2 rounded-full p-4 border-amber-950 ">
            <a href="#">
              {" "}
              <AiOutlineUser />{" "}
            </a>
          </li>
          <li className="h-auto w-fit border-2 rounded-full p-4 border-amber-950 ">
            <a href="#">
              {" "}
              <AiOutlineSearch />{" "}
            </a>
          </li>
          <li className="h-auto w-fit border-2 rounded-full p-4 border-amber-950 ">
            <a href="#">
              {" "}
              <AiOutlineShoppingCart />{" "}
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar;
