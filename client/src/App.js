import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Creatures from './components/Creatures'
import Creature from './components/Creature'
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
