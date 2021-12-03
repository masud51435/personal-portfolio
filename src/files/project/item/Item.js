import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import git from '../../../image/icons8-github-48.png';
import link from '../../../image/icons8-link-50.png';

const Item = (props) => {
  const { name, img, live, gitClient, server } = props.project;
  return (
    <Col data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{fontWeight:'700', fontSize:'30px'}}>{name}</Card.Title>
          <a href={gitClient}>
            <Image style={{width:'43px', marginRight:'10px'}} src={ git }/>
         </a>
          <a href={live}>
            <Image src={ link }/>
         </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;