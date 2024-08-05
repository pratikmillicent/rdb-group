import React from "react";
import bgImage from "/assets/images/career/career-head-logo.png";
import { Card } from "react-bootstrap";

const data = [
  {
    icon: { Setting },
    position: "Operations Manager",
    description: "A talented Operations Manager to join our team,",
  },
  {
    icon: { Mind },
    position: "Creative Director",
    description: "A talented Operations Manager to join our team,",
  },
  {
    icon: { Zebra },
    position: "Chief Strategy Officer",
    description: "A talented Operations Manager to join our team,",
  },
  {
    icon: { Radio },
    position: "Sr. Software Engineer",
    description: "A talented Operations Manager to join our team,",
  },
];

const JobOpenings = () => {
  return (
    <div>
      <div>
        <div
          className="text-grey bg-golden"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          Open Position
        </div>

        <div>
          <h2>We're Hiring</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            ratione. Consectetur omnis magnam nostrum eius autem quas mollitia
            sapiente iusto soluta ullam. Beatae culpa, similique sunt
            praesentium hic commodi repellendus animi itaque tempora repellat
            enim, doloribus saepe recusandae eum quos error. Cum quibusdam nisi
            necessitatibus nulla suscipit debitis. Aliquid, natus laudantium!
            Cupiditate distinctio quis quisquam vero libero quod natus maxime
            veritatis eius dolorum ut nemo veniam, animi sapiente fuga quibusdam
            dolor dolorem aspernatur. Maxime iure ut sed est minus optio libero
            sint reiciendis beatae placeat, repellendus accusamus, harum, hic
            provident voluptate incidunt rem at tempore! Nostrum sapiente illo
            corporis molestias.
          </p>
        </div>

        <div>
          <Card icon={icon} position={position} description={description} />
        </div>
      </div>
    </div>
  );
};

export default JobOpenings;
