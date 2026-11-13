import React from 'react'
import { Container, Button } from 'react-bootstrap'

function Hero() {
  return (
    <div className='hero-section'>
      <Container>
        <h1>Find the Perfect Vehicle for Your Journey</h1>

        <p>
          Explore our collection of vehicles and enjoy a
          comfortable and convenient rental experience.
        </p>

        <Button variant="primary">
          Explore Vehicles
        </Button>
      </Container>
    </div>
  )
}

export default Hero
