import Image from 'next/image';
import styles from './FeaturedIn.module.css';

const features = [
    {
        id: 1,
        publication: 'First India City First',
        category: 'Glamour | Fashion | Lifestyle',
        headline: 'Stories of Ascent',
        description: 'City First spotlights the journey of Jyoti Soni — an inspiring woman redefining success in fashion and pageantry.',
        date: 'February 5, 2026',
        url: 'https://firstindia.co.in/epapers/city-first-jaipur/05022026?page=1',
        color: '#c0392b',
        image: '/press/stories-of-ascent.webp',
    },
    {
        id: 2,
        publication: 'First India City First',
        category: 'Glamour | Fashion | Bollywood | Lifestyle',
        headline: 'Power & Prestige',
        description: 'Jaipur applauds innovation at NextGen Icon Awards 2026 — featuring Celebrity Guest Suniel Shetty, celebrating corporate excellence and fashion.',
        date: 'February 1, 2026',
        url: 'https://firstindia.co.in/epapers/city-first-jaipur/01022026',
        color: '#1a1a2e',
        image: '/press/power-and-prestige.webp',
    },
];

export default function FeaturedIn() {
    return (
        <section className={styles.featuredIn}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Featured In</h2>
                    <p className={styles.subtitle}>
                        Recognized by leading publications &amp; media
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature) => (
                        <a
                            key={feature.id}
                            href={feature.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                            title={feature.headline}
                        >
                            {/* Newspaper Thumbnail */}
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={feature.image}
                                    alt={`${feature.publication} - ${feature.headline}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                />
                                {/* Publication badge */}
                                <div
                                    className={styles.badge}
                                    style={{ backgroundColor: feature.color }}
                                >
                                    {feature.publication}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className={styles.cardBody}>
                                <span className={styles.category}>{feature.category}</span>
                                <h3 className={styles.headline}>{feature.headline}</h3>
                                <p className={styles.description}>{feature.description}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.date}>{feature.date}</span>
                                    <span className={styles.readLink}>Read Article →</span>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className={styles.hoverOverlay}>
                                <span className={styles.readMore}>Read Full Article →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
