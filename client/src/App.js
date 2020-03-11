import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Creatures}/>
          <Route path="/creatures/:creatureId" component={Creature}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
