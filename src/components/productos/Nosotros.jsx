import Image from "next/image"
import img12 from "../../assets/imagenes/quienessomos.png"
function Nosotros(){
    return (
        <div>
             <Image src={img12} 
    alt={"¿Quienes somos?"}
    layout="responsive" />
        </div>
    )
}

export default Nosotros;