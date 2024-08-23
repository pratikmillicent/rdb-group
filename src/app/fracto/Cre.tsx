// Cre.js
import React, { useState } from "react";
import "./Cre.css"; // Correctly import your custom CSS
import Heading from "@/components/heading/Heading";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

const AccordionItem = ({ id, title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item p-2">
      <div className="accordion-header" onClick={() => onClick(id)}>
        <h5 className="accordion-title">{title}</h5>
        <span className="accordion-toggle" style={{ color: "#eaa636" }}>
          {isOpen ? <FiMinus /> : <FaPlus />}
        </span>
      </div>
      <div className={`accordion-body ${isOpen ? "open" : "closed"}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Cre = () => {
  const [openId, setOpenId] = useState("1");

  const handleToggle = id => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="cre-container">
      <Heading headTitle="Why CRE" />
      <div className="accordion">
        <AccordionItem
          id="1"
          title="High Return on Investment"
          content="Commercial properties often offer higher rental yields compared to residential properties. This is due to the long-term leases and typically higher rents associated with commercial real estate."
          isOpen={openId === "1"}
          onClick={handleToggle}
        />
        <AccordionItem
          id="2"
          title="Stability and Reliability"
          content="Commercial leases are often longer-term than residential leases, providing more stability and less frequent turnover. Additionally, businesses generally have more financial stability than individual tenants."
          isOpen={openId === "2"}
          onClick={handleToggle}
        />
        <AccordionItem
          id="3"
          title="Diversification"
          content="Investing in commercial real estate allows for diversification of your investment portfolio. Different types of commercial properties (e.g., retail, office, industrial) offer various risk and return profiles."
          isOpen={openId === "3"}
          onClick={handleToggle}
        />
        <AccordionItem
          id="4"
          title="Tax Benefits"
          content="Commercial real estate investments can offer various tax benefits, including depreciation deductions, mortgage interest deductions, and potential tax credits, which can enhance overall returns."
          isOpen={openId === "4"}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
};

export default Cre;
