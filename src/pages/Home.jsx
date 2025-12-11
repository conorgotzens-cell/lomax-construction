import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HardHat, Building2, Ruler, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import nattyGreenesLogo from '../assets/images/clients/natty-greenes.png';
import joymongersLogo from '../assets/images/clients/joymongers.png';
import uncHealthLogo from '../assets/images/clients/unc-health.png';
import elonUniversityLogo from '../assets/images/clients/elon-university.png';
import './Home.css';

const Home = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "Lomax Construction",
        "url": "https://www.lomaxconstruction.com",
        "telephone": "(336) 690-0052",
        "email": "info@lomaxconstruction.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Colfax",
            "addressRegion": "NC",
            "postalCode": "27235",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "State",
            "name": "North Carolina"
        },
        // "sameAs": [
        //     "https://www.linkedin.com/company/lomax-construction-placeholder",
        //     "https://www.facebook.com/lomaxconstruction-placeholder"
        // ]
    };

    return (
        <div className="home-page">
            <SEO
                title="Commercial General Contractor NC"
                description="Lomax Construction is a premier commercial construction company in North Carolina, specializing in Design-Build, Healthcare, and Municipal projects."
                schema={schema}
            />
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title">
                        BUILDING NORTH CAROLINA'S <br />
                        <span className="text-highlight">FUTURE SINCE 1996</span>
                    </h1>
                    <p className="hero-subtitle">
                        Trusted NC general contractor specializing in healthcare, civic, education, and commercial projects.
                        Design-build, CM, renovations, and upfits.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn">Request a Consultation</Link>
                        <Link to="/projects" className="btn btn-secondary btn-white">View Portfolio</Link>
                    </div>
                    <div className="hero-trust-badge">
                        <span>Licensed & Insured &bull; NC General Contractor</span>
                    </div>
                </div>
            </section>

            {/* About / Intro */}
            <section className="section about-intro">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <span className="section-label">Our Expertise</span>
                            <h2>Building Lasting Partnerships</h2>
                            <div className="gold-line"></div>
                            <p>
                                At Lomax Construction, we build more than projects—we build lasting partnerships across North Carolina.
                                Since 1996, our team has delivered healthcare, civic, education, and commercial construction projects
                                that shape local communities and support long-term growth.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Whether you need design-build, construction management, general contracting, or phased renovations,
                                our proven process ensures every project is on time, on budget, and built to spec.
                            </p>
                            <Link to="/about" className="text-link">Why Choose Lomax <ArrowRight size={16} /></Link>
                        </div>
                        <div className="about-stats">
                            <motion.div
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Counter from={0} to={30} suffix="+" className="stat-number" />
                                <span className="stat-label">Years Experience</span>
                            </motion.div>
                            <motion.div
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Counter from={0} to={100} suffix="%" className="stat-number" />
                                <span className="stat-label">Safety Commitment</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section section-alt services-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label">Featured Markets</span>
                        <h2>We Serve Clients Across NC</h2>
                        <div className="gold-line center-line"></div>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon"><HardHat size={40} /></div>
                            <h3>Healthcare</h3>
                            <p>Medical office buildings, urgent care centers, surgery centers, imaging suites, labs, and behavioral health facilities.</p>
                            <Link to="/markets/healthcare" className="card-link">Learn More</Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><Building2 size={40} /></div>
                            <h3>Commercial</h3>
                            <p>Corporate interiors, tenant upfits, restaurants, hospitality, and industrial facilities.</p>
                            <Link to="/services" className="card-link">Learn More</Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><Ruler size={40} /></div>
                            <h3>Public Sector</h3>
                            <p>Education buildings, civic and municipal facilities that serve local residents every day.</p>
                            <Link to="/markets/civic-municipal" className="card-link">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partners */}
            <section className="section section-partners" style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid #eee' }}>
                <div className="container text-center">
                    <p style={{ textTransform: 'uppercase', letterSpacing: '2px', color: '#999', fontSize: '0.9rem', marginBottom: '2rem' }}>Trusted by Clients Across the Region</p>
                    <div className="partners-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 1 }}>
                        <img src={nattyGreenesLogo} alt="Natty Greene's Brewery Construction Project" style={{ height: '80px', objectFit: 'contain' }} />
                        <img src={joymongersLogo} alt="Joymongers Brewing Commercial Upfit" style={{ height: '90px', objectFit: 'contain' }} />
                        <img src={uncHealthLogo} alt="UNC Health Construction Partner" style={{ height: '65px', objectFit: 'contain' }} />
                        <img src={elonUniversityLogo} alt="Elon University Construction Projects" style={{ height: '80px', objectFit: 'contain' }} />

                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>Ready to Build?</h2>
                    <p>Your project deserves the right partner. Let's discuss your next healthcare, municipal, or corporate project.</p>
                    <Link to="/contact" className="btn btn-large">Request a Consultation</Link>
                </div>
            </section>
        </div>
    );
};

const Counter = ({ from = 0, to, duration = 2, suffix = "", className = "" }) => {
    const ref = useRef();
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            const node = ref.current;
            const controls = animate(from, to, {
                duration,
                onUpdate(value) {
                    node.textContent = Math.round(value) + suffix;
                },
                ease: "easeOut"
            });
            return () => controls.stop();
        }
    }, [from, to, duration, inView, suffix]);

    return <span ref={ref} className={className}>{from}{suffix}</span>;
};

export default Home;
