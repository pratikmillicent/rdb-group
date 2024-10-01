import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

function BlogCard({ item }) {
  return (
    <Col lg={6} md={6} sm={12} key={item.id} className="p-0 p-md-2">
      <div className={`item mb-30`}>
        <div className="row rest">
          <div className="col-md-6">
            <div className="img">
              <img style={{ height: "300px" }} src={item?.image} alt="" />
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
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default BlogCard;
