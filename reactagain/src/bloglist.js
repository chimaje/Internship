import { Link } from "react-router-dom";
const Bloglist = ({blogger,title,handleDelete}) => {
    const blogs=blogger;
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div className="blog_preview" key={blog.id}>
                <Link classname="an"to={`/blogs/${blog.id}`}>
                <h3>{blog.title}</h3>
                <p> Written by {blog.author}</p>
                </Link>
                {/* <button onClick={()=>handleDelete(blog.id)}>Remove Blog</button> */}
            </div>
        ))}
        </div>
    );
}
 
export default Bloglist;