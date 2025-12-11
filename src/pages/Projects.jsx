import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/siteContent';
import ProjectCard from '../components/ProjectCard';
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
                            <ProjectCard key={slug} slug={slug} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
