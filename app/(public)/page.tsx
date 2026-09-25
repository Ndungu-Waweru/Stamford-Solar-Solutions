import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  Factory,
  Home,
  Lightbulb,
  ShieldCheck,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import "./#Home.css";

const productCategories = [
  {
    title: "Solar Panels",
    description: "High-quality solar panels for dependable energy generation.",
    href: "/products?category=solar-panels",
    icon: Sun,
  },
  {
    title: "Lithium Batteries",
    description: "Reliable energy storage for homes, businesses and backup systems.",
    href: "/products?category=lithium-batteries",
    icon: BatteryCharging,
  },
  {
    title: "Inverters",
    description: "Efficient power conversion for modern solar energy systems.",
    href: "/products?category=inverters",
    icon: Zap,
  },
  {
    title: "Generators",
    description: "Dependable backup power when you need it most.",
    href: "/products?category=generators",
    icon: Factory,
  },
  {
    title: "Solar Water Pumps",
    description: "Efficient solar-powered water pumping solutions.",
    href: "/products?category=solar-water-pumps",
    icon: Wrench,
  },
  {
    title: "Portable Power Stations",
    description: "Compact, flexible power for home, work and outdoor use.",
    href: "/products?category=portable-power-stations",
    icon: BatteryCharging,
  },
];

const solutions = [
  {
    title: "Residential Solar",
    description:
      "Power your home with reliable solar energy, battery storage and intelligent backup solutions.",
    href: "/solutions#residential",
    icon: Home,
  },
  {
    title: "Commercial Solar",
    description:
      "Reduce energy costs and improve business continuity with scalable solar power systems.",
    href: "/solutions#commercial",
    icon: Factory,
  },
  {
    title: "Backup Power",
    description:
      "Stay powered during outages with dependable batteries, inverters and backup systems.",
    href: "/solutions#backup",
    icon: BatteryCharging,
  },
  {
    title: "Solar Installation",
    description:
      "Professional system design, installation and support tailored to your energy needs.",
    href: "/solutions#installation",
    icon: Wrench,
  },
];

const benefits = [
  "Quality solar products",
  "Professional installation",
  "Reliable backup power",
  "Practical energy solutions",
];

export default function HomePage() {
  return (
    <main className="home-page">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-grid" />
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              <Sun size={16} />
              <span>Smart Solar Energy Solutions</span>
            </div>

            <h1>
              From Sunlight
              <span> to Reliable Power.</span>
            </h1>

            <p className="hero-description">
              Power your home or business with reliable solar products,
              energy storage, backup power and professional solar
              installation solutions.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="hero-primary-button">
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <Link href="/quote" className="hero-secondary-button">
                Request a Quote
              </Link>
            </div>

            <div className="hero-trust">
              <div className="hero-trust-item">
                <CheckCircle2 size={17} />
                <span>Quality Products</span>
              </div>

              <div className="hero-trust-item">
                <CheckCircle2 size={17} />
                <span>Professional Installation</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-solar-orb">
              <div className="hero-orb-ring hero-orb-ring-one" />
              <div className="hero-orb-ring hero-orb-ring-two" />

              <div className="hero-sun">
                <Sun size={74} strokeWidth={1.5} />
              </div>
            </div>

            <div className="hero-floating-card hero-card-top">
              <div className="hero-card-icon">
                <Zap size={19} />
              </div>

              <div>
                <strong>Reliable Power</strong>
                <span>Day & Night</span>
              </div>
            </div>

            <div className="hero-floating-card hero-card-bottom">
              <div className="hero-card-icon">
                <BatteryCharging size={19} />
              </div>

              <div>
                <strong>Energy Storage</strong>
                <span>Smart Backup</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <ChevronRight size={16} />
        </div>
      </section>

      {/* =====================================================
          TRUST STRIP
          ===================================================== */}
      <section className="trust-section">
        <div className="home-container trust-container">
          <div className="trust-heading">
            <span>POWERING</span>
            <strong>Better Energy Choices</strong>
          </div>

          <div className="trust-items">
            <div className="trust-item">
              <Sun size={22} />
              <div>
                <strong>Solar Energy</strong>
                <span>Clean & efficient</span>
              </div>
            </div>

            <div className="trust-item">
              <BatteryCharging size={22} />
              <div>
                <strong>Energy Storage</strong>
                <span>Power when needed</span>
              </div>
            </div>

            <div className="trust-item">
              <ShieldCheck size={22} />
              <div>
                <strong>Reliable Systems</strong>
                <span>Built for confidence</span>
              </div>
            </div>

            <div className="trust-item">
              <Wrench size={22} />
              <div>
                <strong>Expert Support</strong>
                <span>From setup to service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
          ===================================================== */}
      <section className="products-section">
        <div className="home-container">
          <div className="section-heading">
            <div>
              <span className="section-label">OUR PRODUCTS</span>

              <h2>
                Power solutions built
                <span> for real needs.</span>
              </h2>
            </div>

            <Link href="/products" className="section-link">
              View All Products
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="product-grid">
            {productCategories.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  href={product.href}
                  key={product.title}
                  className="product-card"
                >
                  <div className="product-card-top">
                    <div className="product-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="product-arrow"
                    />
                  </div>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <span className="product-card-link">
                    Explore category
                    <ChevronRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
          ===================================================== */}
      <section className="solutions-section">
        <div className="home-container">
          <div className="solutions-intro">
            <span className="section-label">ENERGY SOLUTIONS</span>

            <h2>
              Solar power designed
              <span> around you.</span>
            </h2>

            <p>
              Whether you need power for your home, business, water
              systems or backup needs, we help you choose a practical
              energy solution that fits your requirements.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  href={solution.href}
                  key={solution.title}
                  className="solution-card"
                >
                  <div className="solution-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>

                  <span>
                    Learn more
                    <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY STAMFORD
          ===================================================== */}
      <section className="why-section">
        <div className="home-container why-container">
          <div className="why-visual">
            <div className="why-visual-main">
              <Sun size={58} strokeWidth={1.3} />

              <div>
                <strong>Smarter Energy</strong>
                <span>Built for tomorrow</span>
              </div>
            </div>

            <div className="why-visual-stat">
              <strong>01</strong>
              <span>
                Quality
                <br />
                Products
              </span>
            </div>

            <div className="why-visual-stat why-visual-stat-two">
              <strong>02</strong>
              <span>
                Reliable
                <br />
                Support
              </span>
            </div>
          </div>

          <div className="why-content">
            <span className="section-label">WHY STAMFORD</span>

            <h2>
              More than solar.
              <span> We deliver confidence.</span>
            </h2>

            <p>
              At Stamford Solar Solutions, our goal is simple: make
              dependable energy more accessible. From selecting the
              right products to installation and ongoing support, we
              focus on practical solutions that work for you.
            </p>

            <div className="benefits-list">
              {benefits.map((benefit) => (
                <div key={benefit} className="benefit-item">
                  <CheckCircle2 size={19} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="dark-button">
              Discover Stamford
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INSTALLATION CTA
          ===================================================== */}
      <section className="installation-section">
        <div className="home-container">
          <div className="installation-card">
            <div className="installation-content">
              <span className="section-label light">
                PROFESSIONAL INSTALLATION
              </span>

              <h2>
                Ready to make the
                <span> switch to solar?</span>
              </h2>

              <p>
                Talk to our team about your energy requirements and
                discover the right combination of solar generation,
                storage and backup power.
              </p>

              <div className="installation-actions">
                <Link
                  href="/quote"
                  className="installation-primary"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="installation-secondary"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            <div className="installation-visual">
              <div className="installation-sun">
                <Sun size={80} strokeWidth={1} />
              </div>

              <div className="installation-rays">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}
      <section className="final-cta-section">
        <div className="home-container final-cta">
          <div>
            <span className="section-label">STAMFORD SOLAR SOLUTIONS</span>

            <h2>
              From sunlight
              <span> to reliable power.</span>
            </h2>
          </div>

          <Link href="/products" className="final-cta-button">
            Explore Our Solutions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
