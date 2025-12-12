import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/siteContent';
import SEO from '../components/SEO';
import { ArrowLeft, MapPin, Calendar, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './PageStyles.css';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projectsData[slug];
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Lightbox Handlers
    // Lightbox Handlers
    const openLightbox = React.useCallback((index) => setLightboxIndex(index), []);
    const closeLightbox = React.useCallback(() => setLightboxIndex(null), []);

    const nextImage = React.useCallback((e) => {
        if (e) e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % project.galleryImages.length);
    }, [project.galleryImages.length]);

    const prevImage = React.useCallback((e) => {
        if (e) e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
    }, [project.galleryImages.length]);

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage(null);
            if (e.key === 'ArrowLeft') prevImage(null);
        };
        if (lightboxIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

    // Project Schema
    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "Project",
        "name": project.title,
        "description": project.description,
        "location": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": project.location.split(',')[0],
                "addressRegion": "NC"
            }
        },
        "organizer": {
            "@type": "Organization",
            "name": "Lomax Construction",
            "url": "https://www.lomaxconstruction.com"
        }
    };

    return (
        <div className="page-wrapper">
            <SEO
                title={project.metaTitle}
                description={project.metaDescription}
                canonical={`https://www.lomaxconstruction.com/projects/${slug}`}
                schema={projectSchema}
            />

            <section className="page-hero project-detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${project.image})` }}>
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/projects" className="back-link"><ArrowLeft size={16} /> Back to Projects</Link>
                    </div>
                    <h1>{project.title}</h1>
                    <div className="project-meta-hero">
                        <span><MapPin size={16} /> {project.location}</span>
                        <span><Tag size={16} /> {project.type}</span>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="project-detail-grid">

                        {/* Main Content */}
                        <div className="content-block">
                            <h2>Project Overview</h2>
                            <div className="gold-line"></div>
                            <p className="lead" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                                {project.description}
                            </p>

                            {(project.challenge || project.solution) && (
                                <div className="challenge-solution-block" style={{ display: 'grid', gap: '2rem', marginTop: '3rem', padding: '1rem', background: '#fafafa', borderRadius: '8px' }}>
                                    {project.challenge && (
                                        <div className="challenge" style={{
                                            background: '#fff',
                                            padding: '2rem',
                                            borderRadius: '8px',
                                            borderLeft: '4px solid #e74c3c',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c0392b' }}>
                                                <div style={{ marginRight: '0.75rem', fontWeight: 'bold', fontSize: '1.2rem' }}>⚠️</div>
                                                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>The Challenge</h3>
                                            </div>
                                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>{project.challenge}</p>
                                        </div>
                                    )}
                                    {project.solution && (
                                        <div className="solution" style={{
                                            background: '#fff',
                                            padding: '2rem',
                                            borderRadius: '8px',
                                            borderLeft: '4px solid #27ae60',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                            position: 'relative'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#219150' }}>
                                                <div style={{ marginRight: '0.75rem', fontWeight: 'bold', fontSize: '1.2rem' }}>✅</div>
                                                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>The Solution</h3>
                                            </div>
                                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>{project.solution}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Project Gallery */}

                        </div>

                        {/* Sidebar */}
                        <aside className="project-sidebar" style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', height: 'fit-content' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>Project Details</h3>

                            <div className="sidebar-item" style={{ marginBottom: '1.5rem' }}>
                                <strong>Market Sector</strong>
                                <div style={{ marginTop: '0.25rem' }}>
                                    <Link to={`/markets/${project.marketSlug}`} style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
                                        {project.type}
                                    </Link>
                                </div>
                            </div>

                            <div className="sidebar-item" style={{ marginBottom: '1.5rem' }}>
                                <strong>Services Provided</strong>
                                <ul style={{ marginTop: '0.25rem', paddingLeft: '1.2rem' }}>
                                    {project.services.map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                            </div>

                            <div className="sidebar-item" style={{ marginBottom: '1.5rem' }}>
                                <strong>Completion Year</strong>
                                <div>{project.year}</div>
                            </div>

                            <div className="sidebar-cta" style={{ marginTop: '2rem' }}>
                                <Link to="/contact" className="btn" style={{ width: '100%', textAlign: 'center' }}>Discuss Similar Project</Link>
                            </div>
                        </aside>

                    </div>

                    {/* Project Gallery - Full Width */}
                    {project.galleryImages && project.galleryImages.length > 0 && (
                        <div className="project-gallery" style={{ marginTop: '4rem' }}>
                            <h3>Project Gallery</h3>
                            <div className="gold-line"></div>
                            <div className="gallery-grid">
                                {project.galleryImages.map((img, index) => (
                                    <div key={index} className="gallery-item" onClick={() => openLightbox(index)} style={{ cursor: 'pointer' }}>
                                        <img src={img} alt={`${project.title} gallery image ${index + 1}`} loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Overlay */}
            {lightboxIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}><X size={32} /></button>

                    <button className="lightbox-nav prev" onClick={prevImage}>
                        <ChevronLeft size={48} />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={project.galleryImages[lightboxIndex]}
                            alt={`${project.title} view`}
                        />
                        <div className="lightbox-counter">
                            {lightboxIndex + 1} / {project.galleryImages.length}
                        </div>
                    </div>

                    <button className="lightbox-nav next" onClick={nextImage}>
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
