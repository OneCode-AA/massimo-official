import Header from '@/components/Header'
import Main from '@/components/Main'
import React from 'react'

function Home() {
  return (
    <div className='wrapper mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Main />
      </div>


    </div>
  )
}

export default Home