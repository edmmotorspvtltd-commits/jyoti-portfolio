'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>What Clients Say</h2>
                    <p className={styles.subtitle}>
                        Trusted by photographers, brands, and creative professionals
                    </p>
                </div>

                <div className={styles.carousel}>
                    <button
                        onClick={goToPrev}
                        className={styles.navButton}
                        aria-label="Previous testimonial"
                    >
                        ‹
                    </button>

                    <div className={styles.testimonialCard}>
                        <div className={styles.stars}>
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                                <span key={i} className={styles.star}>★</span>
                            ))}
                        </div>

                        <blockquote className={styles.quote}>
                            "{currentTestimonial.quote}"
                        </blockquote>

                        <div className={styles.author}>
                            <div className={styles.authorInfo}>
                                <h4 className={styles.authorName}>{currentTestimonial.name}</h4>
                                <p className={styles.authorRole}>
                                    {currentTestimonial.role}
                                    {currentTestimonial.company && (
                                        <span className={styles.company}> • {currentTestimonial.company}</span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={goToNext}
                        className={styles.navButton}
                        aria-label="Next testimonial"
                    >
                        ›
                    </button>
                </div>

                {/* Dots indicator */}
                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
