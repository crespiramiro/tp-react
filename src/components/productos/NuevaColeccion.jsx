import Image from "next/image"
import img11 from "../../assets/imagenes/nuevacoleccion.png"
function NuevaColeccion (){
    return (
<div>
    <Image src={img11} 
    alt={"Nueva colección"}
    layout="responsive" />
</div>
    )
}

export default NuevaColeccion;