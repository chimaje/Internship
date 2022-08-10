import { useEffect ,useState} from "react"
const useFetch=(url)=>{
    const[error,setError]=useState(null);
    const[isPending,setIspending]=useState(true);
    const [data,setData] = useState(null);
    useEffect(()=>{
        setInterval(()=>{
            fetch(url)
                .then(res=>{
                    console.log(res);
                    if(!res.ok){
                        throw  Error('could not fetch water');
                    }
                    return res.json()
                })
                .then(data=>{
                    console.log(data);
                    setData(data);
                    setIspending(false);
                    setError(null);
                })
                .catch((err)=>{
                    setIspending(false);
                    setError(err.message);
                })
        },1000);
    },[url]);
    return{
        data,isPending,error
    }
}
export default useFetch;