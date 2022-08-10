const Home = ()=>{
    const handclick = () => {
        console.log('hello,ninja')
    }
    return(
        <div className="home">
            <h2> Home Page</h2>
            <button onClick={(handclick)}>Click me</button>
        </div>
    )
}
export default Home;