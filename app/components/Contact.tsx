import React from 'react'
import SvgFace from './SvgFace'
import { Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <div className='w-[90%] md:w-[80%] h-[60%] md:h-[80%] bg-secondary flex flex-col md:flex-row items-center md:justify-between px-5 py-5 md:px-32 md:py-24 relative'>
        <div className=' w-full text-white md:w-[50%] md:h-full'>
            <h1 className='text-xl md:text-[1.7rem]'>
                I'm always up for a chat
            </h1>
            <h2 className='w-[70%] md:w-[80%] mt-3 md:mt-10 text-[1rem] md:text-xl leading-6 md:leading-10'>
                Send me an email at <span>ealfred828@gmail.com</span> or give me a shout on social media
            </h2>
            <div className='mt-6'>
                <Twitter />
            </div>
        </div>
        <div className='w-[85%] md:w-[50%]'>
            <SvgFace />
        </div>
        <h1 className='absolute left-5 md:left-32 text-white text-5xl md:text-6xl -bottom-7 tracking-wider'>Holla!</h1>
    </div>
  )
}

export default Contact
