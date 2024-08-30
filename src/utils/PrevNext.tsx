import React from "react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const PrevNext = ({ prevRef, nextRef }) => {
//   console.log("🚀 ~ PrevNext ~ prevRef:", prevRef);
//   return (
//     <div className="button-container">
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div
//           ref={prevRef}
//           className="award-swiper-button-prev"
//           style={{
//             cursor: "pointer",
//             marginRight: "20px",
//             bottom: "0",
//             width: "fit-content",
//             height: "fit-content",
//             color: "black",
//             fontWeight: "bold",
//             // padding: "10px 40px",
//             borderRadius: "6px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             // border: "1px solid #d4af5f",
//             backgroundColor: "white",
//             fontSize: "18px",
//           }}
//         >
//           <IoIosArrowBack fontSize={48} />
//         </div>
//         <div
//           ref={nextRef}
//           className="award-swiper-button-next"
//           style={{
//             cursor: "pointer",
//             marginRight: "20px",
//             bottom: "0",
//             width: "fit-content",
//             height: "fit-content",
//             color: "black",
//             fontWeight: "bold",
//             // padding: "10px 20px",

//             borderRadius: "6px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             // border: "1px solid #d4af5f",
//             backgroundColor: "white",
//             fontSize: "18px",
//           }}
//         >
//           <IoIosArrowForward fontSize={48} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrevNext;

const PrevNext = (direction: any) => {
  console.log("🚀 ~ directionButtons ~ direction:", direction.direction);
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        // bottom: "0",
        ...(direction.direction === "Next"
          ? { right: "-80%" }
          : { left: "-80%" }),
        width: "fit-content",
        height: "fit-content",
        color: "black",
        fontWeight: "bold",
        padding: "10px 40px",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid #d4af5f",
        // backgroundColor: "white",
      }}
      className={direction.direction === "Next" ? "button-next" : "button-prev"}
    >
      {direction.direction === "Next" ? (
        <IoIosArrowForward fontSize={48} />
      ) : (
        <IoIosArrowBack fontSize={48} />
      )}
    </span>
  );
};

export default PrevNext;
