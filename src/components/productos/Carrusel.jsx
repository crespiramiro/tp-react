'use client'
import React, {useEffect, useRef, useState} from "react";
import { data } from "../../assets/data.js";

export const Carrusel = () => {
    // const listRef = useRef 
    const [currentIndex, setCurrentIndex] = useState (0)

useEffect (() =>{
//  const listNode = listRef.current;
//  const imgNode = list.listNode.querySelectorAll("li > img") [currentIndex]

// if (imgNode) {
//     imgNode.scrollIntoView ({
//         behavior: "smooth"
//     })
// }

}, [currentIndex])

    return(
        <div className=" bg-black h-[280px] w-[250px] m-0">
        <div className="relative h-full">
<div className=" h-full w-full rounded-s-2xl border-solid border-blue-500 truncate4">
    shdbads
{/* <ul ref={listRef}>
{
    data.map((item) =>{
        return <li key={item.id}>
            <img src={item.imgUrl} width={500} height={280} />
        </li>
    })
}
</ul> */}
</div>
        </div>
        </div>
    )
}

export default Carrusel;