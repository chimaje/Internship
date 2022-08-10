import { useState } from "react";

const Home = ()=>{
    // let names = 'mario';
    const [names, setNames]=useState('mario');
    const [age,setAge]= useState(25);
    const [blogs,setBlogs] = useState([
        {title:'My new website',body:'lorem ....',author:'mario',id:1},
        {title:'Welcome party',body:'lorem ....',author:'yoshi',id:2},
        {title:'Web dev top tips', body:'lorem ....',author:'mario',id:3}
        ]);
    const handclick = () => {
        let Name =prompt("What is your name? ");
        let Age = prompt("What is your Age");
        setNames(Name);
        setAge(Age);
        console.log('hello,ninja')
    }
    const handclickaga =(name,e)=>{
        console.log('hello '+ name ,e.target)
    }
    return(
        <div className="home">
            <h2> Home Page</h2>
            {blogs.map((blog)=>(
                <div className="blog_preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p> Written by {blog.author}</p>
                </div>
            ))}
            <p>{names} is {age} years old</p>
            <button onClick={(handclick)}>Click me</button>
            <button onClick={(e) =>handclickaga(prompt("What is your name?"),e)}> Click me again</button>

        </div>
    )
}
export default Home; 