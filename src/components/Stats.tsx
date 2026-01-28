'use client';

import styles from './Stats.module.css';

export default function Stats() {
    const stats = [
        { value: '50+', label: 'Photoshoots' },
        { value: '30+', label: 'Brands' },
        { value: '15+', label: 'Events' },
        { value: '5+', label: 'Years' }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <div className={styles.value}>{stat.value}</div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
