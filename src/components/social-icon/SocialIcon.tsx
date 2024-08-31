import React from "react";

const socialIconData = [
  {
    icon: "instagram",
    url: "https://www.instagram.com/rdbrothersproperty?igsh=MTRpbHowcHdlazlkMA",
    alt: "Instagram",
    color: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)", // Instagram gradient
  },
  {
    icon: "facebook",
    url: "https://www.facebook.com/RDBROTHERSPROPERTIES?mibextid=LQQJ4d",
    alt: "Facebook",
    color: "#3b5998", // Facebook color
  },
  //   {
  //     icon: "x-twitter",
  //     url: "https://x.com",
  //     alt: "X (formerly Twitter)",
  //     color: "#000000", // X color
  //   },
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/company/rd-brothers-property-consultant-llp/",
    alt: "LinkedIn",
    color: "#0A66C2", // LinkedIn color
  },
  {
    icon: "youtube",
    url: "https://youtube.com/@r.d.brothersproperties?feature=shared",
    alt: "YouTube",
    color: "#FF0000", // YouTube color
  },
];

const SocialIcon = () => {
  return (
    <ul className="d-none d-md-flex align-items-center justify-content-center pt-3">
      {socialIconData.map((social, index) => (
        <li className="mx-2 " key={index}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-flex align-items-center text-decoration-none "
            style={{ color: social.color }}
          >
            <i
              className={`fab fa-${social.icon} fa-2x`}
              style={{
                background: social.icon === "instagram" ? social.color : "none",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:
                  social.icon === "instagram" ? "transparent" : social.color,
              }}
            ></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcon;
