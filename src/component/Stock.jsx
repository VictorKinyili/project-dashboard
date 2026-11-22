import React from "react";

function Stock(){

    return(
        <div style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent: "space-evenly",width: "100%" }}>
         <section style={{background: "#fff", borderRadius: "12px", padding: "20px", border: "1px solid #e2e8f0"}}>
            <p>Total Products</p>
            <p style={{fontWeight: "bold"}} >248</p>
            <p style={{color:"green"}}>+12.8% this month</p>
         </section>
         <section style={{background: "#fff", borderRadius: "12px", padding: "20px", border: "1px solid #e2e8f0"}}>
            <p>Low Items In Stock</p>
            <p style={{fontWeight: "bold"}}>18</p>
            <p style={{color:"#f59e0b"}}>Needs Attention</p>
         </section>
         <section style={{background: "#fff", borderRadius: "12px", padding: "20px", border: "1px solid #e2e8f0"}}>
            <p>Categories</p>
            <p style={{fontWeight: "bold"}}>12</p>
            <p style={{color:"green"}}>+2 more categories</p>
         </section>

        </div>
    )
}

export default Stock