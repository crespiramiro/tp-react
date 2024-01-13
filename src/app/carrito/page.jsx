"use client";
import { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "@/reducers/shoppingReducer";
import Navbar from "@/components/Navbar";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = () => {};
  const delToCart = () => {};
  const clearCart = () => {};

  return (
    <main className="h-screen w-full overflow-x-hidden bg-green-100">
      <Navbar />
      <div>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <article className="box"></article>
        <h3>Carrito</h3>
        <article className="box"></article>
      </div>
    </main>
  );
};

export default ShoppingCart;
