import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData, projectsData } from '../data/siteContent';
import ProjectCard from '../components/ProjectCard';
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

    const schemas = [];
    if (service.schema) {
        schemas.push(service.schema);
    }
    if (service.faq && service.faq.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": service.faq.map(item => ({
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
                title={service.metaTitle || service.title}
                description={service.metaDescription}
                canonical={`https://www.lomaxconstruction.com/services/${slug}`}
                schema={schemas.length > 0 ? schemas : undefined}
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

                        {/* Structured Benefits Section */}
                        {service.benefits && (
                            <div className="benefits-section mt-medium">
                                <h3>Key Benefits</h3>
                                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '4px', borderLeft: '3px solid var(--color-accent)' }}>
                                            <strong>{benefit.title}:</strong> {benefit.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* FAQ Section */}
                        {service.faq && (
                            <div className="faq-section mt-medium">
                                <h3>Frequently Asked Questions</h3>
                                <div style={{ marginTop: '1rem' }}>
                                    {service.faq.map((item, index) => (
                                        <details key={index} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '4px' }}>
                                            <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>{item.question}</summary>
                                            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.answer}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Related Projects Section */}
                        {(() => {
                            const serviceKeywords = {
                                'preconstruction': ['Preconstruction', 'Design-Build'],
                                'design-build': ['Design-Build'],
                                'construction-management': ['Construction Management', 'CM'],
                                'general-contracting': ['General Contracting'],
                                'renovations-upfits': ['Renovation', 'Tenant Upfit', 'Expansion', 'Upfit']
                            };

                            const keywords = serviceKeywords[slug] || [];
                            const relatedProjects = Object.entries(projectsData).filter(([_, project]) =>
                                project.services && project.services.some(s => keywords.some(k => s.includes(k)))
                            );

                            if (relatedProjects.length === 0) return null;

                            return (
                                <div className="related-projects mt-large">
                                    <h3>Featured {service.title} Projects</h3>
                                    <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                                        {relatedProjects.map(([projectSlug, project]) => (
                                            <ProjectCard key={projectSlug} slug={projectSlug} project={project} />
                                        ))}
                                    </div>
                                </div>
                            );
                        })()}

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
