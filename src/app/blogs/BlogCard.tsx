import Link from "next/link";
import React from "react";

function BlogCard({ item }) {
  return (
    <div className="col col-lg-6" key={item.id}>
      <div className={`item mb-30`}>
        <div className="row rest">
          <div className="col-md-6">
            <div className="img">
              <img src={item?.image} alt="" />
            </div>
          </div>
          <div className="col-md-6 valign">
            <div className="cont">
              <span className="date fz-12 ls1 text-u opacity-7 mb-15">
                {item.date}
              </span>
              <h5
                style={{
                  lineHeight: 1.2,
                }}
              >
                <Link href="/blogs/blogs-details">{item.title}</Link>
              </h5>
              <div className="fz-12 ls1 opacity-9 mb-15">
                ~ By <span className="fw-bold ">{item.author}</span>
              </div>
              {/* <div className="tags colorbg mt-15">
                          {item.tags.map((tag, i) => (
                            <Link
                              href="/dark/blog-list"
                              className="me-1"
                              key={i}
                            >
                              {tag}
                            </Link>
                          ))}
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
