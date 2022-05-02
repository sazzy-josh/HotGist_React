 import { useState } from 'react'
 import { useParams, useNavigate} from 'react-router-dom' 
 import UseFetch from './useFetch'

const Blogdetails = () => {
   const { id } = useParams()
   const {data ,isPending} = UseFetch('http://localhost:8080/blogs/' + id);
    const [deletes, setdeletes] = useState(false);
   const navigate = useNavigate()

   const handleDelete = () => {
     setdeletes(true)
     setTimeout(() => {
      fetch('http://localhost:8080/blogs/'+ id ,{
       method:'DELETE'
     }).then(() => {
       setdeletes(false)
       console.log("deleted successfully")
       navigate('/')
    })
  },2000)
    
   }

    return ( 
       <div>
         {data && (
             <article className="blog-details">
                 <h1 className='blog-head'>{data.title}</h1>
                 <p>{data.body}</p>
                 <p>{data.description}</p>
                 <p className='author'>Written by:{data.author}</p>
                {deletes ? <button disabled  className='deleteBtn' >Deleting...</button> :<input type="button" value="Delete Blog" className='deleteBtn' onClick={handleDelete} /> }
                 
             </article>
         ) }
          {isPending && <h1>Loading...</h1>}
         
       </div>

     );
}
 
export default Blogdetails;