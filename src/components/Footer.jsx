import styles from "./styles.css"
import Image from "next/image"
import logo from "../assets/imagenes/logo1.png"
export default function Footer (){
    return (
        <div className={styles.grid}>
          <div className={styles.gridinfo}>
            <div className={styles.imagecontainer}>
              <Image
                src={logo}
                alt="testimonio"
                class="logo1"
                width={50}
                height={50}
              />
            </div>
            <div>
              <p>
                Facilidad para cursar, kit inicial para arrancar de cero. Hoy para
                mí hacer cerámica se ha convertido en un pequeño ritual y espacio de
                encuentro conmigo. El curso me permitió armar mi propio Tallercito.
                La calidez de la profesora traspasa la pantalla.
              </p>
            </div>
          </div>
    
          <div className={styles.gridcontactmedia}>
            <div>
              <ul>
                <li>Tienda</li>
                <li>Suscripción</li>
                <li>Taller de Cerámica</li>
              </ul>
            </div>
            <div className={styles.gridicons}>
              <img src="" alt="" /><i className={styles.fabrands && styles.fatwitter}></i>
              <img src="" alt="" /><i className={styles.fabrands && styles.fafacebook}></i>
              <img src="" alt="" /><i className={styles.fabrands && styles.fainstagram}></i>
            </div>
          </div>
        </div>
      )

}


