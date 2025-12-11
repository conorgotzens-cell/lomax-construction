import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './PageStyles.css';

const Contact = () => {
    return (
        <div className="page-wrapper">
            <section className="page-hero contact-hero">
                <div className="container">
                    <h1>Let’s Talk About Your Project</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>
                                Planning a new build or renovation in North Carolina? Whether you’re ready to request a bid or
                                simply want to discuss project feasibility, our team is here to help.
                            </p>

                            <div className="contact-details" style={{ marginTop: '2rem' }}>
                                <div className="contact-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%', color: '#fff' }}><Phone size={20} /></div>
                                    <div>
                                        <strong>Phone</strong>
                                        <div>(336) 690-0052</div>
                                    </div>
                                </div>
                                <div className="contact-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%', color: '#fff' }}><Mail size={20} /></div>
                                    <div>
                                        <strong>Email</strong>
                                        <div>info@lomaxconstruction.com</div>
                                    </div>
                                </div>
                                <div className="contact-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%', color: '#fff' }}><MapPin size={20} /></div>
                                    <div>
                                        <strong>Headquarters</strong>
                                        <div>Colfax, NC (Triad Region)</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <h3>FAQ</h3>
                                <details style={{ marginBottom: '1rem' }}>
                                    <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How do I request a construction bid?</summary>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Fill out our online form with your project details. We will review and provide a detailed estimate.</p>
                                </details>
                                <details style={{ marginBottom: '1rem' }}>
                                    <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What is your service area?</summary>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>We primarily serve North Carolina (Triad, Charlotte, Raleigh-Durham) and Upstate South Carolina.</p>
                                </details>
                            </div>

                        </div>

                        <div className="contact-form-wrapper" style={{ background: 'var(--color-background-alt)', padding: '2rem', borderRadius: '8px' }}>
                            <h3>Request a Bid / Consultation</h3>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    fetch("/", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                        body: new URLSearchParams(formData).toString(),
                                    })
                                        .then(() => alert('Thank you! Your request has been received. We will be in touch shortly.'))
                                        .catch((error) => alert('Submission failed. Please try again or call us correctly.'));
                                }}
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <input id="name" name="name" type="text" placeholder="Your Name" required style={{ padding: '12px', borderColor: '#ddd', borderWidth: '1px', borderStyle: 'solid' }} />
                                <input id="email" name="email" type="email" placeholder="Your Email" required style={{ padding: '12px', borderColor: '#ddd', borderWidth: '1px', borderStyle: 'solid' }} />
                                <input id="projectType" name="projectType" type="text" placeholder="Project Type (Healthcare, Education, etc?)" style={{ padding: '12px', borderColor: '#ddd', borderWidth: '1px', borderStyle: 'solid' }} />
                                <input id="location" name="location" type="text" placeholder="Project Location (City + State)" style={{ padding: '12px', borderColor: '#ddd', borderWidth: '1px', borderStyle: 'solid' }} />
                                <textarea id="details" name="details" rows="5" placeholder="Project Details (Scope, Budget, Timeline)" required style={{ padding: '12px', borderColor: '#ddd', borderWidth: '1px', borderStyle: 'solid' }}></textarea>
                                <button type="submit" className="btn">Submit Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
