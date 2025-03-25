import React from 'react'
import MainSlider from '../components/MainSlider'
import OurServices from '../components/OurServices'
import ServiceProvideCommit from '../components/ServiceProvideCommit'
import MarketTrends from '../components/MarketTrends'
import DigitalSolutions from '../components/DigitalSolutions'
import ServicesSlider from '../components/ServicesSlider'


function Home() {
  return (
    <div>
        <MainSlider />
        <OurServices />
        <ServicesSlider />
        <ServiceProvideCommit />
        <MarketTrends />
        <DigitalSolutions />
    </div>
  )
}

export default Home