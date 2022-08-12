
const  Navbar =() =>{

    return(
        <div>
            <nav className = "navbar">
                <h1>To do List</h1>
                    <div className = "links">
                        <a href="/"> Home</a>
                        <a href="/add">Add Item</a>
                    </div>
             </nav> 
        </div>
    );
}
export default Navbar;