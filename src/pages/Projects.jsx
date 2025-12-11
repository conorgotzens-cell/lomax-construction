import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/siteContent';
import './PageStyles.css';

const Projects = () => {
    return (
        <div className="page-wrapper">
            <section className="page-hero projects-hero">
                <div className="container">
                    <h1>Our Projects Across North Carolina</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
                        <p>
                            Every project tells a story. At Lomax Construction, we measure success by how our buildings support the people who use them.
                            From healthcare facilities in Charlotte and Raleigh-Durham to municipal projects in the Triad, our work reflects nearly
                            three decades of experience.
                        </p>
                    </div>

                    <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {Object.entries(projectsData).map(([slug, project]) => (
                            <div key={slug} className="project-card" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', background: '#fff' }}>
                                <div className="project-image" style={{ height: '220px', overflow: 'hidden' }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                                </div>
                                <div className="project-info" style={{ padding: '1.5rem' }}>
                                    <span className="project-type" style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                        {project.type}
                                    </span>
                                    <h3 style={{ margin: '0.5rem 0 0.25rem', fontSize: '1.25rem' }}>{project.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>{project.location}</p>
                                    <Link to={`/projects/${slug}`} style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                                        View Project Details →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
