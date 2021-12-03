import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Navigation from '../Home/navigation/Navigation';
import image from '../../image/LRM_EXPORT_8707955549019_20190417_213251258-removebg-preview.png';

const AboutMe = () => {
  return (
    <Container className='all' data-aos="fade-up-right">
      <Navigation ></Navigation>

      <hr style={{ color: 'white', border: '1px solid ' }} />
      <Col style={{ textAlign: 'left', marginLeft: '20px' }}>
        <h5 style={{ color: '#9C9C9C', marginTop: '40px', fontWeight: '700' }}>Profile</h5>
        <h1 style={{ color: 'white', marginBottom: '40px', fontWeight: '700', fontSize: '50px' }}>All about me</h1>
      </Col>
      <hr style={{ color: 'white', border: '1px solid ' }} />
      <Row style={{marginLeft:'10px', marginRight:'10px', marginTop:'50px'}}>
        <Col sm={12} md={12} lg={5} data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
        <h1 style={{ color: 'white', fontWeight: '700', fontSize: '30px' }}>About me</h1>
          <p style={{ color: 'white' }}>Familiar With MERN stack development and have done several projects using MongoDB, Express, React, and Node. I'm currently seeking For an internship that will help me grow as a developer and improve my skills.I have always been curious and passionate about web development. As a result, I started learning web development. After 6 months of my web development course, I have done several demo projects and gained experience in MERN stack development.</p>
        </Col>

        <Col sm={12} md={12} lg={4} data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <Image src={image} roundedCircle fluid className='img' />
        </Col>

        <Col sm={12} md={12} lg={2} style={{color:'white', alignItems:'left'}} data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h1 style={{ color: 'white', fontWeight: '700', fontSize: '30px' }}>Details</h1>
          <h5>Name:</h5>
          <h6>Md Masud Rana</h6>
          <h5>Age:</h5>
          <h6>21 Years</h6>
          <h5>Location:</h5>
          <h6>Ullapara, Sirajganj</h6>
        </Col>
      </Row>

    </Container>
  );
};

export default AboutMe;