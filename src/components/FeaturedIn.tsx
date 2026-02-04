import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedIn.module.css';

const features = [
    {
        id: 1,
        name: 'Vogue India',
        logo: '/api/images/press/vogue-logo.png', // You'll add these logos
        blogSlug: 'featured-in-vogue-india',
        description: 'Featured in Vogue India Fashion Editorial'
    },
    {
        id: 2,
        name: 'Lakme Fashion Week',
        logo: '/api/images/press/lakme-logo.png',
        blogSlug: 'lakme-fashion-week-2024',
        description: 'Walked the runway at Lakme Fashion Week'
    },
    {
        id: 3,
        name: 'Elle India',
        logo: '/api/images/press/elle-logo.png',
        blogSlug: 'elle-india-bridal-feature',
        description: 'Bridal feature in Elle India'
    },
    {
        id: 4,
        name: 'Cosmopolitan',
        logo: '/api/images/press/cosmo-logo.png',
        blogSlug: 'cosmopolitan-beauty-feature',
        description: 'Beauty editorial in Cosmopolitan'
    },
    {
        id: 5,
        name: 'Grazia India',
        logo: '/api/images/press/grazia-logo.png',
        blogSlug: 'grazia-fashion-spread',
        description: 'Fashion spread in Grazia India'
    },
    {
        id: 6,
        name: 'Harper\'s Bazaar',
        logo: '/api/images/press/harpers-logo.png',
        blogSlug: 'harpers-bazaar-cover',
        description: 'Cover feature in Harper\'s Bazaar'
    }
];

export default function FeaturedIn() {
    return (
        <section className={styles.featuredIn}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Featured In</h2>
                    <p className={styles.subtitle}>
                        Recognized by leading fashion publications and brands
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature) => (
                        <Link
                            key={feature.id}
                            href={`/blog/${feature.blogSlug}`}
                            className={styles.logoCard}
                            title={feature.description}
                        >
                            <div className={styles.logoWrapper}>
                                {/* Placeholder - you'll replace with actual logos */}
                                <div className={styles.logoPlaceholder}>
                                    <span className={styles.logoText}>{feature.name}</span>
                                </div>
                                {/* Uncomment when you have logos:
                                <Image
                                    src={feature.logo}
                                    alt={feature.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 200px"
                                    style={{ objectFit: 'contain' }}
                                />
                                */}
                            </div>
                            <div className={styles.hoverOverlay}>
                                <span className={styles.readMore}>Read Story →</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/blog" className="btn btn-secondary">
                        View All Press Coverage
                    </Link>
                </div>
            </div>
        </section>
    );
}
