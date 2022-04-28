import { Link } from 'react-router-dom'
 
const BlogList = ({blogs}) => {
    return (  
     <div>
        {blogs && blogs.map((blog) => {
            return (
            <Link to={`/blogs/${blog.id}`} >
              <article key={blog.id} className="blogs">
              <h3 className='title'>{blog.title}</h3>
              <p>{blog.description}</p>
              <p>Written by:{blog.author}</p>
            </article>
            </Link> 
            )
        })}
     </div>

    );
}
 
export default BlogList;

