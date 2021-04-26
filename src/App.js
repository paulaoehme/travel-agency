import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Offers from './components/pages/Offers';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/destinations' exact component={Destinations}/>
        <Route path='/offers' exact component={Offers}/>
        <Route path='/about-us' exact component={AboutUs}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
