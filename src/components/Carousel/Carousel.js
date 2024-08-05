import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ClinicCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img1.jpg'
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img2.jpg'
          alt="Second slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img3.jpg'
          alt="Third slide"
        />
       </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img4.jpg'
          alt="Third slide"
        />
       </Carousel.Item>


       <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img5.jpg'
          alt="Third slide"
        />
       </Carousel.Item>



       <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img6.jpg'
          alt="Third slide"
        />
       </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img7.jpg'
          alt="Third slide"
        />
       </Carousel.Item>
       

 

      
      
   

      

    </Carousel>
    
  );
}

export default ClinicCarousel;
