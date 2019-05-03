import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      
      <header>
        <Link to="/">Section 1</Link> | 
        <Link to="/2">Section 2</Link> | 
        <Link to="/3">Section 3</Link>
      </header>

      <Switch>  {/* Assure qu'il n'y aura qu'une seule route active. Bonne pratique, même si pas réellement besoin pour un exact path avec des routes différentes */}
      <Route exact path="/" render={
        () => (
          <section>
            <h2>SECTION 1</h2>
          </section>
        )
      }/>

      <Route exact path="/2" render={
        () => (
          <section>
            <h2>SECTION 2</h2>
          </section>
        )
      }/>

      <Route exact path="/3" render={
        () => (
          <section>
            <h2>SECTION 3</h2>
          </section>
        )
      }/>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
