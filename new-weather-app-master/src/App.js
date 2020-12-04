import React, { Component } from 'react';
import './App.css';
import WeekContainer from './components/weekContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return <Router>
      <Switch>
          <Route to="/" exact component={WeekContainer}/>
          {/* <Route to="/:dayname" componet={} /> */}
      </Switch>
    </Router>
  }
}

export default App;
//Author @Nikhita