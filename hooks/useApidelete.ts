import { useState } from "react";
import axios from "axios";

const useApidDelete=()=>{
    const[data,setData]=useState(null);
    const[error,setError]=useState(null);
    const[loading,setloading]=useState(false);

    const deleteData=async(url,customHeaders={})=>{
        try{
       setloading(true);
      const  headers={
        'Content-Type':'application/json',
        ...customHeaders

       }
       const response=await axios.delete(url,{headers})
      setData(response.data)

        }catch(error){
            setError(error)
        }
    }
}
export default useApidDelete;