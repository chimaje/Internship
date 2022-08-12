import List from "./List";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    let navigate=useNavigate();
    const[item,setItem]=useState(null);
    useEffect(()=>{
        fetch( "http://localhost:8000/Items")
        .then(res=>{
            return res.json() ;
        })
        .then((data)=>{
            setItem(data)
        })
    },[])
    const handleDelete=(id)=>{
        fetch('http://localhost:8000/Items/'+id,{
            method: 'DELETE'
        }).then(()=>{
            navigate(-1);
        })
    }
    return ( 
    <div className="homepg">
        {item && <List item={item} title="All Items"handleDelete={handleDelete}/>}
    </div> );
}
 
export default Home;