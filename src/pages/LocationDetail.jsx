import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { locationsData, projectsData } from '../data/siteContent';
import { ArrowLeft, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import DOMPurify from 'dompurify';
import './PageStyles.css';

const LocationDetail = () => {
    const { slug } = useParams();
    const location = locationsData[slug];

    // Filter projects for this region
    const regionProjects = Object.entries(projectsData).filter(([_, p]) => p.region === slug);

    if (!location) {
        return <div className="container" style={{ padding: '5rem' }}><h2>Location not found</h2><Link to="/locations" className="btn">Back to Locations</Link></div>;
    }

    // Advanced Schema Construction (2025 Standards)
    const isHQ = location.quickFacts?.["Service Type"] === "Headquarters";

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "GeneralContractor",
                "@id": "https://www.lomaxconstruction.com/#organization",
                "name": "Lomax Construction",
                "image": "https://www.lomaxconstruction.com/assets/logo-og.jpg", // Placeholder
                "url": `https://www.lomaxconstruction.com/locations/${slug}`,
                "telephone": "+1-336-993-9005", // Main office phone
                "priceRange": "$$$",
                // Only include specific address for HQ, else omit or use main address ref if truly needed, but safest is areaServed focus for regions.
                ...(isHQ ? {
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "123 Construction Way", // Placeholder
                        "addressLocality": "Colfax",
                        "addressRegion": "NC",
                        "postalCode": "27235",
                        "addressCountry": "US"
                    }
                } : {
                    "address": { // Reference to HQ even for regions, or just define area served. For SGE, explicit areaServed is key.
                        "@type": "PostalAddress",
                        "addressLocality": "Colfax",
                        "addressRegion": "NC",
                        "addressCountry": "US"
                    }
                }),
                "areaServed": {
                    "@type": "Place",
                    "name": location.title,
                    "geo": location.geo ? {
                        "@type": "GeoCoordinates",
                        "latitude": location.geo.lat,
                        "longitude": location.geo.lng
                    } : undefined
                },
                // Opening Hours
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "17:00"
                    }
                ],
                // Reviews (Aggregate)
                ...(location.reviews && location.reviews.length > 0 ? {
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5",
                        "reviewCount": location.reviews.length.toString(),
                        "bestRating": "5",
                        "worstRating": "1"
                    },
                    "review": location.reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.author },
                        "datePublished": r.date,
                        "reviewBody": r.text,
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": r.rating.toString()
                        }
                    }))
                } : {})
            },
            {
                "@type": "FAQPage",
                "mainEntity": location.faq?.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                })) || []
            }
        ]
    };

    // Dynamic SEO Title Strategy
    const seoTitle = location.metaTitle || `Commercial General Contractor ${location.title} | Lomax Construction`;
    const seoDesc = location.metaDescription || `Full service commercial general contractor serving ${location.title} and surrounding areas. Healthcare, Education, and Industrial construction experts.`;

    return (
        <div className="page-wrapper">
            <SEO
                title={seoTitle}
                description={seoDesc}
                canonical={`https://www.lomaxconstruction.com/locations/${slug}`}
            />
            {/* Inject Schema */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>

            <section className="page-hero location-detail-hero">
                <div className="container">
                    <Link to="/locations" className="back-link"><ArrowLeft size={16} /> All Locations</Link>
                    <h1>{location.title}</h1>
                    <p className="hero-subtitle">{location.subtitle}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-grid-location" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'start' }}>

                        {/* Main Content Column */}
                        <div className="main-col">
                            <div className="location-highlight">
                                <MapPin size={32} color="var(--color-accent)" />
                                <span>Serving {location.title} and surrounding areas {location.key_towns && `including ${location.key_towns.slice(0, 3).join(', ')}`}</span>
                            </div>

                            <div className="mt-4 text-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(location.content) }} />

                            {/* Location Specific FAQ */}
                            {location.faq && location.faq.length > 0 && (
                                <div className="location-faq mt-large">
                                    <h3>Common Questions about Construction in {location.title}</h3>
                                    <div className="faq-list" style={{ marginTop: '1.5rem' }}>
                                        {location.faq.map((item, index) => (
                                            <div key={index} className="faq-item" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #eee' }}>
                                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{item.question}</h4>
                                                <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{item.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Reviews Section */}
                            {location.reviews && location.reviews.length > 0 && (
                                <div className="location-reviews mt-large">
                                    <h3>Client Success Stories</h3>
                                    <div className="reviews-list" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {location.reviews.map((r, idx) => (
                                            <div key={idx} className="review-card" style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-accent)' }}>
                                                <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: '#333', marginBottom: '1rem' }}>"{r.text}"</p>
                                                <div className="reviewer-meta" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                                                    <strong>{r.author}, {r.role}</strong>
                                                    <span>{'★'.repeat(r.rating)}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Column */}
                        <div className="sidebar-col" style={{ position: 'sticky', top: '2rem' }}>
                            {/* Quick Facts Card */}
                            {location.quickFacts && (
                                <div className="quick-facts-card" style={{ background: 'var(--color-dark)', color: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
                                    <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem', marginBottom: '1.5rem', color: 'white' }}>At a Glance</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {Object.entries(location.quickFacts).map(([key, value]) => (
                                            <li key={key} style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, marginBottom: '0.25rem' }}>{key}</span>
                                                <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Local Service Areas List */}
                            {location.key_towns && (
                                <div className="towns-list-card" style={{ background: '#f5f5f5', padding: '2rem', borderRadius: '8px' }}>
                                    <h4>Areas Served</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                                        {location.key_towns.map(town => (
                                            <span key={town} style={{ background: 'white', padding: '0.35rem 0.75rem', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid #ddd' }}>{town}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Local Projects Section (Full Width below columns) */}
                    {regionProjects.length > 0 && (
                        <div className="local-projects mt-large" style={{ borderTop: '1px solid #eee', paddingTop: '4rem' }}>
                            <h3>Featured Projects in {location.title}</h3>
                            <div className="projects-grid-mini" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                                {regionProjects.map(([pSlug, p]) => (
                                    <Link key={pSlug} to={`/projects/${pSlug}`} className="project-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="project-card-mini" style={{
                                            border: '1px solid #eee',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            background: '#fff',
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                            transition: 'transform 0.2s ease',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', display: 'flex', alignItems: 'flex-end', padding: '1rem' }}>
                                                    <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '500', background: 'var(--color-accent)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{p.type}</span>
                                                </div>
                                            </div>
                                            <div style={{ padding: '1.5rem', flex: 1 }}>
                                                <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem' }}>{p.title}</h4>
                                                <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>{p.location}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="cta-box mt-large">
                        <h3>Build in {location.title}</h3>
                        <p>Contact our local team to discuss your construction needs.</p>
                        <Link to="/contact" className="btn">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationDetail;
