import Image from "next/image"
import img12 from "../../assets/imagenes/quienessomos.png"
function Nosotros(){
    return (
    <div className=" bg-cyan-950 text-white text-center py-16 px-[10%]" >
            <h2 className=" text-2xl md:text-4xl font-bold mb-3 " >Quienes <span className="text-sky-300" >somos</span> ?</h2>
           <div className="flex flex-col gap-y-4" >
           <p className=" text-xl md:text-2xl font-semibold" >Somos un equipo que esta para ayudarte a darle estilo a tu hogar, area de trabajo, etc</p>
            <p className=" text-xl md:text-2xl font-semibold" >Contamos con diseños originales y modernos, tambien realizamos diseños personalizados</p>
           </div>
    </div>
    )
}

export default Nosotros;