const Create = () => {
    return ( 
        <div className="form">
        <h2>Add New Blog</h2>
        <form className="form-input">
            <label><strong>Title:</strong></label>
            <input type="text" placeholder="Enter title of Blog" name="Title"/>
            <label><strong>Author:</strong></label>
           <select name="Author" value="Idahosa">
               <option value="Sazzy">Sazzy</option>
               <option value="Idahosa">Idahosa</option>
               <option value="Joshua">Joshua</option>
           </select>
            <label><strong>Body:</strong></label>
           <textarea name="Body"></textarea>
           <button type="submit">Add Blog</button>
        </form>
        </div>
     );
}
 
export default Create;
