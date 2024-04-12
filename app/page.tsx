import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import HeroSvg from "./components/HeroSvg"
import About from './components/About'
import { Niconne } from 'next/font/google'


const niconne = Niconne({ 
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <>
    
    <main className='text-white relative z-10' >
      <Navbar />
      <section className='lg:flex h-screen'>
          <div className='hidden md:block bg-secondary md:w-[32%] z-10'>
              <HeroSvg />
          </div>
          <div className='bg-secondary w-full h-screen lg:bg-primary lg:w-[70%] px-6 pt-48 md:pt-80 md:pl-32 md:pr-32 lg:pt-36 lg:pr-24 lg:pl-72'>
            <div>
              <h5 className={`text-xl mb-2 ${niconne.className}`} style={{ transform: 'skewY(-5deg)' }}>
                👋 <span className={`font-bold tracking-wider`}>Hi, I&apos;m Alfred</span>
              </h5>
              <div>
                <h1 className='text-[2.25rem] mt-7 leading-tight tracking-wide md:text-[3.4rem] lg:text-[2.7rem] xl:text-[3.45rem] lg:leading-tight '>
                  I build pixel perfect, user-friendly, and captivating websites that leaves a lasting impression.
                </h1>
              </div>
            </div>
          </div>
      </section>
      <section className='h-screen bg-secondary relative pt-[18%] pb-[15%] px-[8%] lg:px-[14%] lg:pt-[8%] lg:pb-[5%] '>
        <About />
      </section>
      <section className='bg-[#4c6550] h-auto pb-10 px-6 '>
        <div className='pt-24 lg:px-60 relative md:h-auto'>
          <h1 className={`text-5xl font-bold`}>Experience.</h1>
          <Experience />
        </div>
      </section>
      <section className='bg-[#2C2A32] pt-32 lg:px-60 h-auto pb-10 px-6 '>
        <Projects />
      </section>
    </main>
    <section className='sticky left-0 bottom-0 w-full bg-primary h-screen flex justify-center items-center pb-12'>
      <Contact />
    </section>
    </>
  )
}
