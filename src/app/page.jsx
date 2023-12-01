import HeroImg from '@/components/HeroImg'
import Navbar from '@/components/Navbar'
import ProductsContainer from '@/components/productos/ProductsContainer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-screen w-full overflow-x-hidden ' >
      <Navbar />
      <HeroImg />
      <ProductsContainer />
    </main>
  )
}
