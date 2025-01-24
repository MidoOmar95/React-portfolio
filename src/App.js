import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}