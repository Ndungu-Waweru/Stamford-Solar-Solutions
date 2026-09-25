"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Camera,
  BriefcaseBusiness,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import "./#Footer.css";

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
    name: "Inverters",
    href: "/products?category=inverters",
  },
  {
    name: "Solar Water Pumps",
    href: "/products?category=solar-water-pumps",
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

const companyLinks = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Request a Quote",
    href: "/quote",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-main">
        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand-column">
            <Link href="/" className="footer-brand">
              <div className="footer-logo">
                <Image
                  src="/images/logo/logo.png"
                  alt="Stamford Solar Solutions logo"
                  width={44}
                  height={44}
                  className="footer-logo-image"
                />
              </div>

              <div>
                <span className="footer-brand-name">
                  Stamford Solar Solutions
                </span>

                <span className="footer-brand-slogan">
                  From Sunlight to Reliable Power
                </span>
              </div>
            </Link>

            <p className="footer-description">
              Providing reliable solar products, energy storage,
              backup power and professional solar solutions for
              homes and businesses.
            </p>

            <Link href="/quote" className="footer-brand-cta">
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>

            <div className="footer-socials">
              <a
                href="#"
                aria-label="Facebook"
                className="footer-social"
              >
                <Globe size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="footer-social"
              >
                <Camera size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="footer-social"
              >
                <BriefcaseBusiness size={17} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="footer-social"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="footer-column">
            <h3>Products</h3>

            <ul>
              {productLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <ArrowRight size={13} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="footer-column">
            <h3>Solutions</h3>

            <ul>
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <ArrowRight size={13} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-column">
            <h3>Company</h3>

            <ul>
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <ArrowRight size={13} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Get In Touch</h3>

            <div className="footer-contact-list">

              <a
                href="tel:+2540142741164"
                className="footer-contact-item"
              >
                <div className="footer-contact-icon">
                  <Phone size={16} />
                </div>

                <div>
                  <span>Call Us</span>
                  <strong>+254 014 274 1164</strong>
                </div>
              </a>

              <a
                href="mailto:info@stamfordsolarsolutions.com"
                className="footer-contact-item"
              >
                <div className="footer-contact-icon">
                  <Mail size={16} />
                </div>

                <div>
                  <span>Email Us</span>
                  <strong>
                    info@stamfordsolarsolutions.com
                  </strong>
                </div>
              </a>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin size={16} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Nairobi, Kenya</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} Stamford Solar Solutions.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>

          <p className="footer-powered">
            From Sunlight <span>•</span> To Reliable Power
          </p>

        </div>
      </div>
    </footer>
  );
}
