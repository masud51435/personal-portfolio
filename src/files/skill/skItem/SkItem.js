import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const SkItem = (props) => {
  const { name, img } = props.skill;
  return (
    <Col>
      <Image style={{width:'50px'}} src={img} />
      <h5 style={{color:'white'}}>{ name}</h5>
    </Col>
  );
};

export default SkItem;
