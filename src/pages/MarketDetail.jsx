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

    return (
        <div className="page-wrapper">
            <SEO
                title={market.metaTitle || market.title}
                description={market.metaDescription}
                canonical={`https://www.lomaxconstruction.com/markets/${slug}`}
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
