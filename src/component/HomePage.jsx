import React from "react";
import Stock from "./Stock";
import About from "./About";
import Vision from "./Vision"
import Team from "./Team";

function HomePage(){
    return(
        <div>
            <p style={{color:"blue"}}>Overview</p>
            <h1>K-TECH</h1>
            <p>Welcome back. Here's what's happening in your store today.</p>
            <Stock />
            <div style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent: "space-evenly",width: "100%", gap:"10%"}}>
            <About />
            <Vision />
            </div>
            <Team />

        </div>
    )
}
export default HomePage;