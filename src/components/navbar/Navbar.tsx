import { MouseEvent, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const path = usePathname();
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

  function toggleNavbar() {
    document
      .querySelector(".navbar .navbar-collapse")
      ?.classList.toggle("show");
  }

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg ${path === "/" ? "navbar-home" : ""}`}
    >
      <div className="container">
        <Link href="/">
          <Image
            src="/rdb-group.svg"
            style={{ width: "205px", height: "75px" }}
            alt="logo"
            width={800}
            height={500}
          />
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
            <IoMenu className="text-black" />
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
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
              >
                <span className="rolling-text text-capitalize  fs-6 ">
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
                <span className="rolling-text text-capitalize fs-6">
                  Business
                </span>
              </a>
              <div className="dropdown-menu">
                <Link href="/" className="dropdown-item ">
                  <span className="text-capitalize fs-6">Properties</span>
                </Link>
                <Link href="/" className="dropdown-item text-capitalize fs-6">
                  Realty
                </Link>
                <Link href="/" className="dropdown-item text-capitalize fs-6">
                  Fracto
                </Link>
                <Link href="/" className="dropdown-item text-capitalize fs-6">
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
              >
                <span className="rolling-text text-capitalize fs-6">
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
              >
                <span className="rolling-text text-capitalize fs-6">Blogs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/careers"
                className="nav-link"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text text-capitalize fs-6">
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
              >
                <span className="rolling-text text-capitalize fs-6 ">
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
