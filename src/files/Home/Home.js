import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css';
import image from '../../image/LRM_EXPORT_8707955549019_20190417_213251258-removebg-preview.png'
import Navigation from './navigation/Navigation';

const Home = () => {
  return (
    <Container className='all' data-aos="fade-up-right">
      <Navigation ></Navigation>
      <Row className="home" >
        <Col sm={12} md={10} lg={5} data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <Image src={image} roundedCircle fluid className='img' />
        </Col>
        <Col data-aos="fade-left" data-aos-offset="300"
          data-aos-easing="ease-in-sine" sm={12} md={12} lg={6} style={{ textAlign: 'left' }}>
          <h6 style={{ color: '#9C9C9C', marginTop: '5px' }}>MERN Stack-developer</h6>
          <h1 style={{ color: 'white', fontWeight: '700', fontSize: '60px' }}>Masud Rana</h1>
          <p style={{ color: 'white' }}>Familiar With MERN stack development and have done several projects using MongoDB, Express, React, and Node. I'm currently seeking For an internship that will help me grow as a developer and improve my skills.I have always been curious and passionate about web development. As a result, I started learning web development. After 6 months of my web development course, I have done several demo projects and gained experience in MERN stack development.</p>
          <Col>
            <a href="https://drive.google.com/file/d/1SYCeJ6GWn_i5f1pmK9kk7NFRzznquNcm/view?usp=sharing" download>
              <button className="resume">Download Resume</button>
            </a>
            <a href="/contract">
              <button className="contact">Contract</button>
            </a>

          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;