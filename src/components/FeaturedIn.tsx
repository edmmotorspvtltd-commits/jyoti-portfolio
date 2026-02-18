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
    {
        id: 3,
        publication: 'GNT News',
        category: 'Entertainment | Pageantry',
        headline: 'Elite Miss Rajasthan 2025 Grand Finale',
        description: 'Jyoti Soni shines as 5th Runner-up at the Elite Miss Rajasthan 2025 Season 12 Grand Finale — a spectacular celebration of beauty, talent and grace.',
        date: 'December 23, 2025',
        url: 'https://www.gnttv.com/entertainment/photo/elite-miss-rajasthan-2025-grand-finale-deboshmita-won-the-title-sks-1321247-2025-12-23-3',
        color: '#e63946',
        image: '/press/elite-miss-rajasthan.jpg',
    },
    {
        id: 4,
        publication: 'Dainik Bhaskar',
        category: 'Entertainment | Pageantry',
        headline: 'Elite Miss Rajasthan 2025 Grand Finale',
        description: 'Jaipur hosts the grand finale of Elite Miss Rajasthan 2025 Season 12 — Jyoti Soni earns 5th Runner-up title in a spectacular evening of fashion, talent and glamour.',
        date: 'December 22, 2025',
        url: 'https://www.bhaskar.com/local/rajasthan/jaipur/news/the-grand-finale-of-elite-miss-rajasthan-2025-concluded-in-jaipur-136742239.html',
        color: '#d62828',
        image: '/press/dainik-bhaskar-elite.jpg',
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
