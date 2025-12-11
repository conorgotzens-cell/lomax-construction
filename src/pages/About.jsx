import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';
import EricLomaxImg from '../assets/images/team/eric-lomax.jpg';
import JohnLomaxImg from '../assets/images/team/john-lomax.jpg'; // Corrected image
import Team2Img from '../assets/images/team/team-member-2.jpg'; // Using for Travis Langley
import Team3Img from '../assets/images/team/team-member-3.jpg'; // Using for Sandy Maggard

import SEO from '../components/SEO';

const About = () => {
    const teamSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "John Lomax",
            "jobTitle": "Founder & President",
            "worksFor": { "@type": "Organization", "name": "Lomax Construction" },
            "image": "https://www.lomaxconstruction.com/assets/images/team/team-member-1.jpg"
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Travis Langley",
            "jobTitle": "Partner & VP Pre-Construction",
            "worksFor": { "@type": "Organization", "name": "Lomax Construction" },
            "image": "https://www.lomaxconstruction.com/assets/images/team/team-member-2.jpg"
        }
    ];

    return (
        <div className="page-wrapper">
            <SEO
                title="About Us | Commercial Construction Company NC"
                description="Lomax Construction, founded in 1996, is a premier commercial general contractor in NC. Meet our leadership team."
                canonical="https://www.lomaxconstruction.com/about"
                schema={teamSchema}
            />
            <section className="page-hero about-hero">
                <div className="container">
                    <h1 style={{ position: 'relative', zIndex: 1 }}>Premier General Contractor in NC</h1>
                    <p style={{ fontSize: '1.25rem', marginTop: '1rem', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                        Building Trust & Excellence Since 1996 | Healthcare, Commercial, & Education Specialists
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Intro / Company History */}
                    <div className="content-block">
                        <h2>Building a Legacy of Quality</h2>
                        <div className="gold-line"></div>
                        <p>
                            In July of 1996, John Lomax established Lomax Construction, Inc. with a clear vision: to bring a higher standard of integrity and hands-on commitment to the North Carolina construction market. Leaving a position at a respected general contractor, John built a foundation that prioritized unique, complex projects over volume.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            We grew steadily, earning a reputation for quality and the ability to deliver challenging builds that others might shy away from. Our clients know that our hands-on approach and absolute level of focus ensure success on their projects every time. At Lomax, big company capability truly meets small company attention.
                        </p>
                    </div>

                    {/* Delivery Methods - SEO Rich */}
                    <div className="content-block mt-large" style={{ maxWidth: '100%' }}>
                        <h3>Construction Delivery Methods</h3>
                        <p>We tailor our services to the specific needs of each client, offering flexible delivery methods designed to maximize value and efficiency.</p>

                        <div className="delivery-grid">
                            <div className="delivery-item">
                                <h4>Negotiated General Contract</h4>
                                <p>
                                    Offers benefits like early value engineering, detailed document review, and "open book" accounting. This aligns owner and contractor interests while maintaining competitive pricing at the subcontractor level.
                                </p>
                            </div>
                            <div className="delivery-item">
                                <h4>Design-Build</h4>
                                <p>
                                    Lomax serves as the single point of contact for both design and construction. We align with strategic design partners to provide a turn-key solution, perfect for owners looking for a "one-stop-shop" experience.
                                </p>
                            </div>
                            <div className="delivery-item">
                                <h4>Construction Management (CM@R)</h4>
                                <p>
                                    Similar to our negotiated approach, we act as both Construction Manager and General Contractor to eliminate duplicated fees. This method ensures rigorous oversight from pre-construction through closeout.
                                </p>
                            </div>
                            <div className="delivery-item">
                                <h4>Lump Sum Bidding</h4>
                                <p>
                                    Driven by our "hard bid edge," we remain competitive in the open market. While 75% of our work is negotiated today, we continue to welcome opportunities to bid for select clients who value service and schedule.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Team - Updated Bios */}
                    <div className="content-block mt-large" style={{ maxWidth: '100%' }}>
                        <h3>Leadership Team</h3>
                        <p>
                            We have an absolute minimum of management layers. Our ownership team stays close to all projects, ensuring that decisions can be made quickly in the field.
                        </p>
                        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>

                            {/* John Lomax */}
                            <div className="team-card">
                                <div className="team-image" style={{ height: '300px', overflow: 'hidden', marginBottom: '1rem', background: '#eee' }}>
                                    <img src={JohnLomaxImg} alt="John Lomax - Founder & President" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4>John Lomax</h4>
                                <p className="team-role" style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>FOUNDER & PRESIDENT</p>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                    Founded the company in 1996 to provide unique, hands-on construction services.
                                </p>
                            </div>

                            {/* Travis Langley */}
                            <div className="team-card">
                                <div className="team-image" style={{ height: '300px', overflow: 'hidden', marginBottom: '1rem', background: '#eee' }}>
                                    <img src={Team2Img} alt="Travis Langley - Partner & VP" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4>Travis Langley</h4>
                                <p className="team-role" style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>PARTNER-VP PRE-CONSTRUCTION</p>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                    A 20-year associate leading pre-construction services and expanding client focus in Healthcare and Education.
                                </p>
                            </div>

                            {/* Sandy Maggard */}
                            <div className="team-card">
                                <div className="team-image" style={{ height: '300px', overflow: 'hidden', marginBottom: '1rem', background: '#eee' }}>
                                    <img src={Team3Img} alt="Sandy Maggard - CFO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4>Sandy Maggard</h4>
                                <p className="team-role" style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>CHIEF FINANCIAL OFFICER</p>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                    Overseeing financial integrity and stability across all company operations.
                                </p>
                            </div>

                            {/* Eric Lomax */}
                            <div className="team-card">
                                <div className="team-image" style={{ height: '300px', overflow: 'hidden', marginBottom: '1rem', background: '#eee' }}>
                                    <img src={EricLomaxImg} alt="Eric Lomax - Estimator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4>Eric Lomax</h4>
                                <p className="team-role" style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>ESTIMATOR</p>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                    Providing detailed cost analysis and ensuring accurate project budgeting.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Where We Work */}
                    <div className="content-block mt-large">
                        <h3>Where We Work</h3>
                        <p>
                            Our headquarters is in <strong>Colfax, NC</strong>, right in the heart of the Triad. We focus on projects we can reach quickly to ensure hands-on management.
                        </p>
                        <h4 style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>Primary Markets:</h4>
                        <ul className="market-list">
                            <li>
                                <Link to="/locations/triad" className="market-link">Piedmont Triad</Link>
                            </li>
                            <li>
                                <Link to="/locations/raleigh-durham" className="market-link">Raleigh / Durham</Link>
                            </li>
                            <li>
                                <Link to="/locations/charlotte" className="market-link">Charlotte Region</Link>
                            </li>
                            <li>
                                <Link to="/locations/triad" className="market-link">Central NC 12 Counties</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Safety  and Citizenship */}
                    <div className="content-block mt-large">
                        <h3>Safety & Community</h3>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--color-accent)' }}>Safety First</h4>
                            <p>
                                The safety of our clients' personnel and those adjacent to our sites always comes first. We "own" the safety responsibility for every project, consistently achieving statistics better than the industry norm. We meet or exceed OSHA requirements and are proud of our N.C. Department of Labor Safety Achievements.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--color-accent)' }}>Corporate Citizenship & Charity</h4>
                            <p>
                                We believe charity should be its own reward. We support numerous non-profits and community organizations, often anonymously. For us, the best service we can provide is delivering a quality building that stands the test of time for the lowest overall cost.
                            </p>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--color-accent)' }}>MBE / WBE Outreach</h4>
                            <p>
                                Lomax has always adhered to a strict non-discrimination policy. We utilize minority and women-owned business enterprises (MBE/WBE) on our projects to find the best value, regardless of race or gender. We have an excellent track record of meeting contracting percentage targets in a fair and straightforward manner.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
