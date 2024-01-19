import Image from 'next/image'
import Navbar from './components/Navbar'
import { Borel, Archivo_Black } from 'next/font/google'
import { arch } from 'os'
// import { Lemon } from 'next/font/google'

const archivo_Black = Archivo_Black({ 
  weight: '400',
  subsets: ['latin'],
})

const borel = Borel({ 
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <main className='text-white'>
      <Navbar />
      <section className='flex h-screen'>
          <div className='hidden md:block bg-secondary md:w-[32%]'></div>
          <div className='bg-secondary w-full md:bg-primary md:w-[68%] px-6 pt-44 md:pt-20'>
            <div>
              <h5 className='text-[0.95rem] mb-2'>👋 <span className={borel.className}>Hi, I'm Alfred</span></h5>
              <div className={archivo_Black.className}>
                <h1 className='text-[1.9rem] font-bold leading-20'>
                  I like making fun, interactive things with code. I also talk & write about those things.
                </h1>
              </div>
            </div>
          </div>
      </section>
      <section className='bg-[#9A3B3B] h-screen'>

      </section>
    </main>
  )
}
