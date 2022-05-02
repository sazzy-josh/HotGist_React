import { useState,useEffect } from "react";
import UseFetch from "./useFetch";
import BlogList from "./bloglist";

const Home = () => {
  const {data ,isPending} = UseFetch('http://localhost:8080/blogs')
  
    return (
        <div className="home">
          <div  className="before"><h2> Welcome To My Blog</h2></div>
          {<BlogList blogs={data} loading={isPending} />}
          {isPending && <p>Loading....</p>}
        </div>
      );
}
 
export default Home;