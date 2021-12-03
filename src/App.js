import { Container } from 'react-bootstrap';
import './App.css';
import HomePage from './files/homePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Project from './files/project/Project';
import Contract from './files/contract/Contract';
import Skill from './files/skill/Skill';
import Particles from "react-tsparticles";
import Blog from './files/blog/Blog';
import AboutMe from './files/about-me/AboutMe';



function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          color: {
            value: "#222222",
          },


          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      
        <Router>
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route path='/home'>
              <HomePage></HomePage>
            </Route>
            <Route path='/skill'>
              <Skill></Skill>
            </Route>
            <Route path='/project'>
              <Project></Project>
            </Route>
            <Route path='/contract'>
              <Contract></Contract>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/aboutme'>
              <AboutMe></AboutMe>
            </Route>
            
          </Switch>
        </Router>

      </Container>
    </div>
  );
}

export default App;
