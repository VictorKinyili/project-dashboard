function Team (){
return(
    <div>
       <p>PEOPLE & PURPOSE</p>
       <h1>Our Team</h1>
       <p>Different skills. One shared focus:Abetter customer experience.</p>
       <section style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent: "space-evenly",width: "100%", gap:"10%"}}>
          <div>
             <p style={{color:"blue"}}>01</p>
             <p style={{fontWeight:"bold"}}>Product & Curation</p>
             <p>Finding useful technology and making product choices easier to understand.</p>
            </div>
            <div>
             <p style={{color:"blue"}}>02</p>
             <p style={{fontWeight:"bold"}}>Operations</p>
             <p>Keeping the details in order, from product informtion to everyday dtore operations.</p>
            </div>
            <div>
             <p style={{color:"blue"}}>03</p>
             <p style={{fontWeight:"bold"}}>Customer Support</p>
             <p>Listening, answerings, and helping customers take their next step.</p>
          </div>

       </section>
    </div>
)
}
export default Team;