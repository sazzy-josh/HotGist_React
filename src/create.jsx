import { useState } from "react";

const Create = () => {
 const [title, setTitle] = useState("");
 const [author, setauthor] = useState("");
 const [Body, setBody] = useState("");
 const [addingBlog, setaddingBlog] = useState(false);

 const handleSubmit = (e) =>{
     e.preventDefault()
     setaddingBlog(true)
    const blogDetails = {title,Body ,author}
    fetch('http://localhost:8080/blogs',{
        method :"POST",
        headers : {
         'Content-Type':'application/Json'
        },
        body: JSON.stringify(blogDetails)
    }).then(() => {
        console.log("New Blog Added")
        setaddingBlog(false)
        setBody("")
        setTitle("")
        
    })
 }


    
    return ( 
        <div className="form">
        <h2>Add New Blog</h2>
        <form className="form-input" onSubmit={handleSubmit} >
            <label><strong>Title:</strong></label>
            <input type="text" 
            placeholder="Enter title of Blog" 
            name="Title"
            value={title}
            onChange={(e) => {
            setTitle(e.target.value)
            }}/>
            <label><strong>Author:</strong></label>
           <select name="Author" 
             value={author}
             onChange={(e) => {
                 setauthor(e.target.value)
             }}  >
               <option value="Sazzy">Sazzy</option>
               <option value="Idahosa">Idahosa</option>
               <option value="Joshua">Joshua</option>
           </select>
            <label><strong>Body:</strong></label>
           <textarea name="Body" 
              value={Body}
              onChange={(e) => {
                setBody(e.target.value)
              }}>
              </textarea>
          { addingBlog ? <button disabled>Adding Blog..</button> :<button type="submit">Add Blog</button>}
        </form>
        </div>
     );
}
 
export default Create;
