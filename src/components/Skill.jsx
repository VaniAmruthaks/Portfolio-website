function Skill(){
    const Skills=[
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node.js",
        "Mongodb",
        "Git",
        "GitHub"
    ];
    return(
        <section id="skill" style={{padding:"20px 20px"}}>
            
            <h2>Skills</h2>
            
            <div style={{display: "flex",
                       gap: "15px",
                       flexWrap: "wrap",
                       marginTop: "20px"}}>
            {Skills.map((skill)=>(
                <div key={skill} style={{border: "1px solid #ddd",
              padding: "15px 25px",
              borderRadius: "10px"}}>{skill}</div>
            ))}
            </div>
        
        </section>
    )
}
export default Skill;