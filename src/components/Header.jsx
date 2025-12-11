import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/logo.svg';
import { trackEvent } from '../utils/analytics';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState('');
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setOpenSubmenu(''); // Reset submenus when opening
    };



    const closeMenu = () => {
        setIsOpen(false);
        setOpenSubmenu('');
    };

    const toggleSubmenu = (name) => {
        setOpenSubmenu(openSubmenu === name ? '' : name);
    };

    const navLinks = [
        { name: 'Company', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            children: [
                { name: 'Preconstruction', path: '/services/preconstruction' },
                { name: 'Design-Build', path: '/services/design-build' },
                { name: 'Construction Management', path: '/services/construction-management' },
                { name: 'General Contracting', path: '/services/general-contracting' },
                { name: 'Renovations & Upfits', path: '/services/renovations-upfits' },
            ]
        },
        {
            name: 'Markets',
            path: '/markets',
            children: [
                { name: 'Healthcare', path: '/markets/healthcare' },
                { name: 'Education', path: '/markets/education' },
                { name: 'Civic & Municipal', path: '/markets/civic-municipal' },
                { name: 'Corporate Interiors', path: '/markets/corporate-interiors' },
                { name: 'Hospitality', path: '/markets/restaurant-hospitality' },
                { name: 'Industrial', path: '/markets/industrial-manufacturing' },
                { name: 'Renovations', path: '/services/renovations-upfits' },
            ]
        },
        { name: 'Projects', path: '/projects' },
        {
            name: 'Locations',
            path: '/locations',
            children: [
                { name: 'The Triad', path: '/locations/triad' },
                { name: 'Charlotte Metro', path: '/locations/charlotte' },
                { name: 'Raleigh-Durham', path: '/locations/raleigh-durham' },
                { name: 'Western NC', path: '/locations/western-nc' },
                { name: 'Eastern NC', path: '/locations/eastern-nc' },
            ]
        },
        { name: 'Insights', path: '/insights' },
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

                    {/* Mobile Menu Backdrop */}
                    <div
                        className={`mobile-backdrop ${isOpen ? 'open' : ''}`}
                        onClick={closeMenu}
                    />

                    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                        <div className="mobile-menu-header">
                            <Link to="/" className="mobile-logo" onClick={closeMenu}>
                                <img src={logo} alt="Lomax Construction" />
                            </Link>
                            <button
                                className="mobile-close-btn"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="mobile-menu-content">
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.name} className={`nav-item ${link.children ? 'has-dropdown' : ''} ${openSubmenu === link.name ? 'submenu-open' : ''}`}>
                                        {link.children ? (
                                            <div className="mobile-menu-item-group">
                                                <div className="link-container">
                                                    <Link
                                                        to={link.path}
                                                        className={`nav-link-item ${location.pathname.includes(link.path) ? 'active' : ''}`}
                                                        onClick={closeMenu}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                    <button
                                                        className="submenu-toggle"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            toggleSubmenu(link.name);
                                                        }}
                                                        aria-label={`Toggle ${link.name} submenu`}
                                                    >
                                                        {openSubmenu === link.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                    </button>
                                                </div>
                                                <ul className={`dropdown-menu ${openSubmenu === link.name ? 'open' : ''}`}>
                                                    {link.children.map((child) => (
                                                        <li key={child.name}>
                                                            <Link
                                                                to={child.path}
                                                                onClick={closeMenu}
                                                                className={location.pathname === child.path ? 'active' : ''}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                className={`nav-link-item ${location.pathname === link.path ? 'active' : ''}`}
                                                onClick={closeMenu}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className="mobile-cta-container">
                                <Link
                                    to="/contact"
                                    className="btn request-quote-btn mobile-cta"
                                    onClick={() => {
                                        closeMenu();
                                        trackEvent('click_cta', 'Header', 'Contact Button');
                                    }}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
