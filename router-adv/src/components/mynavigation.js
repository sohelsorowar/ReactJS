import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "../components/assets/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";




class mynavigation extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="dark" variant="dark">
                     <Nav>
                        <Nav.Link> <Link to="/" >Home </Link> </Nav.Link>
                        <Nav.Link> <Link to="/page1" >Page1 </Link> </Nav.Link>
                        <Nav.Link> <Link to="/page2" >Page2 </Link> </Nav.Link>
                        <Nav.Link> <Link to="/page3" >Page3 </Link> </Nav.Link>
                     </Nav>
                 
                

                 </Navbar>
               
                
            </div>
        );
    }
}

export default mynavigation;