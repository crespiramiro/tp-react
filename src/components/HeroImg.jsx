import { Dancing_Script } from "next/font/google";
const dancing = Dancing_Script({subsets: ['latin']})

function HeroImg() {
    return (
        <div  className="w-full flex justify-start place-items-center h-[30rem] bg-cover " style={{backgroundImage: "url('hero-ceramica.webp' ) "}} >
            <h2 className={` text-green-300 w-1/3 text-center font-semibold  text-5xl ${dancing.className} `} >Donde el arte cobra vida en cada pieza</h2>
        </div>
      );
}

export default HeroImg;