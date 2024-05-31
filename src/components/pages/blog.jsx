import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/blog/fetch-blog"
      );
      setBlog(data);
    } catch (error) {
      console.error("Error fetching Blog:", error);
    }
  };
  return (
    <>
      <Helmet>
        <title>DMI - Blogs</title>
      </Helmet>
      <div id="features" className="features my-5">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-down"
          >
            <span>Blogs</span>
            <h2>Blogs</h2>
            <p>
              Stay Ahead of the Curve: Dive into Our Latest Insights and Trends
              on the Digital Frontier.
            </p>
          </div>
          <div className="row">
            {blog.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch"
                key={index}
              >
                <div className="card aos-init aos-animate" data-aos="fade-up">
                  <img src={item.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <i className="bx bx-tachometer"></i>
                    <h5 className="card-title">{item.heading}</h5>
                    <p className="card-text">{item.paragraph}</p>
                    <Link
                      to={`/blog-detail/${item.slug}`}
                      className="btn btn-success"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
