import React from 'react';
import './App.css';
import RepoList from "./components/RepoList";
import {BrowserRouter as Router,Route,Switch,Link}from "react-router-dom";
import RepoListDetail from "./components/RepoListDetail";

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path = "/" component = {RepoList} />
                  <Route exact path = "/RepoListDetail" component = {RepoListDetail} />
              </Switch>
          </div>
      </Router>

  );
}

export default App;
