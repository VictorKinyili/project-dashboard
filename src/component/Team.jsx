function Team (){
return(
    <div style={{background: "#fff", borderRadius: "12px", padding: "20px", border: "1px solid #e2e8f0"}}>
       <p>PEOPLE & PURPOSE</p>
       <h1>Our Team</h1>
       <p>Different skills. One shared focus: A better customer experience.</p>
       <section style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent: "space-evenly",width: "100%", gap:"10%"}}>
          <div>
             <p style={{color:"blue"}}>01</p>
             <p style={{fontWeight:"bold"}}>Product & Curation</p>
             <p>Finding useful technology and making product choices easier to understand.</p>
            </div>
            <div>
             <p style={{color:"blue"}}>02</p>
             <p style={{fontWeight:"bold"}}>Operations</p>
             <p>Keeping the details in order, from product information to everyday store operations.</p>
            </div>
            <div>
             <p style={{color:"blue"}}>03</p>
             <p style={{fontWeight:"bold"}}>Customer Support</p>
             <p>Listening, answering questions, and helping customers take their next step.</p>
          </div>

       </section>
    </div>
)
}
export default Team;