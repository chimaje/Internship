import { useEffect ,useState} from "react"
const useFetch=(url)=>{
    const[error,setError]=useState(null);
    const[isPending,setIspending]=useState(true);
    const [data,setData] = useState(null);
    useEffect(()=>{
        const abort = new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abort.signal})
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
                    if(err.name ==='AbortError'){
                        console.log('fetch aborted');
                    }else{
                        setIspending(false);
                        setError(err.message);
                    }
                })
        },1000);
        return()=> abort.abort();
     },[url]);
    return{
        data,isPending,error
    }
}
export default useFetch;