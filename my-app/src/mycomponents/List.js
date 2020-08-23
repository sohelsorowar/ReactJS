import React, { Component } from 'react';




class List extends Component {

    MyDataChild=(data)=>{
        return <option>{data}</option>
    }
   
    render() {

        const country=['Bangladesh','Nepal','Srilanka','Bhutan'];
        const dataItems=country.map(this.MyDataChild);

        return (
            <div>
                <h1>List</h1>
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default List;