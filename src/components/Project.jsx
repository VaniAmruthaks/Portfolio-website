function Project(){

    const Projects=[
        {
            title:"Personal Finance Tracker",
            description:"A React application for tracking income and expenses with dashboards, charts and financial summaries.",
            tech:"React ,Javascipt ,Css"
        },
        {
            title:"Todo Application",
            description: "A task management application with task creation, editing, deletion and filtering.",
            tech:"React ,Javascipt ,Css"
        },
        {
            title:"Integrated Communication system",
            description:"An MSc Computing dissertation project designed to improve communication between students and academic users.",
            tech:"React ,Node.js ,Mongodb ,Tailwind"
        }

    ];

    return(
        <section id="project" style={{padding:"50px 20px"}}>
            <h2>Projects</h2>
            <div style={{ marginLeft:"20px",gap:"30px",display:"flex",flexwrap:"wrap",marginTop:"20px"}}>
            {Projects.map((project)=>(
                <div style={{border:"1px solid #ddd",borderRadius:"10px",padding:"20px",width:"300px" }}
                 key={project.title}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <strong>Tech Stack</strong>
                    <p>{project.tech}</p>
                    </div>
            ))}
            </div>
        </section>
    )
}

export default Project;