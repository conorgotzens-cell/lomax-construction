import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, marketsData, locationsData } from '../data/siteContent';
import ProjectCard from '../components/ProjectCard';
import './PageStyles.css';

const Projects = () => {
    // State for filters and filtered projects
    const [filters, setFilters] = useState({
        market: 'All',
        location: 'All',
        service: 'All'
    });
    // Get unique lists for dropdowns
    const markets = ['All', ...Object.values(marketsData).map(m => m.title)];
    const locations = ['All', ...Object.values(locationsData).map(l => l.title)];

    // Extract all unique services from projects
    const allServices = new Set();
    Object.values(projectsData).forEach(project => {
        if (project.services) {
            project.services.forEach(service => allServices.add(service));
        }
    });
    const services = ['All', ...Array.from(allServices).sort()];

    // Derived State: Filtering
    const filteredProjects = Object.entries(projectsData).filter(([, project]) => {
        // Market Filter
        const projectMarketTitle = marketsData[project.marketSlug]?.title;
        const marketMatch = filters.market === 'All' || projectMarketTitle === filters.market;

        // Location Filter
        const projectLocationTitle = locationsData[project.region]?.title;
        const locationMatch = filters.location === 'All' || projectLocationTitle === filters.location;

        // Service Filter
        const serviceMatch = filters.service === 'All' || (project.services && project.services.includes(filters.service));

        return marketMatch && locationMatch && serviceMatch;
    });

    // Handle Filter Change
    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const filterStyle = {
        padding: '0.8rem 1rem',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '0.95rem',
        minWidth: '200px',
        backgroundColor: 'white',
        color: '#333'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '600',
        fontSize: '0.9rem',
        color: '#444'
    };

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

                    {/* Filter Controls */}
                    <div className="filters-container" style={{
                        display: 'flex',
                        gap: '2rem',
                        marginBottom: '3rem',
                        flexWrap: 'wrap',
                        backgroundColor: '#f8f9fa',
                        padding: '2rem',
                        borderRadius: '8px'
                    }}>
                        <div>
                            <label style={labelStyle}>Filter by Market</label>
                            <select
                                style={filterStyle}
                                value={filters.market}
                                onChange={(e) => handleFilterChange('market', e.target.value)}
                            >
                                {markets.map(m => <option key={m} value={m}>{m}</option>)}
                            </select>
                        </div>
                        <div>
                            <label style={labelStyle}>Filter by Location</label>
                            <select
                                style={filterStyle}
                                value={filters.location}
                                onChange={(e) => handleFilterChange('location', e.target.value)}
                            >
                                {locations.map(l => <option key={l} value={l}>{l}</option>)}
                            </select>
                        </div>
                        <div>
                            <label style={labelStyle}>Filter by Service</label>
                            <select
                                style={filterStyle}
                                value={filters.service}
                                onChange={(e) => handleFilterChange('service', e.target.value)}
                            >
                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <button
                                onClick={() => setFilters({ market: 'All', location: 'All', service: 'All' })}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid #0056b3', // Using a primary-ish color
                                    backgroundColor: 'transparent',
                                    color: '#0056b3',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    transition: 'all 0.2s',
                                    height: '42px' // Match select height roughly
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#0056b3';
                                    e.target.style.color = 'white';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#0056b3';
                                }}
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div style={{ marginBottom: '2rem', color: '#666' }}>
                        Showing {filteredProjects.length} projects
                    </div>

                    <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(([slug, project]) => (
                                <ProjectCard key={slug} slug={slug} project={project} />
                            ))
                        ) : (
                            <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                                <h3>No projects match your filters.</h3>
                                <p>Try adjusting your search criteria or resetting the filters.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
