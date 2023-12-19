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
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex flex-row justify-around h-auto bg-green-800 py-8 text-white ">
      <div className="logo">
        <h1 className="font-extrabold text-2xl md:text-4xl ">Ceramica Viva</h1>
      </div>
      <ul className="font-semibold hidden lg:flex lg:flex-row gap-x-12 text-xl md:text-2xl items-center justify-center ">
        <li className="hover:cursor-pointer hover:scale-105 ">
          <Link href="#inicio" >Inicio</Link>
        </li>
        <li className="hover:cursor-pointer hover:scale-105 ">
         <Link href="#nosotros" >Sobre Nosotros</Link>
        </li>
        <li className="hover:cursor-pointer hover:scale-105 ">
          <Link href="#productos" >Productos</Link>
        </li>
        <li className="hover:cursor-pointer hover:scale-105 ">
          <Link href="#taller" >Taller</Link>
        </li>
      </ul>
      <div className="icons hidden lg:flex lg:flex-row gap-x-6 items-center ">
        <AiOutlineSearch size={40} />
        <AiOutlineUser size={40} />
        <Link href="/carrito">
          <AiOutlineShoppingCart size={40} />
        </Link>
      </div>

      <div className="block lg:hidden text-3xl " onClick={handleNav}>
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <nav
        className={
          nav
            ? " z-50 fixed flex-col gap-y-6 p-6 left-0 top-0 text-black w-[75%] h-full border-r-2 border-green-400 bg-white  ease-in-out duration-500 "
            : " hidden fixed left-[-100%]"
        }
      >
        <h2 className=" text-4xl font-extrabold"> Ceramica Viva </h2>
        <ul className="uppercase pt-4 mt-2 ">
          <li className="py-6 text-2xl ">
            <a href="#">Inicio</a>
          </li>
          <li className="py-6 text-2xl ">
            <a href="#">Sobre Nosotros</a>
          </li>
          <li className="py-6 text-2xl ">
            <a href="#">Nuestros Productos</a>
          </li>
          <li className="py-6 text-2xl ">
            <a href="#">Taller</a>
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
