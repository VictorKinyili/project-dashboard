import React from "react";

function Stock(){

    return(
        <div style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent: "space-evenly",width: "100%" }}>
         <section>
            <p>Total Products</p>
            <p style={{fontWeight: " bold"}} >243</p>
            <p style={{color:"green"}}>+12.8% this month</p>
         </section>
         <section>
            <p>Low Items In Stock</p>
            <p style={{fontWeight: " bold"}}>18</p>
            <p style={{color:"green"}}>Needs Attention</p>
         </section>
         <section>
            <p>Categories</p>
            <p style={{fontWeight: " bold"}}>12</p>
            <p style={{color:"green"}}>+2 more categories</p>
         </section>

        </div>
    )
}

export default Stock