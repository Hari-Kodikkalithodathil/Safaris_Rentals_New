import React from 'react'
import Hero from '../components/Hero'
import VehicleSearch from '../components/VehicleSearch'
import FeaturedVehicles from '../components/FeaturedVehicles'
import WhyChooseUs from '../components/WhyChooseUs'

function Home() {
  return (
    <div>
      <>
        <Hero />
        <VehicleSearch />
        <FeaturedVehicles />
        <WhyChooseUs />
      </>
    </div>
  )
}

export default Home
