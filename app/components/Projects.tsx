import { Montserrat, Catamaran } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { MoveUpRight, Github } from 'lucide-react'

const montserrat = Montserrat({ 
    weight: '400',
    subsets: ['latin'],
  })

  const catamaran = Catamaran({ 
    weight: '800',
    subsets: ['latin'],
  })

  const projects = [
    {
        imageSrc: "/candidly_hero.png",
        projectLink: "https://candidly-joker-unchained.vercel.app/",
        githubLink: "https://github.com/Alfred-Emmanuel/Candidly_app",
        title: "Candidly",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quia autem qui! Ipsa, odit cumque.",
        tags: ["Next.js", "Node.JS", "Express.JS", "MongoDB", "AWS S3", "Tailwind CSS"]
    },
    {
        imageSrc: "/getlinked_hero.png",
        projectLink: "https://coding-challenge-joker-unchained.vercel.app/",
        githubLink: "https://github.com/Alfred-Emmanuel/getLinked_Challenge/tree/main/coding_challenge",
        title: "GetLinked",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quia autem qui! Ipsa, odit cumque.",
        tags: ["Next.js", "Tailwind CSS"]
    },
    {
        imageSrc: "/firstPortfolio_hero.png",
        projectLink: "https://alfred-tech.netlify.app/",
        githubLink: "https://github.com/Alfred-Emmanuel/my-portfolio/tree/master/v1",
        title: "First Portfolio",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quia autem qui! Ipsa, odit cumque.",
        tags: ["HTML 5", "CSS 3", "Javascript"]
    },
];

const Projects = () => {
  return (
    <>
        <div className='flex justify-between'>
            <div className='md:w-[50%]'>
                <h1 className={`text-5xl font-bold mb-8`}>Projects.</h1>
                <p className={`leading-8 ${montserrat.className}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione consequatur modi asperiores iure alias, perferendis laboriosam non repudiandae provident voluptate, repellendus qui porro doloremque.
                </p>
            </div>
        </div>
        <div className='mt-10'>
        {projects.map((project, index) => (
            <div key={index} className='flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-between mt-16 md:mt-10'>
                <div className='w-[60%] md:w-[45%]'>
                    <Image
                        src={project.imageSrc}
                        alt="Project"
                        width={500}
                        height={50}
                    />
                </div>
                <div className='md:w-[50%]'>
                    <div className='flex justify-between items-baseline w-[85%]'>
                        <Link href={project.projectLink} target='_blank' className={`mb-5 text-2xl md:text-3xl flex items-center gap-1`}>
                            <span>{project.title}</span>
                            <span><MoveUpRight size={15}/></span>
                        </Link>
                        <Link href={project.githubLink} target='_blank'>
                            <Github size={20}/>
                        </Link>
                    </div>
                    
                    <div className={`w-[90%] ${montserrat.className}`}>
                        <p className={`mb-3`}>{project.description}</p>
                    </div>
                    <div className='mt-5 flex flex-wrap items-center gap-3 w-[90%]'>
                        {project.tags.map((tag, index) => (
                            <div key={index} className='rounded-full bg-white text-[#2C2A32] flex items-center justify-center w-auto text-[0.75rem] p-1'>{tag}</div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
        </div>
    </>
  )
}

export default Projects
