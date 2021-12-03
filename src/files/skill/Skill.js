import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Home/navigation/Navigation';
import SkItem from './skItem/SkItem';


const skills = [
  { img: 'https://i.ibb.co/0qmw1xQ/icons8-html-5-144.png', name: 'HTML' },
  { img: 'https://i.ibb.co/0GVLf8M/icons8-css3-144.png', name: 'CSS' },
  { img: 'https://i.ibb.co/102Tx83/icons8-javascript-144.png', name: 'Javascript' },
  { img: 'https://i.ibb.co/v3DZHXM/icons8-react-native-144.png', name: 'React' },
  { img: 'https://i.ibb.co/c3HwCZP/icons8-nodejs-144.png', name: 'Node' },
  { img: 'https://i.ibb.co/KDVqs2F/icons8-bootstrap-144.png', name: 'Bootstrap' },
  { img: 'https://i.ibb.co/v4TCXJ4/icons8-github-48.png', name: 'Github' },
  { img: 'https://i.ibb.co/r4FTBLd/vscode.png', name: 'VS Code' },
  { img: 'https://i.ibb.co/Rg3T9xk/icons8-material-ui-144.png', name: 'Material UI' },
  { img: 'https://i.ibb.co/4P9KQtd/icons8-mongodb-144.png', name: 'MongoDB' },
  { img: 'https://i.ibb.co/Xxz042B/icons8-express-144.png', name: 'Express' },
  { img: 'https://i.ibb.co/tsfmQMt/icons8-firebase-144.png', name: 'Firebase' },
  { img: 'https://i.ibb.co/R6GXgwg/icons8-heroku-144.png', name: 'Heroku' },
  { img: 'https://i.ibb.co/zZNsZ3M/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-sta.png', name: 'Netlify' },
  { img: 'https://i.ibb.co/pyGqGfF/icons8-npm-144.png', name: 'NPM' }
];

const Skill = () => {
  return (
    <Container className='all' data-aos="fade-up-right">
      <Navigation></Navigation>
      <hr style={{ color: 'white', border: '1px solid ' }} />
      <Col data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" style={{ textAlign: 'left', marginLeft: '20px' }}>
        <h5 style={{ color: '#9C9C9C', marginTop: '40px', fontWeight: '700' }}>My Skills</h5>
        <h1 style={{ color: 'white', marginBottom: '40px', fontWeight: '700', fontSize: '50px' }}>My skill in web development</h1>
      </Col>
      <hr style={{ color: 'white', border: '1px solid ' }} />
      <Row  xs={3} md={5} lg={6} className="g-4 my-5" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
        {
          skills.map(skill => <SkItem
            key={skill.name}
            skill = {skill}
          ></SkItem>)
        }
      </Row>
    </Container>
  );
};

export default Skill;