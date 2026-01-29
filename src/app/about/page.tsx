import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/config';
import styles from './page.module.css';

export const metadata = {
    title: 'About | Jyoti Soni Model',
    description: 'Learn more about Jyoti Soni - Professional model specializing in Indian fashion, bridal wear, and ethnic styling.',
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.header}>
                    <div className="container">
                        <h1 className={styles.title}>About Me</h1>
                        <p className={styles.subtitle}>
                            Professional model & creative collaborator
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className={styles.content}>
                        {/* Bio Section */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Biography</h2>
                            <div className={styles.bioContent}>
                                <p className={styles.bioText}>
                                    {siteConfig.bio}
                                </p>
                                <p className={styles.bioText}>
                                    With years of experience in the fashion and modeling industry, I bring professionalism,
                                    versatility, and creativity to every project. I specialize in high fashion, editorial,
                                    commercial, and lifestyle photography.
                                </p>
                                <p className={styles.bioText}>
                                    I'm passionate about collaborating with talented photographers, designers, and brands
                                    to create compelling visual stories that resonate with audiences.
                                </p>
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Model Stats</h2>
                            <div className={styles.statsGrid}>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Height</span>
                                    <span className={styles.statValue}>{siteConfig.stats.height}</span>
                                </div>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Bust</span>
                                    <span className={styles.statValue}>{siteConfig.stats.bust}</span>
                                </div>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Waist</span>
                                    <span className={styles.statValue}>{siteConfig.stats.waist}</span>
                                </div>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Hips</span>
                                    <span className={styles.statValue}>{siteConfig.stats.hips}</span>
                                </div>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Shoe Size</span>
                                    <span className={styles.statValue}>{siteConfig.stats.shoeSize}</span>
                                </div>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Hair</span>
                                    <span className={styles.statValue}>{siteConfig.stats.hairColor}</span>
                                </div>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Eyes</span>
                                    <span className={styles.statValue}>{siteConfig.stats.eyeColor}</span>
                                </div>
                            </div>
                        </section>

                        {/* Agency Section */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Representation</h2>
                            <div className={styles.agencyCard}>
                                <h3 className={styles.agencyName}>{siteConfig.agency.name}</h3>
                                <p className={styles.agencyContact}>
                                    <strong>Contact:</strong> {siteConfig.agency.contact}
                                </p>
                                <a
                                    href={siteConfig.agency.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    Visit Agency Website
                                </a>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className={styles.ctaSection}>
                            <h2 className={styles.ctaTitle}>Let's Work Together</h2>
                            <p className={styles.ctaText}>
                                Available for bookings, collaborations, and creative projects
                            </p>
                            <a href="/contact" className="btn btn-primary">
                                Get in Touch
                            </a>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
