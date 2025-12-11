import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Lomax Construction</h3>
                    <p>Building Trust, Delivering Excellence. Premier commercial construction services in North Carolina.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <div className="contact-item"><MapPin size={16} /> Colfax, NC (Triad Region)</div>
                    <a
                        href="tel:3366900052"
                        className="contact-item"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}
                        onClick={() => trackEvent('click_call', 'Footer', 'Phone Number')}
                    >
                        <Phone size={16} /> (336) 690-0052
                    </a>
                    <a
                        href="mailto:info@lomaxconstruction.com"
                        className="contact-item"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}
                        onClick={() => trackEvent('click_email', 'Footer', 'Email Address')}
                    >
                        <Mail size={16} /> info@lomaxconstruction.com
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Lomax Construction. All Rights Reserved.</p>
                    <p className="license-text">NC General Contractor License #78452</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
