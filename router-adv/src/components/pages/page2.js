import React, { Component } from "react";
import { Link } from "react-router-dom";

class page2 extends Component {

    constructor(){
        super();
        this.state={
            passData:"Bangladesh"
        }
    }

  render() {
      var para="/page3/"+this.state.passData;
    return (
      <div>
        <h1>Page 2</h1>
        <buttorn><Link to={para}>Pass Data</Link></buttorn>
        
      </div>
    );
  }
}

export default page2;
