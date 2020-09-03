import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../components/assets/css/bootstrap.min.css";




class mynavigation extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="dark" variant="dark">
                     <Nav>
                        <Nav.Link> <NavLink exact activeStyle={{color:"white"}} to="/" >Home </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink activeStyle={{color:"white"}} to="/page1" >Page1 </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink activeStyle={{color:"white"}} to="/page2" >Page2 </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink  activeStyle={{color:"white"}} to="/page3" >Page3 </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink  activeStyle={{color:"white"}} to="/login" >Login </NavLink> </Nav.Link>
                    </Nav>
                 
                

                 </Navbar>
               
                
            </div>
        );
    }
}

export default mynavigation;