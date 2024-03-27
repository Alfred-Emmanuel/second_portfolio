import React from 'react'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ 
    weight: '400',
    subsets: ['latin'],
  })

const experience: { company: string, title: string, period: string, description: string, techStack: string, className: string, }[] = [
  {
    company: 'Gahd.ar',
    title: "Full stack web developer",
    period: "2020 - 2024",
    description: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, blanditiis eaque cumque sint numquam aliquam ipsam quis doloremque ullam, ratione perferendis et totam. Porro hic quibusdam molestias vero, officiis a.",
    techStack: "CakePHP. Bootstrap. Javascript. HTML. CSS",
    className: "md:absolute md:w-[30%]"
  },
  {
    company: 'TechHub',
    title: "Frontend Developer",
    period: "2018 - 2020",
    description: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, architecto!",
    techStack: "React. CSS. HTML. JavaScript",
    className: "md:absolute right-56 md:w-[30%] h-auto top-16"
  },
  {
    company: 'DataSolutions',
    title: "Data Analyst",
    period: "2016 - 2018",
    description: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, blanditiis eaque cumque sint numquam aliquam ipsam quis doloremque ullam, ratione perferendis et totam. Porro hic quibusdam molestias vero, officiis a.",
    techStack: "Python. SQL. Excel",
    className: "md:absolute right-72 bottom-16 md:w-[30%]"
  }
];

const Projects = () => {
  return (
    <>
    {experience.map((exp, index) => (
        <div key={index} className={`mt-10 border-[3px] rounded-3xl ${exp.className}`}>
          <div className='h-[15%] border-b-[3px] flex items-center justify-end px-4 py-2 rounded-t-3xl'>
            <p>{exp.period}</p>
          </div>
          <div className='my-4 px-3'>
            <h1 className='text-2xl'>
              {exp.company} - {exp.title},
            </h1>
            <p className='mt-4 font-light'>
              <span className={inter.className}>
                {exp.description}
              </span>
            </p>
          </div>
          <div className={`h-[15%] border-t-[1px] flex items-center px-3 py-2 ${inter.className}`}>
            <p className='text-[0.8rem]'>{exp.techStack}</p>
          </div>
        </div>
      ))}
      </>
  )
}

export default Projects
