import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="page-wrapper">
            <SEO
                title="Page Not Found | Lomax Construction"
                description="The page you are looking for does not exist."
            />
            <section className="section text-center" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>404</h1>
                    <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link to="/" className="btn">Return to Home</Link>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
