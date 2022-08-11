
import Bloglist from "./bloglist";
import useFetch from "../hooks/useFetch";

const Home = ()=>{
    const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')
    // let names = 'mario';
    //const [names, setNames]=useState('mario');
   // const [age,setAge]= useState(25);
    // const handclick = () => {
    //     let Name =prompt("What is your name? ");
    //     let Age = prompt("What is your Age");
    //     setNames(Name);
    //     setAge(Age);
    //     console.log('hello,ninja')
    // }
    // const handclickaga =(name,e)=>{
    //     console.log('hello '+ name ,e.target)
    // }
    // const handleDelete=(id)=>{
    //     const new_blog = blogs.filter(blog=>blog.id !== id);
    //     setBlogs(new_blog);
    // }
   
    return(
        <div className="home">
            {error&& <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogger={blogs} title="All Blogs" /*handleDelete={handleDelete}*//>}
            {/* <p>{names} is {age} years old</p>
            <button onClick={(handclick)}>Click me</button> */}
            {/* <button onClick={(e) =>handclickaga(prompt("What is your name?"),e)}> Click me again</button> */}

        </div>
    )
}
export default Home; 