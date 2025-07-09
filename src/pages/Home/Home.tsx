import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Offer from '../../components/Offer/Offer'
import Trending from '../../components/Trending/Trending'
import Experience from '../../components/Experience/Experience'
import Footer from '../../components/Footer/Footer'
import Frequent from '../../components/Frequent/Frequent'

const Home : React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>    
      <Offer/>
      <Trending/>
      <Experience/>
      <Frequent/>
      <Footer/>
    </div>
  )
}

export default Home
