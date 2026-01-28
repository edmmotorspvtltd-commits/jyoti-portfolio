import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* About Section */}
                    <div className={styles.section}>
                        <h3 className={styles.title}>About</h3>
                        <p className={styles.description}>
                            Professional model available for fashion, beauty, editorial, and commercial work.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.section}>
                        <h3 className={styles.title}>Quick Links</h3>
                        <div className={styles.links}>
                            <Link href="/" className={styles.link}>Home</Link>
                            <Link href="/portfolio" className={styles.link}>Portfolio</Link>
                            <Link href="/about" className={styles.link}>About</Link>
                            <Link href="/contact" className={styles.link}>Contact</Link>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className={styles.section}>
                        <h3 className={styles.title}>Follow Me</h3>
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

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} {siteConfig.modelName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
