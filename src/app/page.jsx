"use client";
import HeroImg from "@/components/HeroImg";
import Navbar from "@/components/Navbar";
import Carrusel from "@/components/productos/Carrusel.jsx";
// import ProductsContainer from '@/components/productos/ProductsContainer'
import Nosotros from "@/components/productos/Nosotros";
import NuevaColeccion from "@/components/productos/NuevaColeccion";
import Taller from "@/components/productos/Taller";
import Image from "next/image";
import NewProducts from "@/components/newProducts";

export default function Home() {
  return (
    <main className="min-h-screen max-h-screen w-full overflow-x-hidden scroll-smooth ">
      <Navbar />
      <HeroImg />
      <NewProducts />
      <Nosotros />
      <Carrusel />
      <Taller />
    </main>
  );
}
