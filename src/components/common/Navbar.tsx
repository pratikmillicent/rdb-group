"use client";
import React, { MouseEvent, useEffect, useRef } from "react";
import Link from "next/link";

function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  function handleDropdownSideMouseMove(event: MouseEvent) {
    event.currentTarget.querySelector(".dropdown-side")?.classList.add("show");
  }

  function handleDropdownSideMouseLeave(event: MouseEvent) {
    event.currentTarget
      .querySelector(".dropdown-side")
      ?.classList.remove("show");
  }

  function toggleNavbar() {
    document
      .querySelector(".navbar .navbar-collapse")
      ?.classList.toggle("show");
  }

  return (
    <nav ref={navRef} className={"navbar navbar-expand-lg"}>
      <div className="container">
        <Link className="logo" href="/">
          <img style={{ width: "175px" }} src="/logo.svg" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/about"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">About</span>
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseMove={handleDropdownMouseMove}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                // href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Group Websties</span>
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href={`/`}>
                  www.rdbrothers.com
                </Link>
                <Link className="dropdown-item" href={`/`}>
                  www.rdbrother-realty.com
                </Link>
                <Link className="dropdown-item" href={`/`}>
                  www.rdbrothers-proptech.com
                </Link>
                <Link className="dropdown-item" href={`/`}>
                  www.rdbrothers-movies.com
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/news"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">News & Media</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/careers"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Careers</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/contact-us"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
