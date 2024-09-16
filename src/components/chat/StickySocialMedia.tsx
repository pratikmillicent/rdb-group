import { useEffect } from "react";

const StickySocialMedia = () => {
  const handleWhatapps = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=919321711146&text=Hi,%20I%27m%20interested%20in%20Atharv%20lifestyle%27s%20elegant%20projects.%20Kindly%20share%20details";
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "3px",
          bottom: "220px",
          zIndex: "5",
        }}
        className="cursor-pointer"
        onClick={handleWhatapps}
      >
        <div
          className="p-2"
          style={{
            background: "var(--navy)",
            width: "100%",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a href="#">
              <i
                className="fa-brands fa-facebook-f"
                style={{
                  fontSize: "16px",
                  color: "var(--golden)",

                  margin: "8px",
                }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-brands fa-linkedin"
                style={{
                  fontSize: "16px",
                  color: "var(--golden)",

                  margin: "8px",
                }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-brands fa-instagram"
                style={{
                  fontSize: "16px",
                  color: "var(--golden)",

                  margin: "8px",
                }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-brands fa-youtube"
                style={{
                  fontSize: "16px",
                  color: "var(--golden)",
                  margin: "8px",
                }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-brands fa-whatsapp"
                style={{
                  fontSize: "16px",
                  color: "var(--golden)",

                  margin: "8px",
                }}
              ></i>
            </a>
          </div>
          {/* <div style={{ marginLeft: "auto" }}>
            <a href="#" style={{ marginRight: "18px", color: "#fff" }}>
              Privacy policy
            </a>
            <a href="#" style={{ marginRight: "18px", color: "#fff" }}>
              FAQ
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default StickySocialMedia;
