import React from 'react'
import './App.css';
import Nav from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <Nav />
     
   
     <switch>
     <Route path='/' exact component={Home} /> 
     <Route path='/Home' exact component={Home} /> 
     <Route path='/about' exact component={About} /> 
     <Route path='/solutions' exact component={About} /> 
     <Route path='/services' exact component={About} /> 
     <Route path='/contact' exact component={About} /> 
     </switch>
     </Router>
      
  );
}

export default App;
