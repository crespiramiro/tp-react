// import styles from "@/styles/Carrito.module.css";
export default function Home() {
  return (
    <main
    // className={
    //   "${styles.contenido} contenedor h-screen w-full overflow-x-hidden bg-green-100"
    // }
    >
      <div className="flex flex-row gap-4 p-4 border-4">
        <div className="col-span-1">Productos</div>
        <div className="col-span-2">Precios</div>
        <div className="col-span-2">Cantidad</div>
      </div>
    </main>
  );
}
