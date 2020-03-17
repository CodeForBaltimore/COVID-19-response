import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NaviBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import MapComponent from './Components/MapComponent';
import SomePage from './Components/SomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NaviBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
        <Route path="/map" component={MapComponent} />
        <Route path="/somepage" component={SomePage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
