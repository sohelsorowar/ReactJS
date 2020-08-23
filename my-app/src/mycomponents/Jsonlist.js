import React, { Component } from 'react';




class Jsonlist extends Component {
    render() {

        const mylist=[
            {
                city:"Dhaka",
                zip:"6000"
            },
            {
                city:"Bogura",
                zip:"5200"
            },
            {
                city:"Rajshahi",
                zip:"4800"
            },
            {
                city:"Jessor",
                zip:"1200"
            },
            {
                city:"Sylhet",
                zip:"1500"
            },
        ]

        const dataItems=mylist.map((data)=>{

            return <option>{data.city}</option>

        });
        const dataItemsZip=mylist.map((data)=>{

            return <option>{data.zip}</option>

        });

        return (
            <div>

                <h1>Json List</h1>
                <select>
                    {dataItems}
                </select>
                <select>
                    {dataItemsZip}
                </select>
                

                
            </div>
        );
    }
}

export default Jsonlist;