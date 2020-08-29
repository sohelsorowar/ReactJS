import React, { Component } from 'react';
import '../My.scss';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";
import  axios from 'axios';



class Contact extends Component {
    render() {

        const tableData=[{  
            name: 'Ayaan',  
            age: 26  
            },{  
             name: 'Ahana',  
             age: 22  
             },{  
             name: 'Peter',  
             age: 40      
             },{  
             name: 'Virat',  
             age: 30  
             },{  
             name: 'Rohit',  
             age: 32  
             },{  
             name: 'Dhoni',  
             age: 37  
             }]
        const col=[{Header:"Name",accessor:"name"},{Header:"Age",accessor:"age"}]


         return (
            <div>
                <h1 className="TextStyle2">This is Contact With SASS</h1>
                <ReactTable
                
                data={tableData}
                columns={col}
                defaulPageSize={2}
                pageSizeOptions={[2,4,6,10,20]}
                />
            
            </div>
        );
    }
}

export default Contact;