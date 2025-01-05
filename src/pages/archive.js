import { ArrowLeft, LinkOutlined } from '@mui/icons-material'
import React from 'react'
import Link from 'next/link'
import '../app/globals.css';


const archives = [
    {
      id: 1,
      year: '2024',
      name: 'todo-app',
      where: '',
      linkurl: 'https://todo-app-self-kappa-88.vercel.app/',
      technologies: [
      { id: 1, name: 'React' },
      
    ],
  }, 
]

function Archive() {
  return (
    <section className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">

    <article className="lg:py-24">
    
    <Link  href="/" className="group mb-2 inline-flex justify-center items-center font-semibold leading-tight text-teal-300">

     <ArrowLeft/>
   Mohamed Jalloh

    </Link>
  
    
  

    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
    All Projects
    </h1>

    <table id="content" className="mt-12 w-full border-collapse text-left">

    <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
    <tr>
    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
    Year
    </th>
    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
    Project
    </th>
    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
    Made at
    </th>
    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
    Built with
    </th>
    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
    Link
    </th>
    </tr>
    </thead>
    <tbody>
    {archives.map((archive) => (
    <tr className="border-b border-slate-300/10 last:border-none" key={archive.id}>
    <td className="py-4 pr-4 align-top text-sm">
    <section className="translate-y-px">
    {archive.year || "N/A"}
    </section>
    </td>
    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
    <section>
    <article className="block sm:hidden">
    <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
     href={`${archive.linkurl}`}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={`${archive.name} (opens in a new tab)`}
    >
    <span>
    {archive.name}
    <span className="inline-block">
    <LinkOutlined/>
    </span>
    </span>
    </Link>
    </article>
    <article className="hidden sm:block">
    {archive.name}
    </article>
    </section>
    </td>
    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
    <section className="translate-y-px whitespace-nowrap">
    {archive.where || "N/A"}
    </section>
    </td>
    <td className="hidden py-4 pr-4 align-top lg:table-cell">
    <ul className="flex -translate-y-1.5 flex-wrap">
    {archive.technologies.map((tech) => (
    <li className="my-1 mr-1.5" key={tech.id}>
    <section className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
    {tech.name}
 
    </section>
    </li>
    ))}
    </ul>
    </td>
    <td className="hidden py-4 align-top sm:table-cell"><ul className="translate-y-1">
        <li className="mb-1 flex items-center">
            <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm" href={`${archive.linkurl}`} target="_blank" rel="noreferrer noopener" aria-label="emersoncollective.com (opens in a new tab)">
            <span> 
                <span className="inline-block">
                    {archive.name}
                   <LinkOutlined/>
                </span>
                </span>
                </Link>
                </li>
                </ul>
    </td>
    </tr>
    ))}
    </tbody>
    </table>
    </article>
    </section>
  )
}

export default Archive