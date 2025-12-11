import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, slug }) => {
    return (
        <div className="project-card" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', background: '#fff', borderRadius: '4px', overflow: 'hidden' }}>
            <div className="project-image" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5))' }}></div>
            </div>
            <div className="project-info" style={{ padding: '1.5rem' }}>
                <span className="project-type" style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                    {project.type}
                </span>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', lineHeight: '1.2' }}>
                    <Link to={`/projects/${slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {project.title}
                    </Link>
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>{project.location}</p>
                <Link to={`/projects/${slug}`} style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    View Project Details <span>→</span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
