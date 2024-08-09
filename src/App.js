  import React from 'react';
  import Header  from './components/Header/Header';
  import ClinicCarousel from './components/Carousel/Carousel';
  import 'bootstrap/dist/css/bootstrap.css';
  import Appoinments from './components/Appoinments/Appoinments';
  import WhyChoose from './components/WhyChoose/WhyChoose';
  import Speciality from './components/Speciality/Speciality';
  import { Navbar } from 'react-bootstrap';
  import MiniNavbar from './components/MiniNavbar/MiniNavbar';
  import Procedures from './components/Procedures/Procedures';
  import ProHealth from './components/ProHealth/ProHealth';

  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hospitals from './components/Hospitals/Hospitals';
import FooterAppointments from './components/FooterAppointments/FooterAppointments';

  function App() {
    return (
      <>
      <Header></Header>
      <ClinicCarousel></ClinicCarousel>   
      <Appoinments></Appoinments>
      
      <Router>
        <div>
          <MiniNavbar />
          <br />
          <Routes>
            <Route path="/speciality" element={<Speciality />} />
            <Route path="/procedures" element={<Procedures />} />
            <Route path="/prohealth" element={<ProHealth />} />
            <Route path="/" element={<Speciality />} /> 
          </Routes>
        </div>
      </Router>
      <br></br>
      <br></br>
      <WhyChoose></WhyChoose>
      <Hospitals></Hospitals>
      <FooterAppointments></FooterAppointments>
      </>
      
      
    );
  }

  export default App;
