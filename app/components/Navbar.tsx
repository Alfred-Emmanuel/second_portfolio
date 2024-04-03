"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import { Borel, Niconne } from 'next/font/google'


const niconne = Niconne({ 
  weight: '400',
  subsets: ['latin'],
})

export default function Navbar() {
  useEffect(() => {
    const text = document.querySelector('.animated-text') as HTMLElement;
    if (!text) return;
    // const letters = text.textContent?.split('');
    const letters = text.textContent?.split('') ?? [];
    text.textContent = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      span.style.color = `white`;
      span.style.fontWeight = "800"
      text.appendChild(span);
      
      gsap.to(span, {
        opacity: 1,
        duration: 1,
        delay: index * 0.1,
        onComplete: () => {
          gsap.to(span, {
            color: '#8f2536',
            duration: 0.5,
            delay: 0.5,
          });
        },
      });
    });
  }, []);

  return (
    <nav className='flex justify-between items-center absolute top-12 left-0 px-6 md:px-32 w-full z-50'>
        <div className={`${niconne.className} text-4xl animated-text`}>
            Alfred
        </div>
        {/* <span>A</span> */}
    </nav>
  )
}

