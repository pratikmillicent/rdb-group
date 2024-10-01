import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { Row } from "react-bootstrap";

const NewBlogs = () => {
  const data = [
    {
      id: 1,
      date: "August 6, 2022",
      title: "Free advertising for your online business.",
      image: "/assets/images/blog/blog-3.jpg",
      tags: ["Marketing", "Design"],
      author: "Admin",
    },
    {
      id: 2,
      date: "August 6, 2022",
      title: "Business meeting 2023 in San Francisco.",
      image: "/assets/images/blog/blog-1.webp",
      tags: ["Marketing", "Design"],
      author: "Admin",
    },
    {
      id: 3,
      date: "August 6, 2022",
      title: "Free advertising for your online business.",
      image: "/assets/images/blog/blog-2.jpg",
      tags: ["Marketing", "Design"],
      author: "Admin",
    },
    {
      id: 4,
      date: "August 6, 2022",
      title: "Business meeting 2023 in San Francisco.",
      image: "https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/h4.jpg",
      tags: ["Marketing", "Design"],
      author: "Admin",
    },
    // {
    //   id: 5,
    //   date: "August 6, 2022",
    //   title: "Free advertising for your online business.",
    //   image: "https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/h5.jpg",
    //   tags: ["Marketing", "Design"],
    //   author: "Admin",
    // },
    // {
    //   id: 6,
    //   date: "August 6, 2022",
    //   title: "Business meeting 2023 in San Francisco.",
    //   image: "https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/h6.jpg",
    //   tags: ["Marketing", "Design"],
    //   author: "Admin",
    // },
  ];
  return (
    <div>
      <section className="blog-list-half crev sub-bg">
        <div className="container">
          <Row>
            {data.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default NewBlogs;
