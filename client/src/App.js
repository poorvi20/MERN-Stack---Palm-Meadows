import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import MakeBooking from "./components/make-booking.component";
import RoomsList from "./components/rooms-list.component";
import EditBooking from "./components/edit-booking.component";
import EnterGuest from "./components/enter-guest.component";

// import logo from './logo.svg';
// import './App.css';

  function App() {
    return (
      <Router>
        <div className="container">
        <Navbar />
        <br />
        <Route path="/" component={Home} />
        <Route path="/create" component={MakeBooking} />
        <Route path="/rooms" exact component={RoomsList} />  
        <Route path="/edit/id" component={EditBooking} />    
        <Route path="/guests" component={EnterGuest} />

        </div>             

      </Router>
  );
} 


export default App;
