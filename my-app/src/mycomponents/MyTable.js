import React, { Component } from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

class MyTable extends Component {
    render() {

        const tableData=[]
        const col=[{Header:"Name",accessor:" "},{Header:"Age",accessor:" "}]

        return (
            <div>
                <h1>My Table</h1><br></br>
                <ReactTable
                
                data={tableData}
                columns={col}
                defaulPageSize={2}
                pageSizeOptions={[2,4,6]}
                />
            </div>
        );
    }
}

export default MyTable;