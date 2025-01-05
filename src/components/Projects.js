import Image from 'next/image';
import { LinkOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from '@mui/material';


const projects = [
    {
      id: 1,
      image: '/todo-2k25.png',
      name: 'Todo App 2K25',
      linkurl: 'www.todo-app-2k25.vercel.app/',
      description: 'Forget alot? bad with time management? so am i, so i created an app to help us both. my new task manager app.',
      technologies: [
      { id: 1, name: 'Next.js' },
    ],
  }, 
//   {
//       id: 2,
//       image: '',
//       name: 'project2',
//       linkurl: '',
//       description: 'project description',
//       technologies: [
//       { id: 1, name: 'HTML & CSS' },
//       { id: 2, name: 'Javascript' },
//       { id: 3, name: 'React' },
//       { id: 4, name: 'Next.js' },
//       { id: 5, name: 'Go(lang)'},
//       { id: 6, name: 'Algorithm' },
//       { id: 7, name: 'Data Structures'},
//       { id: 8, name: 'Software Development Best Practices' },
//     ],
//   },
//    {
//       id: 3,
//       image: '',
//       name: 'project3',
//       linkurl: '',
//       description: 'project description',
//       technologies: [
//       { id: 1, name: 'HTML & CSS' },
//       { id: 2, name: 'Javascript' },
//       { id: 3, name: 'React' },
//       { id: 4, name: 'Next.js' },
//       { id: 5, name: 'Go(lang)'},
//       { id: 6, name: 'Algorithm' },
//       { id: 7, name: 'Data Structures'},
//       { id: 8, name: 'Software Development Best Practices' },
//     ],
//   }, 
];

function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
    <article className="section-title sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
    </article>

    <article>
        <ul className="projects-ul">
            {projects.map((project) => (
            <li className="mb-12" key={project.id}>
                <section className="project relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                
                <article className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>

                </article>

                <article className='z-10 sm:order-2 sm:col-span-6'>
                    <h3 className="">
                    <a className="inline-flex items-baseline font-medium leading-tight focus-visible:text-teal-300  group/link text-base" href={`#`} target="_blank" rel="noreferrer noopener" aria-label={`${project.name}(opens in a new tab)`} >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>{project.name} <span className="inline-block"> <LinkOutlined/>  </span>
                    </span>
                    </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{project.description}</p>
                    <ul className="project-ul mt-2 flex flex-wrap" aria-label="Technologies used:">
                        {project.technologies.map((tech) => (
                        <li className="mr-1.5 mt-2" key={tech.id}>
                        <article className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 ">
                        {tech.name}   
                        </article>
                        </li>

                        ))}
                    
                    </ul>
                </article>

                <Image 
                src={`${project.image}`} 
                alt={`${project.name}`} 
                width={200} 
                height={48} 
                loading="lazy" 
                decoding="async" 
                data-nimg="1" 
                className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent"/>

                </section>
            </li>
            ))}
        </ul>

        <section className="mt-12">
            <Link className="inline-flex items-center font-medium leading-tight no-underline group" aria-label="View Full Project Archive" href="../pages/archive.js">
            <span>
                <span className=" pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View Full Project </span><span className="whitespace-nowrap">
                        <span className=" pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                            Archive
                            </span> <LinkOutlined/> </span>
                            </span>
                           </Link>
                            </section>


    </article>

    </section>
  )
}

export default Projects