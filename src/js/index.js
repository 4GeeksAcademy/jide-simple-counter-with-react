//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (
        <div className='bigCounter'>
            <div className="calendar">
                <i class="fa-solid fa-stopwatch"></i>
            </div>
            <div className="four"></div>
            <div className="three"></div>
            <div className="two"></div>
            <div className="one"></div>
        </div>
    );
};

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
