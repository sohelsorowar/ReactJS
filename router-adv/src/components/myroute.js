import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Home from "./pages/home"

class myroute extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />
                <Route exact path="/page3" component={Page3} />
                
            </div>
        );
    }
}

export default myroute;