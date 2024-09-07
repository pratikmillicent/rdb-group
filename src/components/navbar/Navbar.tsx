import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import useMediaQuery from "@/app/(home)/components/useMediaQuery";
import SocialIcon from "../social-icon/SocialIcon";
import { BiPhone, BiSolidPhone, BiSolidPhoneOff } from "react-icons/bi";

function Navbar() {
  const path = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside as any);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = navRef.current;

    if (!navbar) return;
    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event: MouseEvent) {
    event.currentTarget.querySelector(".dropdown-menu")?.classList.add("show");
  }

  function handleDropdownMouseLeave(event: MouseEvent) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      ?.classList.remove("show");
  }

  // function toggleNavbar() {
  //   document
  //     .querySelector(".navbar .navbar-collapse")?.classList.toggle("show");
  // }

  function toggleNavbar() {
    setIsNavbarOpen((prev) => !prev);
  }

  function handleClickOutside(event: MouseEvent) {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsNavbarOpen(false);
    }
  }

  function handleLinkClick() {
    setIsNavbarOpen(false);
  }

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <div
        className=""
        style={{
          background: "var(--navy)",
          width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            // padding: "0 45px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="">
            <a href="#">
              <i
                className="fa-brands fa-facebook-f"
                style={{
                  fontSize: "16px",
                  color: "var(--golden)",
                  padding: "5px",
                  // paddingLeft: "15px",
                  margin: "8px",
                  fontWeight: "400",
                }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-brands fa-linkedin"
                style={{
                  fontSize: "16px",
                  color: "var(--golden)",
                  padding: "5px",
                  paddingLeft: "10px",
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
                  padding: "5px",
                  paddingLeft: "10px",
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
                  padding: "5px",
                  paddingLeft: "10px",
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
                  padding: "5px",
                  paddingLeft: "10px",
                  margin: "8px",
                }}
              ></i>
            </a>
          </span>
          <div style={{ marginLeft: "auto" }}>
            <a href="#" style={{ marginRight: "18px", color: "#fff" }}>
              Privacy policy
            </a>
            <a href="#" style={{ marginRight: "18px", color: "#fff" }}>
              FAQ
            </a>
          </div>
        </div>
      </div>
      <nav
        ref={navRef}
        className={`navbar navbar-expand-lg ${
          path === "/" ? "navbar-home" : ""
        }`}
      >
        <div className="container">
          <Link href="/">
            <Image
              src="/rdb-group.svg"
              style={{
                height: isSmallScreen ? "80px" : "100px",
                width: "125px",
                objectFit: "cover",
              }}
              className="logo-responsive"
              alt="logo"
              width={800}
              height={500}
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            // data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            // aria-expanded="false"

            aria-label="Toggle navigation"
            aria-expanded={isNavbarOpen}
            onClick={toggleNavbar}
          >
            <span className="icon-bar d-flex justify-content-center align-items-center  border-0">
              <IoMenu className="text-white" />
            </span>
          </button>

          <div
            className={`collapse navbar-collapse  ${
              isNavbarOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  <span className="rolling-text text-capitalize  fz-14 ">
                    About
                  </span>
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseMove={handleDropdownMouseMove}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text text-capitalize fz-14">
                    Business
                  </span>
                </a>
                <div className="dropdown-menu">
                  <Link href="/" className="dropdown-item ">
                    <span className="text-capitalize fz-14">Properties</span>
                  </Link>
                  <Link
                    href="/realty"
                    className="dropdown-item text-capitalize fz-14"
                    onClick={handleLinkClick}
                  >
                    Realty
                  </Link>
                  <Link
                    href="/fracto"
                    className="dropdown-item text-capitalize fz-14"
                    onClick={handleLinkClick}
                  >
                    Fracto
                  </Link>
                  <Link
                    href="/movies"
                    className="dropdown-item text-capitalize fz-14"
                    onClick={handleLinkClick}
                  >
                    Movies
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  href="/news"
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  <span className="rolling-text text-capitalize fz-14">
                    News & Media
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blogs"
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  <span className="rolling-text text-capitalize fz-14">
                    Blogs
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/careers"
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  <span className="rolling-text text-capitalize fz-14">
                    Careers
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact-us"
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  <span className="rolling-text text-capitalize fz-14 ">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
            {/* <SocialIcon /> */}
            <div className="d-flex align-items-center gap-2 ml-auto">
              <i
                className="fa fa-phone"
                style={{
                  color: "var(--golden)",
                  fontSize: "28px",
                  marginRight: "6px",
                }}
              ></i>
              <span>
                <span className="d-block fz-10">Need help?</span>
                <span className="fz-18" style={{ fontWeight: "medium" }}>
                  +91 9321711146
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
