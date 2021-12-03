import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Navigation from '../Home/navigation/Navigation';

const Blog = () => {
  return (
    <Container className='all' data-aos="fade-up-right">
      <Navigation></Navigation>
      <hr style={{ color: 'white', border: '1px solid ' }} />
      <Col data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" style={{ textAlign: 'left', marginLeft: '20px' }}>
        <h5 style={{ color: '#9C9C9C', marginTop: '40px', fontWeight: '700' }}>My Blog</h5>
        <h1 style={{ color: 'white', marginBottom: '40px', fontWeight: '700', fontSize: '50px' }}>My recent Blogs</h1>
      </Col>
      <hr style={{ color: 'white', border: '1px solid ' }} />
      <h1 style={{color:'white'}}>Blogs coming soon...</h1>
      
  </Container>
  );
};

export default Blog;