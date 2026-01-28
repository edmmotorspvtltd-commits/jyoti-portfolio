'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Ready to Create Magic?</h2>
                    <p className={styles.subtitle}>
                        Let's collaborate on your next fashion project, campaign, or event. I bring professionalism, creativity, and elegance to every shoot.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/contact" className={styles.primaryButton}>
                            <Calendar className={styles.icon} />
                            Book Now
                        </Link>
                        <Link href="/portfolio" className={styles.secondaryButton}>
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
