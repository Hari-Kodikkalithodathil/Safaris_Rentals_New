import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function VehicleSearch() {

    const [searchData, setSearchData]= useState({
        pickupDateTime : "",
        returnDateTime : "",
    })

    function handleChange(event){
        const {name, value}=event.target

        setSearchData({
            ...searchData,
            [name]:value
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        if (returnDateTime < currentDateTime){
            alert("Pickup datetime cannot be in the past")
        }

        if (new Date(searchData.returnDateTime) <= new Date(searchData.pickupDateTime)){
            alert("Return datetime should be after pickup datetime")
            return
        }

        console.log("Search Criteria : ",searchData)
    }

  return (
    <div className='vehicle-search-div'>
      <Container>
        <h2 className="text-center mb-4">Find Your Vehicle</h2>

        <Form onSubmit={handleSubmit}>
          <Row className="align-items-end g-3">

            

            <Col md={3}>
              <Form.Group>
                <Form.Label>Pickup Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="pickupDateTime"
                  value={searchData.pickupDateTime}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Label>Return Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="returnDateTime"
                  value={searchData.returnDateTime}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={2}>
              <Button type="submit" variant="primary" className="w-100">
                Search
              </Button>
            </Col>

          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default VehicleSearch
