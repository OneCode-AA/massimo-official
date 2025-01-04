import { ArrowLeft, LinkOutlined } from '@mui/icons-material'
import React from 'react'
import Link from 'next/link'


const archieves = [
    {
      id: 1,
      year: '',
      name: '',
      where: '',
      linkurl: '',
      technologies: [
      { id: 1, name: 'HTML & CSS' },
      { id: 2, name: 'Javascript' },
      { id: 3, name: 'React' },
      { id: 4, name: 'Next.js' },
    ],
  }, 
]

function Archive() {
  return (
    <section className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        
        <Link href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</Link>

    <article className="lg:py-24">
    
    <Link className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">

     <ArrowLeft/>
    Brittany Chiang

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
    {archieves.map((archieve) => (
    <tr className="border-b border-slate-300/10 last:border-none" key={archieve.id}>
    <td className="py-4 pr-4 align-top text-sm">
    <section className="translate-y-px">
    {archieve.year}
    </section>
    </td>
    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
    <section>
    <article className="block sm:hidden">
    <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base" href={`${archieve.linkurl}`}
    target="_blank" rel="noreferrer noopener" aria-label="Emerson Collective (opens in a new tab)">
    <span>
    {archieve.name}
    <span className="inline-block">
    <LinkOutlined/>
    </span>
    </span>
    </Link>
    </article>
    <article className="hidden sm:block">
    {archieve.name}
    </article>
    </section>
    </td>
    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
    <section className="translate-y-px whitespace-nowrap">
    {archieve.where}
    </section>
    </td>
    <td className="hidden py-4 pr-4 align-top lg:table-cell">
    <ul className="flex -translate-y-1.5 flex-wrap">
    {archieve.technologies.map((tech) => (
    <li className="my-1 mr-1.5" key={tech.name}>
    <section className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
 
    </section>
    </li>
    ))}
    </ul>
    </td>
    <td className="hidden py-4 align-top sm:table-cell"><ul className="translate-y-1">
        <li className="mb-1 flex items-center">
            <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm" href={`${archieve.linkurl}`} target="_blank" rel="noreferrer noopener" aria-label="emersoncollective.com (opens in a new tab)">
            <span> 
                <span className="inline-block">
                    {archieve.name}
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