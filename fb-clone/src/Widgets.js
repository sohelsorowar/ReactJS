import React from 'react';
import Iframe from 'react-iframe';
import './Widgets.css';


function Widgets() {
    return (
        <div className="widgets">
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
             width="340"
            height="100%"
            style={{border: "none", overflow:"hidden"}}
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"

            >
                

            </Iframe>
            
        </div>
    )
}

export default Widgets
