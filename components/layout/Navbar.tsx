"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Phone,
} from "lucide-react";
import "./Navbar.css";

const productLinks = [
  {
    name: "Portable Power Stations",
    href: "/products?category=portable-power-stations",
  },
  {
    name: "Generators",
    href: "/products?category=generators",
  },
  {
    name: "Lithium Batteries",
    href: "/products?category=lithium-batteries",
  },
  {
    name: "Solar Panels",
    href: "/products?category=solar-panels",
  },
  {
    name: "Solar Panel Floodlights",
    href: "/products?category=solar-panel-floodlights",
  },
];

const solutionLinks = [
  {
    name: "Residential Solar",
    href: "/solutions#residential",
  },
  {
    name: "Commercial Solar",
    href: "/solutions#commercial",
  },
  {
    name: "Backup Power",
    href: "/solutions#backup",
  },
  {
    name: "Solar Installation",
    href: "/solutions#installation",
  },
];

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setProductsOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header className="navbar">
      {/* TOP BAR */}
      <div className="navbar-top">
        <div className="navbar-top-inner">
          <p className="navbar-top-text">
            Reliable Solar &amp; Backup Power Solutions
          </p>

          <div className="navbar-top-contact">
            <a href="tel:+2540142741164">
              <Phone size={13} />
              <span>+254 014 274 1164</span>
            </a>

            <span className="navbar-divider" />

            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="navbar-main">
        {/* LOGO */}
        <Link
          href="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
          aria-label="Stamford Solar Solutions home"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Stamford Solar Solutions logo"
            width={180}
            height={52}
            className="navbar-logo-image"
            priority
          />

          <div className="navbar-brand">
            <span className="navbar-brand-name">
              Stamford Solar Solutions
            </span>
            <span className="navbar-brand-subtitle">
              From Sunlight To Reliable Power
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-menu">
          {/* HOME */}
          <Link href="/" className="navbar-link">
            Home
          </Link>

          {/* PRODUCTS DROPDOWN */}
          <div className="navbar-dropdown">
            <button
              type="button"
              onClick={() => {
                setProductsOpen((prev) => !prev);
                setSolutionsOpen(false);
              }}
              className="navbar-dropdown-button"
              aria-expanded={productsOpen}
              aria-haspopup="menu"
            >
              <span>Products</span>

              <ChevronDown
                size={15}
                className={`navbar-chevron ${
                  productsOpen ? "open" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="navbar-dropdown-menu">
                <div className="navbar-dropdown-header">
                  <p className="navbar-dropdown-label">
                    Our Products
                  </p>

                  <p className="navbar-dropdown-description">
                    Explore our power solutions
                  </p>
                </div>

                {productLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setProductsOpen(false)}
                    className="navbar-dropdown-item"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/products"
                  onClick={() => setProductsOpen(false)}
                  className="navbar-dropdown-all"
                >
                  View All Products
                  <span>→</span>
                </Link>
              </div>
            )}
          </div>

          {/* SOLUTIONS DROPDOWN */}
          <div className="navbar-dropdown">
            <button
              type="button"
              onClick={() => {
                setSolutionsOpen((prev) => !prev);
                setProductsOpen(false);
              }}
              className="navbar-dropdown-button"
              aria-expanded={solutionsOpen}
              aria-haspopup="menu"
            >
              <span>Solutions</span>

              <ChevronDown
                size={15}
                className={`navbar-chevron ${
                  solutionsOpen ? "open" : ""
                }`}
              />
            </button>

            {solutionsOpen && (
              <div className="navbar-dropdown-menu">
                <div className="navbar-dropdown-header">
                  <p className="navbar-dropdown-label">
                    Our Solutions
                  </p>

                  <p className="navbar-dropdown-description">
                    Power solutions designed for you
                  </p>
                </div>

                {solutionLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSolutionsOpen(false)}
                    className="navbar-dropdown-item"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/solutions"
                  onClick={() => setSolutionsOpen(false)}
                  className="navbar-dropdown-all"
                >
                  View All Solutions
                  <span>→</span>
                </Link>
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          {navLinks
            .filter((link) => link.name !== "Home")
            .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="navbar-link"
              >
                {link.name}
              </Link>
            ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">
          <div className={`navbar-search-wrapper ${searchOpen ? "open" : ""}`}>
            {searchOpen && (
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }

                  if (e.key === "Enter" && searchQuery.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(
                      searchQuery.trim()
                    )}`;
                  }
                }}
                placeholder="Search products..."
                className="navbar-search-input"
                aria-label="Search products"
              />
            )}

            <button
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              className="navbar-search"
              onClick={() => {
                setSearchOpen((prev) => !prev);

                if (searchOpen) {
                  setSearchQuery("");
                }
              }}
            >
              {searchOpen ? (
                <X size={19} strokeWidth={2} />
              ) : (
                <Search size={20} strokeWidth={2} />
              )}
            </button>
          </div>

          <Link href="/quote" className="navbar-quote">
            <span>Request a Quote</span>
            <span>→</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={
            mobileOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div className="navbar-mobile">
          <div className="navbar-mobile-inner">
            <nav>
              {/* HOME */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="navbar-mobile-link"
              >
                Home
              </Link>

              {/* MOBILE PRODUCTS */}
              <button
                type="button"
                onClick={() => {
                  setProductsOpen((prev) => !prev);
                  setSolutionsOpen(false);
                }}
                className="navbar-mobile-dropdown-button"
                aria-expanded={productsOpen}
              >
                <span>Products</span>

                <ChevronDown
                  size={17}
                  className={`navbar-chevron ${
                    productsOpen ? "open" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="navbar-mobile-submenu">
                  {productLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <Link
                    href="/products"
                    onClick={closeMobileMenu}
                  >
                    View All Products →
                  </Link>
                </div>
              )}

              {/* MOBILE SOLUTIONS */}
              <button
                type="button"
                onClick={() => {
                  setSolutionsOpen((prev) => !prev);
                  setProductsOpen(false);
                }}
                className="navbar-mobile-dropdown-button"
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>

                <ChevronDown
                  size={17}
                  className={`navbar-chevron ${
                    solutionsOpen ? "open" : ""
                  }`}
                />
              </button>

              {solutionsOpen && (
                <div className="navbar-mobile-submenu">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <Link
                    href="/solutions"
                    onClick={closeMobileMenu}
                  >
                    View All Solutions →
                  </Link>
                </div>
              )}

              {/* OTHER MOBILE LINKS */}
              {navLinks
                .filter((link) => link.name !== "Home")
                .map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="navbar-mobile-link"
                  >
                    {link.name}
                  </Link>
                ))}

              {/* MOBILE QUOTE */}
              <Link
                href="/quote"
                onClick={closeMobileMenu}
                className="navbar-mobile-quote"
              >
                <Phone size={17} />
                <span>Request a Quote</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
