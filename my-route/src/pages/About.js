import React, { Component } from 'react';
import axios from 'axios';


class About extends Component {


    constructor(){
        super()
        this.state={
            myData:[]
        }
    }


    componentDidMount(){

        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({myData:response.data})

        })
        .catch(error=>{
            console.log(error)

        })


    }

    render() {

        const myList=this.state.myData
        const countryName=myList.map((myList)=>{
            return <li>{myList.name}</li>
        })
        return (
            <div>
                <h1>About</h1>
                <h2>Country name</h2>
                <ul>
                    {countryName}
                </ul>
            </div>
        );
    }
}

export default About;