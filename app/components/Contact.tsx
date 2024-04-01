import React from 'react'
import SvgFace from './SvgFace'
import { Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <div className='w-[80%] h-[80%] bg-secondary md:flex items-center justify-between px-60'>
        <div className='border'>
            <h1>
                I'm always up for a chat
            </h1>
            <h2>
                Pop me an email at <span>ealfred828@gmail.com</span> <br />
                or give me a shout on social media
            </h2>
            <div>
                <Twitter />
            </div>
        </div>
        <SvgFace />
    </div>
  )
}

export default Contact
