import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function FeaturedVehicles() {

    const vehicles = [
    {
      id: 1,
      name: 'Toyota Innova Crysta',
      seatingCapacity: 7,
      dailyRate: 3500,
    },
    {
      id: 2,
      name: 'Hyundai Creta',
      seatingCapacity: 5,
      dailyRate: 2500,
    },
    {
      id: 3,
      name: 'Maruti Suzuki Swift',
      seatingCapacity: 5,
      dailyRate: 1500,
    },
    {
      id: 4,
      name: 'Toyota Fortuner',
      seatingCapacity: 7,
      dailyRate: 4500,
    },
  ]

  return (
    <div className='featured-vehicles-div'>
      <Container>
        <h2 className='text-center'>Featured Vehicles</h2>
        <Row >
            {vehicles.map((vehicle)=>(
                <Col key={vehicle.id} sm="12" md="6" lg="3">
                    <Card style={{ width: '18rem' }} className='vehicle-card'>
                        <div className='vehicle-image-placeholder'></div>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{vehicle.name}</Card.Title>
                            <Card.Text>
                                {vehicle.seatingCapacity} seats
                                <br />
                                <strong>Daily Rate : </strong>
                                {vehicle.dailyRate.toLocaleString("en-IN")}
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            
        </Row>
    </Container>
    </div>
  )
}

export default FeaturedVehicles
