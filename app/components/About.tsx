import React from 'react'
import Image  from 'next/image'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
    weight: '400',
    subsets: ['latin'],
})

function About() {
  return (
    <>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="h-[200px] lg:h-[250px] absolute top-4 -left-36 md:top-20 lg:top-[30px] lg:left-[120px] -z-1 "
        overflow="visible"
        viewBox="0 0 133.9 97.5"
        >
          <defs>
            <pattern
              id="dot-pattern"
              width="8"
              height="8"
              x="-257.8"
              y="-219"
              overflow="visible"
              patternUnits="userSpaceOnUse"
              viewBox="0 -8 8 8"
            >
              <path fill="none" d="M0 -8H8V0H0z"></path>
              <circle
                cx="4.3"
                cy="-4"
                r="0.7"
                fill="white"
                stroke="white"
                strokeMiterlimit="10"
              ></circle>
            </pattern>
          </defs>
          <pattern
            id="SVGID_1_"
            patternTransform="translate(-1.364 4.211)"
            xlinkHref="#dot-pattern"
          ></pattern>
          <path fill="url(#SVGID_1_)" d="M0 0H133.9V90H0z"></path>
        </svg>
        <div className=' relative z-1 bg-secondary border-2 h-auto  pr-5 pl-2 py-[10%] md:px-[6%] md:py-[7%]'>
          <div className="absolute -z-1 -bottom-3 md:-bottom-5 -right-1 w-[98%] h-3 md:h-5 bg-white"></div>
          <div className="absolute top-3 md:top-5 -right-3 md:-right-5 h-full w-3 md:w-5 bg-white"></div>
          <h1 className=' text-4xl md:text-5xl font-bold'>About me.</h1>
          <div className='flex items-center justify-between pt-8'>
            <div className=' w-full lg:w-[55%]'>
              <p className={`${montserrat.className} text-[0.9rem] md:text-[1.05rem] tracking-wider`}>
                Back in 2017, i decided to try my hand at blogging and creating content using 
                "Blogger <span><Image src={`/blogger.png`} width={20} height={15} alt='blogger logo' className='inline-block rounded-md' /></span>"
                which is where is first encountered coding but i didn't take it as serious as i should have.
                Fast forward to 2019, i went back to programming and decided to grab it by the neck. <br /> <br />
                My main focus these days is building accessible, user friendly user interfaces for the web.<br /> <br />
                When i'm not at the computer, i'm either reading, watching a movie or dealing with exhausting school work.
                
              </p>
            </div>
            {/* <div className='w-[45%]'>
                <Image src={`/my_image2.jpeg`} width={0} height={0} alt='myself' className='w-full' />
            </div> */}
          </div>
        </div>
    </>
  )
}

export default About
