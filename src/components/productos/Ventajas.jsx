import "./ventajas.css";
import Image from "next/image"
import img14 from "../../assets/imagenes/salud.png" 
import img15 from "../../assets/imagenes/temperatura.png"
import img16 from "../../assets/imagenes/duracion.png"
import img17 from "../../assets/imagenes/suave.png"
import img18 from "../../assets/imagenes/quimicos.png"
function Ventajas(){
    return (
        <div className="caja0"> <h1 className="titulo">PRINCIPALES VENTAJAS DE <span className="color">USAR VAJILLAS DE CERÁMICA</span> </h1>
        <div className="todositems">
        <div className="items">
        <div className="icono">
        <Image src={img14} 
    alt={"icono"}
    layout="responsive" />
        </div>
       <div className="caja1"> <h2 className="minititulos"> Seguras para la salud</h2> </div>
   <div className="caja2"><p>
   La cerámica se ha utilizado durante millones de años y se considera saludable y segura para los alimentos. Se ha observado que los componentes que conforman la cerámica son considerados no tóxicos.
    </p></div>
       </div>

       <div className="items">
        <div className="icono">
        <Image src={img15} 
    alt={"icono"}
    layout="responsive" />
        </div>
       <div className="caja1"> <h2 className="minititulos"> Amigable con la temperatura</h2> </div>
   <div className="caja3"><p>
   Los platos de cerámica son amigables con el calor así que puede usarse para cocinar alimentos en la estufa, microondas y horno.
   Pero esto no significa que todas las cerámicas son resistentes al calor, solo algunas son aptas por lo cual hay que asegurarnos de
    que la vajilla que deseamos adquirir es apta para el calor.
    </p></div>
       </div>

       <div className="items">
        <div className="icono">
        <Image src={img16} 
    alt={"icono"}
    layout="responsive" />
        </div>
       <div className="caja1"> <h2 className="minititulos"> Duración</h2> </div>
   <div className="caja4"><p>
   La vajilla de cerámica es mejor conocida por su durabilidad, es duradera y no porosa. Aunque parecen frágiles, poseen una solidez suprema.
    </p></div>
       </div>

       <div className="items">
        <div className="icono">
        <Image src={img17} 
    alt={"icono"}
    layout="responsive" />
        </div>
       <div className="caja1"> <h2 className="minititulos">No pegajoso</h2> </div>
   <div className="caja5"><p>
   Se ha demostrado que la vajilla de cerámica no es pegajosa. Tiene una textura suave y vidriosa que ayuda a limpiar la vajilla con facilidad.
    Ya sea que este preparando un plato sobre utensilios de cocina de cerámica o comiendo en ellos, el utensilio se queda sin manchas. 
    Además, se pueden limpiar con mucha facilidad con solo aplicar agua y jabón.
    </p></div>
       </div>

       <div className="items">
        <div className="icono">
        <Image src={img18} 
    alt={"icono"}
    layout="responsive" />
        </div>
       <div className="caja1"> <h2 className="minititulos">No contiene vinilo ni productos químicos</h2> </div>
   <div className="caja6"><p>
   Los productos químicos y el plástico pueden tener un efecto adverso en nuestra salud ya que pueden ser dañinos para nuestro cuerpo.
Mientras que algunas cerámicas son químicamente libres y pueden ser una buena opción para usted.
    </p></div>
       </div>


        </div>
      
    </div>
    )
   

}
export default Ventajas;

