function Nav(){
    return(
        <nav style={{padding:"20px" ,display:"flex" ,justifyContent:"space-between"}}>
          <h2>Vani Amrutha K S</h2>
          <div style={{display:'flex',gap:"50px",padding:"20px"}}>
            <a href="#about">About</a>
            <a href="#skill">Skills</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>

          </div>
        </nav>
    )
}

export default Nav;