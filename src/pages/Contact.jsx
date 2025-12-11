import React from 'react';
import { Phone, Mail, MapPin, Clock, Award } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import SEO from '../components/SEO';
import './PageStyles.css'; // Keep global styles if needed
import './Contact.css'; // Import the new specific styles

const Contact = () => {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "Lomax Construction",
        "url": "https://www.lomaxconstruction.com",
        "logo": "https://www.lomaxconstruction.com/logo.png",
        "image": "https://www.lomaxconstruction.com/contact-hero.jpg",
        "description": "Premier commercial general contractor serving North Carolina. Specializing in healthcare, education, and corporate construction.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "P.O. Box 903", // Using PO Box if physical unavailable, or Colfax general
            "addressLocality": "Colfax",
            "addressRegion": "NC",
            "postalCode": "27235",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "36.1082", // Colfax coordinates
            "longitude": "-79.9575"
        },
        "telephone": "+1-336-690-0052",
        "email": "info@lomaxconstruction.com",
        "areaServed": [
            { "@type": "City", "name": "Greensboro" },
            { "@type": "City", "name": "Winston-Salem" },
            { "@type": "City", "name": "High Point" },
            { "@type": "City", "name": "Charlotte" },
            { "@type": "City", "name": "Raleigh" },
            { "@type": "City", "name": "Durham" },
            { "@type": "City", "name": "Burlington" }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
        },
        "founder": {
            "@type": "Person",
            "name": "Eric Lomax"
        },
        "foundingDate": "1996",
        "priceRange": "$$"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I request a construction bid?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fill out our online form with your project details. We will review and provide a detailed estimate for your commercial project."
                }
            },
            {
                "@type": "Question",
                "name": "What is your service area?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We primarily serve the North Carolina Piedmont Triad (Greensboro, Winston-Salem, High Point), Charlotte Metro, Raleigh-Durham, and Upstate South Carolina."
                }
            },
            {
                "@type": "Question",
                "name": "Do you handle design-build projects?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer design-build services to streamline the construction process, providing a single point of responsibility for both design and construction."
                }
            }
        ]
    };

    // Merge schemas
    const pageSchema = [contactSchema, faqSchema];

    return (
        <div className="page-wrapper">
            <SEO
                title="Contact Us | Commercial General Contractor NC"
                description="Contact Lomax Construction for your next commercial project. Serving Greensboro, Charlotte, Raleigh, and all of North Carolina. Call (336) 690-0052."
                canonical="https://www.lomaxconstruction.com/contact"
                schema={pageSchema}
            />
            <section className="page-hero contact-hero">
                <div className="container">
                    <h1>Let’s Talk About Your Project</h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px' }}>
                        Ready to build? Our team is standing by to discuss your vision, budget, and timeline.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-layout">

                        {/* Left Column: Contact Info */}
                        <div className="contact-info-section">
                            <h2>Get in Touch</h2>
                            <p className="intro-text">
                                Planning a new build, renovation, or upfit in North Carolina?
                                Whether you have a complete set of plans or are just starting the feasibility process,
                                we're here to guide you.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method-item">
                                    <div className="icon-box"><Phone size={24} /></div>
                                    <div className="method-details">
                                        <strong>Phone</strong>
                                        <a href="tel:3366900052" onClick={() => trackEvent('click_call', 'Contact Page', 'Phone Main')}>
                                            (336) 690-0052
                                        </a>
                                        <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>Mon-Fri, 8am - 5pm</div>
                                    </div>
                                </div>

                                <div className="contact-method-item">
                                    <div className="icon-box"><Mail size={24} /></div>
                                    <div className="method-details">
                                        <strong>Email</strong>
                                        <a href="mailto:info@lomaxconstruction.com" onClick={() => trackEvent('click_email', 'Contact Page', 'Email Main')}>
                                            info@lomaxconstruction.com
                                        </a>
                                        <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>For bids and general inquiries</div>
                                    </div>
                                </div>

                                <div className="contact-method-item">
                                    <div className="icon-box"><MapPin size={24} /></div>
                                    <div className="method-details">
                                        <strong>Headquarters</strong>
                                        <div>Colfax, NC (Triad Region)</div>
                                        <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>Serving the Southeast</div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-areas">
                                <h3><MapPin size={16} style={{ display: 'inline', marginRight: '8px' }} />Primary Service Areas</h3>
                                <ul className="area-list">
                                    <li>Greensboro</li>
                                    <li>Winston-Salem</li>
                                    <li>High Point</li>
                                    <li>Charlotte Metro</li>
                                    <li>Raleigh-Durham</li>
                                    <li>Burlington</li>
                                    <li>Asheville (Western NC)</li>
                                    <li>Upstate SC</li>
                                </ul>
                            </div>

                            <div className="license-info">
                                <Award size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
                                <strong>NC General Contractor License #78452</strong>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <h3>Frequently Asked Questions</h3>
                                <details>
                                    <summary>How do I request a construction bid?</summary>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        The easiest way is to fill out the form on this page with your project location, type, and timeline.
                                        You can also email your invitation to bid (ITB) directly to <a href="mailto:info@lomaxconstruction.com">info@lomaxconstruction.com</a>.
                                    </p>
                                </details>
                                <details>
                                    <summary>What is your service area?</summary>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        Our commercial construction services cover the entire state of North Carolina, with a primary focus on the Piedmont Triad,
                                        Charlotte, and Raleigh-Durham markets. We also serve Upstate South Carolina and Southern Virginia.
                                    </p>
                                </details>
                                <details>
                                    <summary>Do you perform upfits and renovations?</summary>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        Yes! A significant portion of our work involves tenant upfits, interior renovations, and adaptive reuse projects.
                                        We are experts at working in occupied spaces with minimal disruption.
                                    </p>
                                </details>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="form-container">
                            <h3>Request a Bid / Consultation</h3>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                className="contact-form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    fetch("/", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                        body: new URLSearchParams(formData).toString(),
                                    })
                                        .then(() => {
                                            trackEvent('form_submit', 'Contact Page', 'Bid Request Form');
                                            alert('Thank you! Your request has been received. We might contact you for more details.');
                                            e.target.reset();
                                        })
                                        .catch((error) => alert('Submission failed. Please try again or call us directly.'));
                                }}
                            >
                                <input type="hidden" name="form-name" value="contact" />

                                <div className="form-group">
                                    <input id="name" name="name" type="text" placeholder="Your Name *" required />
                                </div>

                                <div className="form-group">
                                    <input id="email" name="email" type="email" placeholder="Email Address *" required />
                                </div>

                                <div className="form-group">
                                    <input id="phone" name="phone" type="tel" placeholder="Phone Number" />
                                </div>

                                <div className="form-group">
                                    <select id="projectType" name="projectType" style={{ color: '#666' }}>
                                        <option value="" disabled selected>Project Type...</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Education">Education</option>
                                        <option value="Corporate/Office">Corporate / Office</option>
                                        <option value="Industrial">Industrial / Manufacturing</option>
                                        <option value="Retail/Hospitality">Retail / Hospitality</option>
                                        <option value="Civic/Municipal">Civic / Municipal</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input id="location" name="location" type="text" placeholder="Project Location (City, State)" />
                                </div>

                                <div className="form-group">
                                    <textarea id="details" name="details" rows="5" placeholder="Tell us about your project (Scope, Budget, Timeline)..." required></textarea>
                                </div>

                                <button type="submit" className="submit-btn">Submit Request</button>
                            </form>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="map-section">
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=Colfax%2C%20NC&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lomax Construction Service Area Center"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
