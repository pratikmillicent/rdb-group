// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import FrameSlider from "./RealtySlideShow";
// import Layout from "./showcase";

const Realty = () => {
  return (
    <>
      <main className="mw-100 bg-dark">
        <FrameSlider data={data} />
      </main>
    </>
  );
};

export default Realty;

const data = [
  {
    id: 1,
    background:
      "https://images.unsplash.com/photo-1699290680631-3c254efc9eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWx0eXxlbnwwfHwwfHx8MA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "Skyline Tower",
  },
  {
    id: 2,
    background:
      "https://images.unsplash.com/photo-1589321084815-4e5f1740cbc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWx0eXxlbnwwfHwwfHx8MA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "Urban Residence",
  },
  {
    id: 3,
    background:
      "https://images.unsplash.com/photo-1578687047263-631a67f01e0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWx0eXxlbnwwfHwwfHx8MA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "Glass Towers",
  },
  {
    id: 4,
    background:
      "https://images.unsplash.com/photo-1575799761643-07e8bb2d3ec6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "The Penthouse",
  },
  {
    id: 5,
    background:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D",
    year: "2023",
    type: "Real Estate",
    title: "Modern Villa",
  },
];
