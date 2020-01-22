import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Route, Switch, withRouter } from "react-router-dom";


import Header from "./components/Header"
import HomePage from "./containers/HomePage"
import TriviaStart from "./containers/TriviaStart"

function App() {
  return (
    <div className="App">
      < Header />

      <Switch>
        < Route exact path="/" render={() => < HomePage />} />
        < Route exact path="/trivia" render={() => < TriviaStart />} />
      </Switch>
    </div>
  );
}

export default withRouter((App));
