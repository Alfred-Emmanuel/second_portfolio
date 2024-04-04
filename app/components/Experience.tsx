import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
    weight: '400',
    subsets: ['latin'],
})

const experience: { company: string, title: string, period: string, description: string, techStack: string, className: string }[] = [
    {
        company: 'Gahd.ar',
        title: "Full stack web developer",
        period: "Jul 2023 - Oct 2023 (Contract)",
        description: "Enhanced existing front and backend implementations while spearheading the introduction of innovative solutions.",
        techStack: "CakePHP. Bootstrap. Javascript. HTML. CSS",
        className: "md:w-[60%] lg:w-[90%] h-[80%]"
    },
    {
        company: 'Pepnops',
        title: "Intermediate Frontend Developer",
        period: "2022 - Jun 2023",
        description: "Led the development of the company's website frontend, fostering collaboration with designers and backend developers to ensure seamless integration.",
        techStack: "React. CSS. HTML. JavaScript",
        className: " md:w-[60%] lg:w-[90%] lg:relative top-28"
    },
    {
        company: 'Strictly Dev',
        title: "Junior Frontend Developer",
        period: "2020 - 2022",
        description: "Initiated as a junior developer, assumed responsibility for guiding interns and facilitating their understanding of development processes and practices.",
        techStack: "HTML, CSS, Javascript",
        className: "md:w-[60%] lg:w-[90%] lg:relative bottom-16"
    }
];

const Experience = () => {
    return (
        <div className='lg:grid grid-cols-2 gap-4'>
            {experience.map((exp, index) => (
                <div key={index} className={`mt-10 border-[3px] rounded-3xl ${exp.className}`}>
                    <div className='h-[15%] border-b-[3px] flex items-center justify-between px-4 py-2 rounded-t-3xl'>
                        <p className='text-5xl'>&#8226;&#8226;&#8226;</p>
                        <p>{exp.period}</p>
                    </div>
                    <div className='my-4 px-3'>
                        <h1 className='text-2xl'>
                            {exp.company} - {exp.title},
                        </h1>
                        <p className='mt-4 font-light'>
                            <span className={montserrat.className}>
                                {exp.description}
                            </span>
                        </p>
                    </div>
                    <div className={`h-[15%] border-t-[1px] flex items-center px-3 py-2 ${montserrat.className}`}>
                        <p className='text-[0.8rem]'>{exp.techStack}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience
