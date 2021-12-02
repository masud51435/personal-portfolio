import { Container } from 'react-bootstrap';
import './App.css';
import HomePage from './files/homePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './files/about.js/About';
import Project from './files/project/Project';
import Contract from './files/contract/Contract';
import Skill from './files/skill/Skill';


function App() {
  return (
    <div className="App">
      <Container>
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
          </Switch>
        </Router>
        
      </Container>
    </div>
  );
}

export default App;
