import { Link } from 'react-router-dom'
 
const BlogList = ({blogs}) => {
    return (  
     <div>
        {blogs && blogs.map((blog) => {
            return (
            <Link to={`/blogs/${blog.id}`}  key={blog.id}>
              <article  className="blogs">
              <h3 className='blog-head'>{blog.title}</h3>
              <p>{blog.description}</p>
              <p className='author'>Written by:{blog.author}</p>
            </article>
            </Link> 
            )
        })}
     </div>

    );
}
 
export default BlogList;

