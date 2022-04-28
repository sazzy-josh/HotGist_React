import { useState,useEffect } from "react";
import UseFetch from "./useFetch";
import BlogList from "./bloglist";

const Home = () => {
  const {data ,isPending} = UseFetch('http://localhost:8080/blogs')
  
    return (
        <div className="home">
          <h2><strong> Welcome To My Blog </strong></h2>
          {<BlogList blogs={data} loading={isPending} />}
          {isPending && <p>Loading....</p>}
        </div>
      );
}
 
export default Home;