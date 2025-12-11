
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ post }) => {
    return (
        <article className="blog-card">
            <Link to={`/insights/${post.slug}`} className="blog-card-image-link">
                <div className="blog-card-image-wrapper">
                    <img src={post.image} alt={post.title} className="blog-card-image" />
                    <div className="blog-card-category">{post.category}</div>
                </div>
            </Link>
            <div className="blog-card-content">
                <div className="blog-card-meta">
                    <span className="blog-card-date">
                        <Calendar size={14} /> {post.date}
                    </span>
                    <span className="blog-card-read-time">{post.readTime}</span>
                </div>

                <h3 className="blog-card-title">
                    <Link to={`/insights/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="blog-card-excerpt">{post.excerpt}</p>

                <div className="blog-card-footer">
                    <span className="blog-card-author">
                        <User size={14} /> {post.author}
                    </span>
                    <Link to={`/insights/${post.slug}`} className="blog-card-read-more">
                        Read More <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
