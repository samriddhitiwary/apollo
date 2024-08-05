import React from 'react'
import Button from 'react-bootstrap/Button';
import './Appoinments.css';

const Appoinments = () => {
  return (
    <div className='app'>
        <br></br>
        <Button className='but' variant="light">
            <img src='images/Appointments/img1.svg'></img>
            <p>Book Appointment</p>
        </Button> 

        <Button className='but' variant="light">
            <img src='images/Appointments/img2.svg'></img>
            <p>Book Appointment</p>
        </Button> 

        <Button className='but' variant="light">
            <img src='images/Appointments/img3.svg'></img>
            <p>Book Health Check Up</p>
        </Button> 

        <Button className='but' variant="light">
            <img src='images/Appointments/img4.svg'></img>
            <p>Book Appointment</p>
        </Button> 

        <Button className='but' variant="light">
            <img src='images/Appointments/img5.svg'></img>
            <p>Book Appointment</p>
        </Button> 

        <Button className='but' variant="light">
            <img src='images/Appointments/img6.svg'></img>
            <p>Book Appointment</p>
        </Button> 
        
        

        
    </div>
  )
}

export default Appoinments