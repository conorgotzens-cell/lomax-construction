import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, HardHat, Building2, Wrench, Users } from 'lucide-react';
import './PageStyles.css';
import '../pages/Home.css'; // Reusing service-card styles

const Services = () => {
    const services = [
        {
            title: 'Preconstruction Services',
            slug: 'preconstruction',
            icon: <Users size={40} />,
            desc: 'The foundation of a successful project. We provide budgeting, feasibility studies, constructability reviews, and value engineering to help owners make informed decisions.'
        },
        {
            title: 'Design-Build',
            slug: 'design-build',
            icon: <Ruler size={40} />,
            desc: 'Streamlined delivery with a single point of contact. Manages both design and construction for faster schedules, greater cost certainty, and improved collaboration.'
        },
        {
            title: 'Construction Management (CMAR)',
            slug: 'construction-management',
            icon: <HardHat size={40} />,
            desc: 'Acting as your advocate from planning to completion. offering open-book GMP, schedule leadership, and safety management while maximizing project outcomes.'
        },
        {
            title: 'General Contracting',
            slug: 'general-contracting',
            icon: <Building2 size={40} />,
            desc: 'Traditional bid-build delivery backed by decades of experience. We differ competitive bids, strong subcontractor management, and high-quality execution.'
        },
        {
            title: 'Renovations & Upfits',
            slug: 'renovations-upfits',
            icon: <Wrench size={40} />,
            desc: 'Specializing in occupied spaces. We handle tenant improvements, interior renovations, and phased construction to minimize disruption to your operations.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="page-hero services-hero">
                <div className="container">
                    <h1>Full-Cycle Construction Services</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
                        <h2>From Concept to Completion</h2>
                        <div className="gold-line"></div>
                        <p>
                            At Lomax Construction, we provide a full range of services that take your project from start to finish.
                            Whether you need early-stage budgeting, a design-build partner, or a general contractor to deliver on a bid,
                            our experienced teams bring clarity, accountability, and precision to every stage of the process.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to={`/services/${service.slug}`} className="card-link">Learn More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
