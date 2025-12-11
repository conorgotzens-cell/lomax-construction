import React from 'react';
import { Link } from 'react-router-dom';
import { marketsData } from '../data/siteContent';
import SEO from '../components/SEO';
import './PageStyles.css';

const Markets = () => {
    // Convert marketsData object to an array for easy mapping
    const markets = Object.entries(marketsData).map(([slug, data]) => ({
        slug,
        ...data
    }));

    return (
        <div className="page-wrapper">
            <SEO
                title="Commercial Construction Markets NC | Lomax Construction"
                description="Lomax Construction serves diverse market sectors including Healthcare, Education, Civic, Corporate, and Industrial clients across North Carolina."
                canonical="https://www.lomaxconstruction.com/markets"
            />
            <section className="page-hero markets-hero">
                <div className="container">
                    <h1>Sectors We Serve</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
                        <h2>Expertise for Every Environment</h2>
                        <div className="gold-line"></div>
                        <p>
                            Every market has its own unique challenges—from Infection Control (ICRA) in hospitals to security clearances in civic buildings.
                            Lomax Construction brings specialized teams and proven methodologies to each sector we serve, ensuring that your facility
                            is built to perform.
                        </p>
                    </div>

                    <div className="services-grid">
                        {markets.map((market) => (
                            <div key={market.slug} className="service-card">
                                {market.image && (
                                    <div className="card-image-wrapper">
                                        <img
                                            src={market.image}
                                            alt={market.title}
                                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px 4px 0 0', marginBottom: '1rem' }}
                                        />
                                    </div>
                                )}
                                <div style={{ padding: '0 1rem 1rem' }}>
                                    <h3>{market.title}</h3>
                                    <p className="subtitle" style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                        {market.subtitle}
                                    </p>
                                    <p style={{ marginBottom: '1.5rem' }}>
                                        {/* Truncate description for card view if needed, or use a summary if available. 
                                            For now, we'll take the first sentence of the content content or a custom excerpt. 
                                            the content in data is HTML string, so let's just use a generic 'Learn more' approach or extract text.
                                            Actually, let's just not show the body text here to keep it clean, or manually extract.
                                            Let's use the valid metaDescription as a short summary since it is plain text.
                                        */}
                                        {market.metaDescription}
                                    </p>
                                    <Link to={`/markets/${market.slug}`} className="card-link">Explore Sector</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Markets;
