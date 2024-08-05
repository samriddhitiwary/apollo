import React from 'react';
import Header  from './components/Header/Header';
import ClinicCarousel from './components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Appoinments from './components/Appoinments/Appoinments';
import WhyChoose from './components/WhyChoose/WhyChoose';
function App() {
  return (
    <>
    <Header></Header>
    <ClinicCarousel></ClinicCarousel>   
    <Appoinments></Appoinments>
    <WhyChoose></WhyChoose>
    </>
    
    
  );
}

export default App;
