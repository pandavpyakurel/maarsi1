import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <>
          <Navbar/> 
          <Carousel/>
          <Card/> 
          <Trending/>
          <Footer/>
        </>
    )
}

export default Home
