import {useState} from "react";
import axios from "axios";

const useApiPost=()=>{
    const[data,setData]=useState(null);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(null);

    const postData=async(url,postData,customHeaders={})=>{
        try{
            setLoading(true);

            const headers={
                'Content-Type':'application/json',
                ...customHeaders,
            }
            const response=await axios.post(url,postData,{headers});
            setData(response.data);

        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    };
    return {data,error,loading,postData}

}
export default useApiPost;