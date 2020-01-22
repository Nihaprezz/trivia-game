import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import HomePage from "./containers/HomePage"

function App() {
  return (
    <div className="App">
      < Header />

      <Switch>
        < Route exact path="/" render={() => < HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
