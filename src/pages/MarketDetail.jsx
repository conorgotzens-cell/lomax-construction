import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { marketsData } from '../data/siteContent';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import DOMPurify from 'dompurify';
import './PageStyles.css';

const MarketDetail = () => {
    const { slug } = useParams();
    const market = marketsData[slug];

    if (!market) {
        return <div className="container" style={{ padding: '5rem' }}><h2>Market not found</h2><Link to="/projects" className="btn">Back to Projects</Link></div>;
    }

    const schemas = [];

    // Generate base Service schema for the market
    schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${market.title} Construction`,
        "provider": {
            "@type": "GeneralContractor",
            "name": "Lomax Construction",
            "url": "https://www.lomaxconstruction.com"
        },
        "description": market.metaDescription,
        "areaServed": {
            "@type": "State",
            "name": "North Carolina"
        }
    });

    if (market.faq && market.faq.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": market.faq.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        });
    }

    return (
        <div className="page-wrapper">
            <SEO
                title={market.metaTitle || market.title}
                description={market.metaDescription}
                canonical={`https://www.lomaxconstruction.com/markets/${slug}`}
                schema={schemas.length > 0 ? schemas : undefined}
            />
            <section className="page-hero market-detail-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/projects" className="back-link"><ArrowLeft size={16} /> Back to Projects</Link>
                    </div>
                    <h1>{market.title}</h1>
                    <p className="hero-subtitle">{market.subtitle}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block detail-content">
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(market.content) }} />

                        {/* Structured Benefits/Capabilities Section */}
                        {market.benefits && (
                            <div className="benefits-section mt-medium">
                                <h3>Why Choose Lomax for {market.title}</h3>
                                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                                    {market.benefits.map((benefit, index) => (
                                        <li key={index} style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '4px', borderLeft: '3px solid var(--color-accent)' }}>
                                            <strong>{benefit.title}:</strong> {benefit.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* FAQ Section */}
                        {market.faq && (
                            <div className="faq-section mt-medium">
                                <h3>Common Questions</h3>
                                <div style={{ marginTop: '1rem' }}>
                                    {market.faq.map((item, index) => (
                                        <details key={index} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '4px' }}>
                                            <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>{item.question}</summary>
                                            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.answer}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="cta-box mt-large">
                            <h3>Starting a project in this sector?</h3>
                            <p>We have the specialized experience to get it done right.</p>
                            <Link to="/contact" className="btn">Discuss Your Project</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketDetail;
