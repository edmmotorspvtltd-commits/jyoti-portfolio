'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroCarousel.module.css';

const heroImages = [
    '/api/images/hero/hero-1.jpg',
    '/api/images/hero/hero-2.jpg',
    '/api/images/hero/hero-3.jpg',
    '/api/images/hero/hero-4.jpg'
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Background Carousel */}
            <div className={styles.carouselContainer}>
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    >
                        {/* Blurred background */}
                        <div className={styles.blurredBackground}>
                            <Image
                                src={image}
                                alt=""
                                fill
                                sizes="100vw"
                                style={{ objectFit: 'cover', filter: 'blur(40px)', transform: 'scale(1.1)' }}
                            />
                        </div>
                        {/* Main image */}
                        <div className={styles.mainImage}>
                            <Image
                                src={image}
                                alt={`Jyoti Soni - Slide ${index + 1}`}
                                fill
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 70vw"
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                            />
                        </div>
                    </div>
                ))}
                <div className={styles.overlay}></div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className="container">
                    <h1 className={styles.title}>Jyoti soni</h1>
                    <p className={styles.subtitle}>PROFESSIONAL MODEL & FASHION INFLUENCER</p>
                    <p className={styles.description}>
                        Celebrating the beauty of Indian fashion—where I truly shine.
                        Specializing in traditional wear, bridal lehengas, ethnic sarees, and
                        cultural styling. Also versatile in contemporary Western fashion and
                        lifestyle shoots. Available for editorial, commercial, and runway work
                        across India.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/portfolio" className="btn btn-primary">
                            View Portfolio
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className={styles.indicators}>
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Scroll to explore</span>
                <div className={styles.scrollIcon}>↓</div>
            </div>
        </section>
    );
}
