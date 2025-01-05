import { LinkOutlined } from '@mui/icons-material'
import { Link } from '@mui/material'
import React from 'react'


const experiences = [
  {
    id: 1,
    duration: 'Sep 2024 — Present',
    title: 'Full-Stack Web Developer',
    company: 'The Two Migrations',
    linkUrl: 'http://thetwomigrations.com/',
    description:
      'Build and maintain website and other web applications linked to the company, responsible for both the backend and frontend.',
    technologies: [
      { id: 1, name: 'HTML, CSS & JavaScript' },
      { id: 2, name: 'React/Next.js' },
      { id: 3, name: 'Node.js' },
      { id: 4, name: 'Database (MongoDB)' },
    ],
  },

  {
    id: 2,
    duration: 'May 2024 — Present',
    title: 'Software Developer',
    company: 'CourseCareer',
    linkUrl: '',
    description:
      '',
    technologies: [
      { id: 1, name: 'HTML & CSS' },
      { id: 2, name: 'Javascript' },
      { id: 3, name: 'React' },
      { id: 4, name: 'Next.js' },
      { id: 5, name: 'Go(lang)'},
      { id: 6, name: 'Algorithm' },
      { id: 7, name: 'Data Structures'},
      { id: 8, name: 'Software Development Best Practices' },
    ],
  },
  

  {
    id: 3,
    duration: 'Oct 2023 — Present',
    title: 'Front-End Engineer',
    company: 'Codecedemy',
    linkUrl: '',
    description:
      '',
    technologies: [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'Javascript' },
      { id: 4, name: 'React' },
    ],
  },

  {
    id: 4,
    duration: '2023 — 2024 ',
    title: 'Front-End Engineer',
    company: 'Coursera',
    linkUrl: '',
    description:
      '',
    technologies: [
      { id: 1, name: 'HTML, CSS & JavaScript' },
      { id: 2, name: 'React' },
      { id: 3, name: 'UI/UX Design' },
    ],
  },

  {
    id: 5,
    duration: '2016 — 2017',
    title: 'Web Developer Student',
    company: 'PGCC',
    linkUrl: '',
    description:
      'Created static Webpages from scratch using notepad and opened them on the browser',
    technologies: [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'Notepad' },
      { id: 3, name: 'Browser' },
    ],
  },
];


function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">

<article className=" section-title sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">

<h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">Experience</h2>
</article>

<article>

<ol className="experience-ol">
          {experiences.map((experience) => (
            <li className="experience-li mb-12" key={experience.id}>
              <section className="exp-container relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <article className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></article>

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={experience.duration}
                >
                  {experience.duration}
                </header>

                <article className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug">
                    <section>
                      <p className="inline-flex items-baseline font-medium leading-tight focus-visible:text-teal-300 group/link text-base">
                        <span>

                          {experience.title} · <a
                            className=""
                            href={`${experience.linkUrl}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                          >
                            <span className="company-name inline-block">
                              {experience.company}
                            </span>
                          </a>
                        </span>
                      </p>
                    </section>
                  </h3>

                  <p className="mt-2 text-sm leading-normal">
                    {experience.description}
                  </p>
                  <ul
                    className="tech-ul mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {experience.technologies.map((tech) => (
                      <li className="mr-1.5 mt-2" key={tech.id}>
                        <section className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 ">
                          {tech.name}
                        </section>
                      </li>
                    ))}
                  </ul>
                </article>
              </section>
            </li>
          ))}
        </ol>


<section className="mt-12">
<Link href="/resume.pdf" target="_blank"
rel="noreferrer noopener" aria-label="View Full Resume (opens in a new tab)"
className="inline-flex items-baseline no-underline font-medium leading-tight group/link text-base" >
<span>View My Full <span className="inline-block"> Resume <LinkOutlined/>  </span>
</span>
</Link>
</section>
</article>
</section>

  )
}

export default Experience