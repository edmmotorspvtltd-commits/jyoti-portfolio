'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { siteConfig } from '@/data/config';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        messageType: 'general',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        document.title = 'Contact | Jyoti Soni Model';
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    messageType: 'general',
                    message: ''
                });
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
        }
    };

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.header}>
                    <div className="container">
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.subtitle}>
                            Let's collaborate on your next project
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className={styles.content}>
                        {/* Contact Info */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Contact Information</h2>

                            <div className={styles.infoCard}>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📧</span>
                                    <div>
                                        <h3 className={styles.infoLabel}>Email</h3>
                                        <p className={styles.infoValue}>{siteConfig.email}</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📱</span>
                                    <div>
                                        <h3 className={styles.infoLabel}>Phone</h3>
                                        <p className={styles.infoValue}>{siteConfig.phone}</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📍</span>
                                    <div>
                                        <h3 className={styles.infoLabel}>Location</h3>
                                        <p className={styles.infoValue}>{siteConfig.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.socialSection}>
                                <h3 className={styles.socialTitle}>Follow Me</h3>
                                <div className={styles.socialLinks}>
                                    {siteConfig.social.instagram && (
                                        <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                            <FaInstagram /> Instagram
                                        </a>
                                    )}
                                    <span className={styles.socialLink} style={{ opacity: 0.5, cursor: 'default' }}>
                                        <FaTwitter /> Twitter - Coming Soon
                                    </span>
                                    <span className={styles.socialLink} style={{ opacity: 0.5, cursor: 'default' }}>
                                        <FaFacebook /> Facebook - Coming Soon
                                    </span>
                                    <span className={styles.socialLink} style={{ opacity: 0.5, cursor: 'default' }}>
                                        <FaLinkedin /> LinkedIn - Coming Soon
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>Send a Message</h2>

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="messageType">Inquiry Type *</label>
                                    <select
                                        id="messageType"
                                        name="messageType"
                                        value={formData.messageType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="booking">Booking Request</option>
                                        <option value="collaboration">Collaboration</option>
                                        <option value="press">Press & Media</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <div className={styles.successMessage}>
                                        ✅ Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className={styles.errorMessage}>
                                        ❌ {errorMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
