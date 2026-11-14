import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WhyChooseUs() {

    const benefits = [
    {
      id: 1,
      title: 'Wide Vehicle Selection',
      description: 'Choose from a variety of vehicles to suit your journey.',
      icon: '🚗',
    },
    {
      id: 2,
      title: 'Affordable Pricing',
      description: 'Enjoy transparent and competitive rental rates.',
      icon: '💰',
    },
    {
      id: 3,
      title: 'Reliable Vehicles',
      description: 'Travel with well-maintained and reliable vehicles.',
      icon: '🛡️',
    },
    {
      id: 4,
      title: 'Easy Booking',
      description: 'Book your preferred vehicle with ease and convenience.',
      icon: '📅',
    },
  ]

  return (
    <div className='why-choose-us-div'>
        <Container>
            <h2 className='text-center mb-4'>Why Choose Safaris Rentals</h2>
            <Row className='g-4'>
                {benefits.map((benefit)=>(
                    <Col key={benefit.id} xs={12} sm={6} lg={3}>
                    <Card style={{ width: '18rem' }} className='benefit-card h-100'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <div className='benefit-icon'>
                            {benefit.icon}
                        </div>
                        <Card.Title>{benefit.title}</Card.Title>
                        <Card.Text>
                            {benefit.description}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}

            </Row>
        </Container>
    </div>
  )
}

export default WhyChooseUs
