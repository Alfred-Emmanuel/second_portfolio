import Image from 'next/image'
import Navbar from './components/Navbar'
import { Borel } from 'next/font/google'
// import { arch } from 'os'

const borel = Borel({ 
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <main className='text-white'>
      <Navbar />
      <section className='flex h-screen'>
          <div className='hidden md:block bg-secondary md:w-[32%] border relative z-10'>
            <div>
              <Image src="/desktop-2.svg" alt='desktop computer' width={500} height={500} className=' absolute left-44 top-36'/>
            </div>
          </div>
          <div className='bg-secondary w-full md:bg-primary md:w-[68%] px-6 pt-48 md:pt-40 md:pr-24 md:pl-72'>
            <div className=''>
              <h5 className='text-base mb-2'>👋 <span className={borel.className}>Hi, I'm Alfred</span></h5>
              <div>
                <h1 className='text-[2.4rem] leading-tight tracking-wide md:text-[3.9rem] md:leading-tight'>
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
