import Image from "next/image"
/* import img13 from "../../assets/imagenes/taller.jpg" */
import "./stylescarousel.css";
function Taller (){
    return (
        <div id="taller" className=" bg-cyan-950 text-white text-left py-16 px-[10%]"  >
            
            <h2 className=" text-2xl md:text-4xl font-bold mb-3 " >Nuestro <span className="text-sky-300" >Taller</span></h2>
       <div className="flex flex-row" >
        <div>
        <p className=" text-xl md:text-2xl font-semibold" >Nos encontramos en Avda. Alameda 59 </p>
        <p className=" text-xl md:text-2xl font-semibold" >Podes visitarnos para nuestras clases de ceramica o retirar tus pedidos.
        <br /> Una vez por semana en el  taller. Se puede empezar en cualquier momento del año. Son clases grupales de hasta 6 / 7 p
        ersonas para todos los niveles. La propuesta es personalizada, acompañamos y guiamos a cada un@ respetando sus intereses y sus
         tiempos. La cuota mensual incluye materiales y horneadas. Concurrimos con delantal y toallita de mano propia, barbijo y alcohol. 
         
         Mantenemos distancia. El espacio es amplio y lo mantenemos ventilado.</p>
        </div>
        <div className="imagentaller">
        {/* <Image src={img13} 
    alt={"taller"}
    layout="responsive" /> */}
       </div>
            </div>
       
</div>
    )
}

export default Taller;