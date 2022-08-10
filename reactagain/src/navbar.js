const  Navbar =() =>{

    return(
        <nav className = "navbar">
            <h1>The Reacting Blog</h1>
            <div className = "links">
                <a href="/">Home</a>
                <a href="/create" /*style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius: '5px'
                }}*/>Add blog</a>
            </div>
        </nav> 
    );
}
export default Navbar;