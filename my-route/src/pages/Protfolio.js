import React, { Component } from 'react';
import styles from '../Mycss.module.css';
import axios from 'axios';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import '../components/assets/css/bootstrap.min.css';

class Protfolio extends Component {


    constructor(){
        super();
        this.state={
            postData:" ",
            postResult:" "
        }
    }

    onChangeHandler=(event)=>{
        var myData=event.target.value;
        this.setState({postData:myData});

    }

    onClickHandler=()=>{

        axios.post('http://ss.rabbil.com/test.php',this.state.postData)
        .then(response=>{
            this.setState({postResult:response.data})
            alert(this.state.postResult)
        })
        .catch(error=>{
            alert("somethin wronf");
        })

    }


    render() {
        return (
            <div>
               

                <h1>React nav Bar</h1><br></br>

                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link to="/" href="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>

                    <h1 className={styles.TextStyle}>This is my Protfolio with CSS Module</h1>
                    <h2>post data</h2>
                <input onChange={this.onChangeHandler} type="text"/>
                <button onClick={this.onClickHandler}>Send</button>
            </div>
        );
    }
}

export default Protfolio;