import React, { Component } from 'react';
import '../My.scss';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";
import  axios from 'axios';



class Contact extends Component {

    constructor(){
        super()
        this.state={
            tableInfo:[]
        }
    }


    componentDidMount(){

        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({tableInfo:response.data})

        })
        .catch(error=>{
            alert("something wrong")

        })


    }







    render() {

        const tableData=this.state.tableInfo
        const col=[{Header:"Country Name",accessor:"name"},{Header:"Capital",accessor:"capital"},{Header:"Population",accessor:"population"}]


         return (
            <div>
                <h1 className="TextStyle2">This is a React Table.Importing data from server.</h1>
                <ReactTable
                
                data={tableData}
                columns={col}
                defaulPageSize={2}
                pageSizeOptions={[2,10,20,50,100,200]}
                />
            
            </div>
        );
    }
}

export default Contact;