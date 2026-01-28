'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/config';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        <span className={styles.name}>{siteConfig.modelName}</span>
                    </h1>
                    <p className={styles.tagline}>{siteConfig.tagline}</p>
                    <p className={styles.bio}>{siteConfig.bio}</p>

                    <div className={styles.cta}>
                        <Link href="/portfolio" className="btn btn-primary">
                            View Portfolio
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <p>Scroll to explore</p>
            </div>
        </section>
    );
}
