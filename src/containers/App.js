import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
// import Navbar from '../components/Navbar';
import FetchMatches from '../components/FetchMatches';
import FetchLeagues from '../components/FetchLeagues';
import Facts from '../components/Facts';
import PageNotFound from '../components/PageNotFound';


// Main component that contains all components this program
class App extends Component {
  
  // Set routes
  render() {
    return (
      <div className="app">
        <Routes>
        <Route path="/" element={ < FetchMatches /> } />
        <Route path="/table" element={ <FetchLeagues /> } />
        <Route path='/info' element={ <Facts />} />
        {/* <Route path='/news/last-news' element={ <LastNews />} /> */}
        <Route path='/404' element={ <PageNotFound />} />
      </Routes>
      </div>
    );
  }
}

export default App;