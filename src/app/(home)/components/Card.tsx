// check

import Styles from "./card.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen }: any) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
    objectFit: "fill",
  }) as any;
  return (
    <animated.img
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      src={imagen}
      alt=""
    ></animated.img>
  );
}

export default Card;
