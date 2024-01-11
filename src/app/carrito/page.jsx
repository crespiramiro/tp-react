// import styles from "@/styles/Carrito.module.css";
// export default function Home() {
//   return (
//     <main
//     // className={
//     //   "${styles.contenido} contenedor h-screen w-full overflow-x-hidden bg-green-100"
//     // }
//     >
//       <div className="flex flex-row gap-4 p-4 border-solid border-2 border-black">
//         <div className="col-span-1 border-solid border-4 border-black">
//           Productos
//         </div>
//         <div className="col-span-2 border-solid border-4 border-black">
//           Cantidad
//         </div>
//         <div className="col-span-3 border-solid border-4 border-black">
//           Precio
//         </div>
//         <div className="col-span-4 border-solid border-4 border-black">
//           Total
//         </div>
//       </div>
//     </main>
//   );
// }

import { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "@/reducers/shoppingReducer";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box"></article>
      <h3>Carrito</h3>
      <article className="box"></article>
    </div>
  );
};

export default page;
