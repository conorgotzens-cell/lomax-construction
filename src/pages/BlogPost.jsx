
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { blogData } from '../data/blogData';
import DOMPurify from 'dompurify';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogData.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return <Navigate to="/insights" replace />;
    }

    // Sanitize HTML content
    const sanitizedContent = DOMPurify.sanitize(post.content);

    // Construct FAQ Schema if available
    const faqSchema = post.faq ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{post.title} | Lomax Construction Insights</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
                <meta name="author" content={post.author} />
                {faqSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(faqSchema)}
                    </script>
                )}
            </Helmet>

            {/* Post Header */}
            <div className="blog-post-header">
                <div className="container">
                    <Link to="/insights" className="back-link">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <div className="blog-header-content">
                        <span className="blog-category-badge">{post.category}</span>
                        <h1 className="blog-title">{post.title}</h1>
                        <div className="blog-meta-large">
                            <span className="meta-item">
                                <Calendar size={18} /> {post.date}
                            </span>
                            <span className="meta-item">
                                <User size={18} /> {post.author}
                            </span>
                            <span className="meta-item">
                                <Clock size={18} /> {post.readTime}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="blog-header-overlay"></div>
                <div
                    className="blog-header-bg"
                    style={{ backgroundImage: `url(${post.image})` }}
                ></div>
            </div>

            <div className="container blog-container">
                <div className="blog-layout">
                    {/* Main Content */}
                    <article className="blog-content-wrapper">
                        <div className="blog-lead">
                            {post.excerpt}
                        </div>
                        <div
                            className="blog-body"
                            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                        />

                        {/* FAQ Section */}
                        {post.faq && (
                            <div className="blog-faq-section">
                                <h2>Frequently Asked Questions</h2>
                                <div className="faq-list">
                                    {post.faq.map((item, index) => (
                                        <div key={index} className="faq-item">
                                            <h3 className="faq-question">{item.question}</h3>
                                            <p className="faq-answer">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                    </article>

                    {/* Sidebar */}
                    <aside className="blog-sidebar">
                        <div className="sidebar-widget cta-widget">
                            <h3>Start Your Project</h3>
                            <p>Ready to bring this insight to your next build? Let's discuss your vision.</p>
                            <Link to="/contact" className="btn btn-primary full-width">
                                Contact Us
                            </Link>
                        </div>

                        <div className="sidebar-widget">
                            <h3>More Topics</h3>
                            <ul className="category-list">
                                <li><Link to="/insights">Cost & Budgeting</Link></li>
                                <li><Link to="/insights">Market Intelligence</Link></li>
                                <li><Link to="/insights">Education</Link></li>
                                <li><Link to="/insights">Specialized Construction</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
