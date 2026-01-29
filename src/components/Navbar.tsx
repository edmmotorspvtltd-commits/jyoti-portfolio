'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>Jyoti Soni</span>
                </Link>

                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/blog" className={styles.navLink}>Blog</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </button>
            </div>
        </nav>
    );
}
