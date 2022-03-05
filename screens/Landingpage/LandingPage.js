import React from 'react'
import { Button, Container,Row } from 'react-bootstrap'
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                    <h1 className='title'>Welcome to SMU Tutoring Platform</h1>
                </div>
                <div className='buttonContainer'>
                    <a href='/login'>
                        <Button 
                        size='lg' 
                        className='landingbutton'>
                            Login
                        </Button>
                    </a>
                    <a href='/register'>
                        <Button 
                         size='lg' 
                         className='landingbutton' 
                         variant='outline-primary'
                         >
                         Signup
                        </Button>
                    </a>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage