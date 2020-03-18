import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NaviBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCategory from './Components/FoodNavigation';
import FoodDistribution from './Components/FoodCategory/FoodDistribution';
import RestarauntInfo from './Components/FoodCategory/RestaurantInfo';
import CovidCategory from './Components/CovidNavigation';
import TestingCenters from './Components/CovidCategory/TestingCenters';
import SomeNavigation from './Components/SomeNavigation';

function App() {
  return (
      <div className="App">
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/food-resources" component={FoodCategory} />
          <Route exact path="/covid-resources" component={CovidCategory} />
          <Route exact path="/some-resources" component={SomeNavigation} />
        </Switch>

      {/* FoodNavigation */}
        <Switch>
          <Route exact path="/food-resources/food-distribution" component={FoodDistribution} />
          <Route exact path="/food-resources/restaurant-info" component={RestarauntInfo} />
        </Switch>
      {/* CovidNavigation */}
        <Switch>
          <Route exact path="/covid-resources/testing-centers" component={TestingCenters} />
        </Switch>
      {/* SomeNavigation */}
      </div>
  );
}

export default App;
