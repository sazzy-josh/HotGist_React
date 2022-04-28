 import { useParams} from 'react-router-dom' 
 import UseFetch from './useFetch'

const Blogdetails = () => {
   const { id } = useParams()
   const {data ,isPending} = UseFetch('http://localhost:8080/blogs/' + id)

    return ( 
       <div>
         {data && (
             <article>
                 <h1>{data.title}</h1>
                 <p>{data.body}</p>
                 <p className='author'>Written by:{data.author}</p>
             </article>
         ) }
          {isPending && <h1>Loading...</h1>}
       </div>

     );
}
 
export default Blogdetails;