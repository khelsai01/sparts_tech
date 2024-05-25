import React from 'react'
import Header from './Header'
import TopHero from './TopHero'
import BottomHero from './BottomHero'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='flex flex-col gap-0 relative'>
          <Header />
          <TopHero />
          <BottomHero />
          <Footer />
    </div>
  )
}

export default Home
