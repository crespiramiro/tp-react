import Image from "next/image"
import img13 from "../../assets/imagenes/taller.png"
function Taller (){
    return (
        <div>
        <Image src={img13} 
       alt={"taller"}
    layout="responsive" />
   </div>
    )
}

export default Taller;