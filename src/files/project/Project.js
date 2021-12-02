import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Home/navigation/Navigation';
import Item from './item/Item';


const projects = [
  { name: 'Food Network', img: 'https://i.ibb.co/nR7Q7T2/Screenshot-67.png', live:'https://masud51435.github.io/food-network-portfolio/index.html', gitClient:'https://github.com/masud51435/food-network-portfolio' },
  { name: 'Football Site', img: 'https://i.ibb.co/CpyLS1p/Screenshot-66.png', live:'https://masud51435.github.io/RESPONSIVE-FOOTBALL/', gitClient:'https://github.com/masud51435/RESPONSIVE-FOOTBALL' },
  { name: 'Honda CBR', img: 'https://i.ibb.co/FxnYn6P/Screenshot-65.png', live:'https://festive-beaver-5f6f64.netlify.app/', gitClient:'https://github.com/programming-hero-web-course2/honda-cbr-bootstrap-assignment-masud51435' },
  { name: 'Macbook Shop', img: 'https://i.ibb.co/q0dgh3B/Screenshot-64.png', live:'https://compassionate-johnson-a34ed8.netlify.app/', gitClient:'https://github.com/programming-hero-web-course2/mac-book-pro-masud51435' },
  { name: 'Aelkya Yoga ', img: 'https://i.ibb.co/m42NgwQ/Screenshot-63.png', live:'https://yoga-side.web.app/', gitClient:'https://github.com/masud51435/yoga-site' },
  { name: 'Jewelry shop', img: 'https://i.ibb.co/3YJPV4c/Screenshot-61.png', live:'https://jewelery-shop-3f193.web.app/home', gitClient:' https://github.com/programming-hero-web-course-4/niche-website-client-side-masud51435', server:'https://github.com/programming-hero-web-course-4/niche-website-server-side-masud51435/tree/main' }
];

const Project = () => {
  return (
    <Container className='all'>
      <Navigation></Navigation>
      <hr style={{ color: 'white', border: '1px solid ' }} />
      <Col style={{ textAlign: 'left', marginLeft: '20px' }}>
        <h5 style={{ color: '#9C9C9C', marginTop: '40px', fontWeight: '700' }}>My Projects</h5>
        <h1 style={{ color: 'white', marginBottom: '40px', fontWeight: '700', fontSize: '50px' }}>My work that I did recent time</h1>
      </Col>
      <hr style={{ color: 'white', border: '1px solid ' }} />
      <Row xs={1} md={2} className="g-4 my-5">
        {
          projects.map(project => <Item
          key = {project.name}
          project = {project}
          ></Item>)
        }
      </Row>

    </Container>
  );
};

export default Project;