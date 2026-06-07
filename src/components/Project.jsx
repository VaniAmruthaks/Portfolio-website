import financeImg from "../assets/finance.png";
import todoImg from "../assets/todoimg.png"
import campusconnectImg from "../assets/campusconnect.png"
function Project(){

    const Projects=[
        {
            title:"Personal Finance Tracker",
            img:financeImg,
            description:"A React application for tracking income and expenses with dashboards, charts and financial summaries.",
            features: [
            "Income tracking",
            "Expense tracking",
            "Category management",
            "Dashboard summaries",
            "Charts and visualisation",
            "Search functionality"
        ],
            tech:"React ,JavaScipt ,CSS"
        },
        {
            title:"Todo Application",
            img:todoImg,
            description: "A task management application with task creation, editing, deletion and filtering.",
            features: [
            "Add tasks",
            "Edit tasks",
            "Delete tasks",
            "Complete tasks",
            "Filter tasks"
            ],
            tech:"React ,JavaScipt ,CSS"
        },
        {
            title:"Integrated Communication system",
            img:campusconnectImg,
            description:"An MSc Computing dissertation project designed to improve communication between students and academic users.",
            features: [
            "Student communication",
            "Academic interaction",
            "User management"
             ],
            tech:"React ,Node.js ,MongoDb ,CSS"
        }

    ];

    return(
        <section id="project" style={{padding:"50px 20px"}}>
            <h2>Projects</h2>
            <div style={{ marginLeft:"20px",gap:"30px",display:"flex",flexwrap:"wrap",marginTop:"20px"}}>
            {Projects.map((project)=>(
                <div style={{border:"1px solid #ddd",borderRadius:"10px",padding:"20px",width:"400px" }}
                
                 key={project.title}>
                    <img src={project.img} alt="project.title" style={{width:"100%",height:"220px"}}/>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    
                    <strong>Features</strong>
                    <ul>
                       {project.features.map((feature)=>(
                        <li key={feature}>
                          {feature}
                        </li>
                       ))} 
                    </ul>
                    </div>
            ))}
            </div>
        </section>
    )
}

export default Project;