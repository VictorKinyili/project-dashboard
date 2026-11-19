import React from "react";
import Stock from "./Stock";

function HomePage(){
    return(
        <div>
            <p style={{color:"blue"}}>Overview</p>
            <h1>K-TECH</h1>
            <p>Welcome back. Here's what's happening in your store today.</p>
            <Stock />
            
        </div>
    )
}
export default HomePage;