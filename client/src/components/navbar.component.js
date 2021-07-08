import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return(
            <nav className=" navbar navbar-dark bg-dark navbar-expand-lg">
                
               
                <div className="collapse navbar-collapse">
                    <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                    </li>
                <li className="navbar-item">
                    <Link to="/guests" className="nav-link">Create Guest</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/rooms" className="nav-link">Rooms List</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Booking</Link>
                    </li>                           
                                   
                    <li className="navbar-item">
                        <Link to="/edit/id" className="nav-link">Edit Booking</Link>
                    </li>
                    

                </div>
            </nav>
        )
    }
}