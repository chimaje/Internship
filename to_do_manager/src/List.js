import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const List = ({item,title,handleDelete}) => {
    return ( 
        <div className="Lists">
            <h2>{title}</h2>
            {item.map((item)=>(
            <div className="listing">
                <label key={item.id}>
                <input type="checkbox"value={item.title}/>{item.title}
                </label>
                <button onClick={()=>{handleDelete(item.id)}}>delte</button>
            </div>
            ))}
        </div>
     );
}
 
export default List;