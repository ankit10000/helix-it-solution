import React from 'react'
import MainSlider from '../components/MainSlider'
import OurServices from '../components/OurServices'
import ServiceProvideCommit from '../components/ServiceProvideCommit'
import Portfolio from '../components/Portfoilio'
import MarketTrends from '../components/MarketTrends'
import DigitalSolutions from '../components/DigitalSolutions'


function Home() {
  return (
    <div>
        <MainSlider />
        <ServiceProvideCommit />
        <OurServices />
        <MarketTrends />
        <Portfolio />
        <DigitalSolutions />
    </div>
  )
}

export default Home