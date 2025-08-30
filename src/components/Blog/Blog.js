import React from "react";
import "./Blog.css";
import { BlogData } from "./BlogData";

const Blog = () => {
  return (
    <>
    <div className="blogpage"></div>  
      {
        BlogData.map((blogdataval, index) =>{
          return(
            <div className="blog" key={index}>
              <div className="img"><img src={blogdataval.img} alt="blog" /></div>
              <h1 className="heading">{blogdataval.heading}</h1>
              <p className="para">{blogdataval.para}</p>
              <div className="info">
                <p>{blogdataval.admin}</p>
                <p>{blogdataval.place}</p>
                <p>{blogdataval.comments}</p>
              </div>
            </div>
          )
        })
      }
    </>
  );
};

export default Blog;
