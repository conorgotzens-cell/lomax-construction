import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { locationsData } from '../data/siteContent';
import { ArrowLeft, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import DOMPurify from 'dompurify';
import './PageStyles.css';

const LocationDetail = () => {
    const { slug } = useParams();
    const location = locationsData[slug];

    if (!location) {
        return <div className="container" style={{ padding: '5rem' }}><h2>Location not found</h2><Link to="/locations" className="btn">Back to Locations</Link></div>;
    }

    return (
        <div className="page-wrapper">
            <SEO
                title={location.metaTitle || location.title}
                description={location.metaDescription}
                canonical={`https://www.lomaxconstruction.com/locations/${slug}`}
            />
            <section className="page-hero location-detail-hero">
                <div className="container">
                    <Link to="/locations" className="back-link"><ArrowLeft size={16} /> All Locations</Link>
                    <h1>{location.title}</h1>
                    <p className="hero-subtitle">{location.subtitle}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block detail-content">
                        <div className="location-highlight">
                            <MapPin size={32} color="var(--color-accent)" />
                            <span>Serving {location.title} and surrounding areas</span>
                        </div>
                        <div className="mt-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(location.content) }} />

                        <div className="cta-box mt-large">
                            <h3>Build in {location.title}</h3>
                            <p>Contact our local team to discuss your construction needs.</p>
                            <Link to="/contact" className="btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationDetail;
