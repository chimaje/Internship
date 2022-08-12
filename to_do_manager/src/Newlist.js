import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState('Add item');
    const[isPending,setIspending]=useState(false);
    let navigate = useNavigate();
    const Submit =(e)=>{
        e.preventDefault();
        const itm={title}
        setIspending(true);
        fetch('http://localhost:8000/Items',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(itm)
        }).then (()=>{
            setIspending(false)
            //Before.go(-1);
            navigate("/",{ replace: true });
        })
    }

    return ( 
        <div className="create">
            <form onSubmit={Submit}>
            <label>New Item</label>
               <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
               {!isPending&&<button>Add</button>}
               {isPending&& <button disabled>Item is being added</button>}
            </form>
        </div>
     );
}
 
export default Create;