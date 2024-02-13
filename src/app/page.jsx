
"use client";
import { useState } from "react";
import HeroImg from "@/components/HeroImg";
import Navbar from "@/components/Navbar";
import Carrusel from "@/components/productos/Carrusel.jsx";
import Nosotros from "@/components/productos/Nosotros";
import NuevaColeccion from "@/components/productos/NuevaColeccion";
import Taller from "@/components/productos/Taller";
import Image from "next/image";
import NewProducts from "@/components/NewProducts";
import Ventajas from "@/components/productos/Ventajas";
import Footer from "@/components/Footer";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <main className="min-h-screen max-h-screen w-full overflow-x-hidden scroll-smooth ">
      <Navbar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <HeroImg />
      <NewProducts
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Nosotros />
      <Carrusel />
      <Ventajas />
      <Taller />
      <Footer/>
    </main>
  );
}
