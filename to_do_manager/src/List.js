

const List = ({item,handleDelete}) => {
    return ( 
        <div className="Lists">
            {item.map((item)=>(
            <div className="listing">
                <label key={item.id}>
                <input type="checkbox"value={item.title}/>{item.title}
                </label>
                <button className="buttin" onClick={()=>{handleDelete(item.id)}}>Delete</button>
            </div>
            ))}
        </div>
     );
}
 
export default List;