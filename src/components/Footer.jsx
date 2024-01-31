import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
export default function Footer(){

  return (

  <footer className="w-full h-auto bg-[#166534] text-white py-20 px-10 gap-x-4 flex justify-center  flex-row " >
      <div className="w-2/3" >
      <img src="/logo1.avif" alt="Imagen" width={120} className="rounded-2xl" />
        <br />
        <p className="text-pretty" >Facilidad para cursar, kit inicial para arrancar de cero. Hoy para mi hacer ceramica se ha convertido en un pequeño ritual y espacio de encuentro conmigo. El curso me permitio armar mi propio tallercito. La calidez de la profesora traspasa la pantalla.</p>
      </div>
      <div className="flex flex-col" >
        <ul className="font-semibold text-xl" >
          <li>Tienda</li>
          <li>Sucripcion</li>
          <li>Taller de Ceramica</li>
        </ul>
        <div className="icons flex text-xl justify-center font-semibold flex-row gap-x-6" >
          <AiOutlineTwitter/>
          <AiOutlineFacebook />
          <AiOutlineInstagram />
        </div>
      </div>
  </footer>
)}