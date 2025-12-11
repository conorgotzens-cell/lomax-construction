import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.svg';
import { trackEvent } from '../utils/analytics';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: 'Company Overview', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Locations', path: '/locations' },
        { name: 'Insights', path: '/insights' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="header">
            <div className="header-top">
                <div className="container header-top-content">
                    <div className="contact-info">
                        <a
                            href="tel:3366900052"
                            style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                            onClick={() => trackEvent('click_call', 'Header', 'Phone Number')}
                        >
                            <Phone size={16} /> <span>(336) 690-0052</span>
                        </a>
                    </div>
                    <div className="social-links">
                        {/* Social icons would go here */}
                    </div>
                </div>
            </div>
            <div className="header-main">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Lomax Construction" className="logo-img" />
                    </Link>

                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMenu}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={location.pathname === link.path ? 'active' : ''}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/contact"
                            className="btn request-quote-btn"
                            onClick={() => {
                                closeMenu();
                                trackEvent('click_cta', 'Header', 'Request a Quote');
                            }}
                        >
                            Request a Quote
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
