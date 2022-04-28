import { useEffect ,useState } from "react";

const UseFetch = (url) => {
  const [data,setData] = useState(null)
  const [isPending, setIspending] = useState(true)

    useEffect(() => {
        const abortController = new AbortController
         fetch(url,{signal:abortController.signal})
         .then(res => {
           if(!res.ok){
             throw new Error('Ooops!!Failed to Fetch Data')
           } return res.json()
         })
         .then(data => {
            setData(data)
            setIspending(false)
         })
         .catch(err => {
           if(err.name === 'AbortError'){
             console.log('Ooops!!I just ran a cleanup Effect')
           } else{
             console.log("Error:"+ err.message )
           }
         })
         return () => {
           abortController.abort()
         };
       }, [url]);
    return {isPending , data}
}
 
export default UseFetch
