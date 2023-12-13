'use client'
import Image from "next/image"
import "./stylescarousel.css";
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { execOnce } from "next/dist/shared/lib/utils";
import { Dancing_Script } from "next/font/google";
const dancing = Dancing_Script({subsets: ['latin']})



import img1 from "../../assets/imagenes/idea1.webp"
import img2 from "../../assets/imagenes/idea 2.webp"
import img3 from "../../assets/imagenes/idea 3.webp"
import img4 from "../../assets/imagenes/idea 4.webp"
import img5 from "../../assets/imagenes/idea 5.webp"
import img6 from "../../assets/imagenes/idea 6.jpg"
import img7 from "../../assets/imagenes/idea 7.jpg"
import img8 from "../../assets/imagenes/idea 8.jpg"
import img9 from "../../assets/imagenes/idea 9.jpg"
import img10 from "../../assets/imagenes/idea 10.jpg"


function Carrusel() {
    return (
       <div className="pt-40">
        <div> 
            <h1 className={`text-3xl ${dancing.className} text-center underline`} >Ideas con ceramica</h1>
            <h2 className="text-xl text-center font-serif">Te dejamos unas ideas para decorar tu casa con estilo.</h2>
        </div>
<Carousel className="mainslide">
<div>
    <Image src={img1} 
    alt={"Idea 1"}
    layout="responsive" />
</div>
<div>
<Image src={img2} 
    height={50} 
    width={50}
    alt={"Idea 2"}
    layout="responsive" />
</div>
<div>
<Image src={img3} 
    height={50} 
    width={50}
    alt={"Idea 3"}
    layout="responsive" />
</div>
<div>
<Image src={img4} 
    height={50} 
    width={50}
    alt={"Idea 4"}
    layout="responsive" />
</div>
<div>
<Image src={img5} 
    height={50} 
    width={50}
    alt={"Idea 5"}
    layout="responsive" />
</div>
<div>
<Image src={img6} 
    height={50} 
    width={50}
    alt={"Idea 6"}
    layout="responsive" />
</div>
<div>
<Image src={img7} 
    height={50} 
    width={50}
    alt={"Idea 7"}
    layout="responsive" />
</div>
<div>
<Image src={img8} 
    height={50} 
    width={50}
    alt={"Idea 8"}
    layout="responsive" />
</div>
<div>
<Image src={img9} 
    height={50} 
    width={50}
    alt={"Idea 9"}
    layout="responsive" />
</div>
<div>
<Image src={img10} 
    height={50} 
    width={50}
    alt={"Idea 10"}
    layout="responsive" />
</div>

</Carousel>
</div>
    )
    
}

export default Carrusel;