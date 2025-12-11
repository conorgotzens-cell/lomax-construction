import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/siteContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import DOMPurify from 'dompurify';
import './PageStyles.css';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData[slug];

    if (!service) {
        return <div className="container" style={{ padding: '5rem' }}><h2>Service not found</h2><Link to="/services" className="btn">Back to Services</Link></div>;
    }

    return (
        <div className="page-wrapper">
            <SEO
                title={service.metaTitle || service.title}
                description={service.metaDescription}
                canonical={`https://www.lomaxconstruction.com/services/${slug}`}
            />
            <section className="page-hero service-detail-hero">
                <div className="container">
                    <Link to="/services" className="back-link"><ArrowLeft size={16} /> Back to Services</Link>
                    <h1>{service.title}</h1>
                    <p className="hero-subtitle">{service.subtitle}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block detail-content">
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(service.content) }} />

                        <div className="cta-box mt-large">
                            <h3>Ready to start your {service.title.toLowerCase()} project?</h3>
                            <Link to="/contact" className="btn">Request a Consultation</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
