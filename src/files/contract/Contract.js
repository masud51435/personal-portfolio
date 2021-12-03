import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Navigation from '../Home/navigation/Navigation';
import phone from '../../image/icons8-cell-phone-64.png';
import location from '../../image/icons8-location-40.png';
import mail from '../../image/icons8-mail-144.png';
import emailjs from 'emailjs-com';

const Contract = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_zoavlct',
      'template_8uggijm',
      e.target,
      'user_vIwF8ZKbWSnxR8jMn6UQ4').then(res => {
        console.log(res);
        document.getElementById("myForm").reset();
      }).catch(err=>console.log(err))
}


  return (
    <Container className='all' data-aos="fade-up-right">
      <Navigation ></Navigation>

      <hr style={{ color: 'white', border: '1px solid ' }} />
      <Col style={{ textAlign: 'left', marginLeft: '20px' }}>
        <h5 style={{ color: '#9C9C9C', marginTop: '40px', fontWeight: '700' }}>Contract Me</h5>
        <h1 style={{ color: 'white', marginBottom: '40px', fontWeight: '700', fontSize: '50px' }}>Contract me to get your work done</h1>
      </Col>
      <hr style={{ color: 'white', border: '1px solid ' }} />

      <Row className='my-5'>
        <Col sm={12} md={12} lg={4} data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <Col style={{ display: 'flex', marginBottom: '20px' }}>
            <Col>
              <Image src={phone} style={{ width: '50px' }} />
            </Col>
            <Col style={{ textAlign: 'left', color: 'white' }}>
              <h5>Call Me</h5>
              <h6>+88 01829346266</h6>
            </Col>
          </Col>

          <Col style={{ display: 'flex',marginBottom: '20px' }}>
            <Col><Image src={mail} style={{ width: '50px' }} /></Col>
            <Col style={{ textAlign: 'left', color: 'white' }}>
              <h5>Email me</h5>
              <h6>masudrana82955@gmail.com</h6>
            </Col>
          </Col>

          <Col style={{ display: 'flex', marginBottom: '40px' }}>
            <Col><Image src={location} style={{ width: '50px' }} /></Col>
            <Col style={{ textAlign: 'left', color: 'white' }}>
              <h5>Address</h5>
              <h6 >Ullapara, Sirajganj</h6>
            </Col>
          </Col>
        </Col>
        <Col sm={12} md={12} lg={8} data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h3 style={{ color: 'white' }}>How Can I Help You?</h3>
          <form id='myForm' onSubmit={sendEmail} style={{marginLeft:'160px'}}>
            <input type="text" name="name" placeholder="Full Name" required className="w-75  mt-4 form-control" />
            
            <input type="email" name="email" id="email" placeholder="Email Address" required className="w-75 mt-4 form-control" />
            
            <input type="number" name="number" id="name" placeholder="Phone Number" required className="w-75 mt-4 form-control" />

            <textarea name="message" id="" cols="30" rows="7" placeholder="Message" required className='w-75 mt-4 form-control'></textarea>
            <br />
            <button type='submit' className="resume  w-75 form-control">send message</button>
          </form>
        </Col>
      </Row>

    </Container>
  );
};

export default Contract;