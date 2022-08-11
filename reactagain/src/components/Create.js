import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody] = useState('');
    const[author,setAuthor] = useState('');
    const[isPending,setIspending]=useState(false);
    const Before = useHistory() 
    const Submit =(e)=>{
        e.preventDefault();
        const blog ={title,body,author}
        setIspending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then (()=>{
            console.log('new blog added')
            setIspending(false)
            //Before.go(-1);
            Before.push('/');
        })
    }
    return ( 
        <div className='create'>
            <h2>Add a new Blog</h2>
            <form onSubmit={Submit}>
                <label>Blog Title</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea required
                value = {body}
                onChange={(e)=> setBody(e.target.value)}>
                </textarea>
                <label>Blog author</label>
                <input value={author}  onChange={(e)=> setAuthor(e.target.value)} >
                </input>
                {!isPending&&<button>Add Blog</button>}
                {isPending&& <button disabled>Blog is being added</button>}
            </form>
        </div>
     );
}
 
export default Create;