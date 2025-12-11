
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import { blogData } from '../data/blogData';
import './Insights.css';

const Insights = () => {
    // Sort posts by date (newest first) if they aren't already
    // For now, we assume the data array is manually ordered or we can add a simple sort
    const sortedPosts = [...blogData]; // Add sort logic here if needed later

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Insights & News | Commercial Construction Blog NC | Lomax Construction</title>
                <meta name="description" content="Stay updated with the latest commercial construction trends, cost data, and industry insights from Lomax Construction's expert team." />
            </Helmet>

            <section className="page-hero insights-hero">
                <div className="container">
                    <h1>Industry Insights</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block center-text" style={{ marginBottom: '4rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <h2>Building Knowledge</h2>
                        <div className="gold-line centered"></div>
                        <p>
                            Navigating the complexities of commercial construction requires more than just blueprints.
                            Explore our latest articles on market trends, cost intelligence, and project delivery methods
                            designed to help you make informed decisions for your next build.
                        </p>
                    </div>

                    <div className="insights-grid">
                        {sortedPosts.map(post => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Insights;
