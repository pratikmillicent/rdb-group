import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

import useMediaQuery from "@/app/(home)/components/useMediaQuery";

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
    setIsNavbarOpen(prev => !prev);
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
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg ${path === "/" ? "navbar-home" : ""}`}
    >
      <div className="container">
        <Link href="/">
          <Image
            src="/rdb-group.svg"
            style={{
              height: isSmallScreen ? "80px" : "100px",
              width: "205px",
            }}
            className="logo-responsive"
            alt="logo"
            width={800}
            height={500}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          // data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          // aria-expanded="false"

          aria-label="Toggle navigation"
          aria-expanded={isNavbarOpen}
          onClick={toggleNavbar}
        >
          <span className="icon-bar">
            <IoMenu className="text-white" />
          </span>
        </button>

        <div
          className={`collapse navbar-collapse  ${isNavbarOpen ? "show" : ""}`}
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

          <ul className="d-none d-md-flex align-items-center justify-content-center mt-15 ml-auto">
            <li className="mr-20">
              <Link href="https://www.instagram.com/" target="_blank">
                <FaInstagramSquare
                  className="fz-24 social-icon"
                  style={{ color: "#E1306C" }}
                />
              </Link>
            </li>
            <li className="mr-20">
              <Link href="https://www.facebook.com/" target="_blank">
                <FaFacebook
                  className="fz-24 social-icon"
                  style={{ color: "#1877F2" }}
                />
              </Link>
            </li>
            <li className="mr-20">
              <Link href="https://x.com/" target="_blank">
                <FaSquareXTwitter
                  className="fz-24 social-icon"
                  style={{ color: "#000" }}
                />
              </Link>
            </li>
            <li className="mr-20">
              <Link href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin
                  className="fz-24 social-icon"
                  style={{ color: "#0077B5" }}
                />
              </Link>
            </li>
            <li className="mr-20">
              <Link href="https://www.youtube.com/" target="_blank">
                <IoLogoYoutube
                  className="fz-24 social-icon"
                  style={{ color: "red" }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
