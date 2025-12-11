import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './PageStyles.css';

const Locations = () => {
    const regions = [
        { title: 'The Triad Region', slug: 'triad', desc: 'Greensboro, Winston-Salem, High Point, Burlington' },
        { title: 'Charlotte Metro', slug: 'charlotte', desc: 'Mecklenburg and surrounding counties' },
        { title: 'Raleigh-Durham', slug: 'raleigh-durham', desc: 'Research Triangle and university hubs' },
        { title: 'Western NC', slug: 'western-nc', desc: 'Asheville, Boone, and mountain communities' },
        { title: 'Eastern NC', slug: 'eastern-nc', desc: 'Coastal and eastern municipalities' }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "Lomax Construction",
        "url": "https://www.lomaxconstruction.com",
        "areaServed": [
            { "@type": "City", "name": "Greensboro" },
            { "@type": "City", "name": "Winston-Salem" },
            { "@type": "City", "name": "High Point" },
            { "@type": "City", "name": "Charlotte" },
            { "@type": "City", "name": "Raleigh" },
            { "@type": "City", "name": "Durham" },
            { "@type": "AdministrativeArea", "name": "North Carolina" }
        ]
    };

    return (
        <div className="page-wrapper">
            <SEO
                title="Commercial Construction Locations NC | Lomax Construction"
                description="Lomax Construction serves commercial clients across North Carolina, including Greensboro, Charlotte, Raleigh-Durham, Western and Eastern NC."
                canonical="https://www.lomaxconstruction.com/locations"
                schema={locationSchema}
            />
            <section className="page-hero locations-hero">
                <div className="container">
                    <h1>Serving Communities Across North Carolina</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block">
                        <h2>Local Roots, Statewide Reach</h2>
                        <div className="gold-line"></div>
                        <p>
                            At Lomax Construction, our roots are in North Carolina. Since 1996, we’ve partnered with healthcare providers,
                            municipalities, schools, and businesses to build facilities that strengthen communities statewide.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Our headquarters in Colfax, NC places us in the heart of the state, enabling us to serve clients across
                            the Triad, Charlotte, Raleigh-Durham, and beyond with responsive project teams and consistent leadership.
                        </p>
                    </div>

                    <div className="locations-list" style={{ marginTop: '3rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        <div className="location-card" style={{ padding: '2rem', background: '#f4f4f4', borderLeft: '4px solid var(--color-accent)' }}>
                            <h3>Colfax Headquarters</h3>
                            <p style={{ marginTop: '0.5rem' }}>
                                Anchoring our operations, serving the immediate Triad region.
                            </p>
                            <div style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                Colfax, NC
                            </div>
                        </div>

                        <div className="location-card" style={{ padding: '2rem', background: '#fff', border: '1px solid #eee' }}>
                            <h3>Service Areas</h3>
                            <ul className="region-links" style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                                {regions.map((region) => (
                                    <li key={region.slug} style={{ marginBottom: '0.8rem' }}>
                                        <Link to={`/locations/${region.slug}`} style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
                                            {region.title}
                                        </Link>
                                        <span style={{ fontSize: '0.85rem', color: '#666' }}>{region.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Locations;
