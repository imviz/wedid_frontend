import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavBar from '../components/NavBar'
import VerifyServiceEmploye from '../components/VerifyService/VerifyServiceEmploye'


function VerifyServiceEmployeePage() {
  return (
    <div>
        <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>

            <Col lg={11}>
       
                < VerifyServiceEmploye />
                
            </Col>
            
        </Row>   
    </div>
  )
}

export default VerifyServiceEmployeePage