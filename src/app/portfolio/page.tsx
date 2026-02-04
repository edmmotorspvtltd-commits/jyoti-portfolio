'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioItems } from '@/data/portfolio';
import { categories } from '@/data/categories';
import styles from './page.module.css';

function PortfolioContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');

    useEffect(() => {
        document.title = 'Portfolio | Jyoti Soni Model';

        // Update selected category if URL parameter changes
        if (categoryParam && categoryParam !== selectedCategory) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    const filteredItems = selectedCategory === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Portfolio</h1>
                    <p className={styles.subtitle}>
                        Explore my work across various categories
                    </p>
                </div>
            </div>

            <div className="container">
                {/* Category Filter */}
                <div className={styles.filterSection}>
                    <div className={styles.filters}>
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={category.id === 'all' ? '/portfolio' : `/portfolio?category=${category.id}`}
                                className={`${styles.filterBtn} ${selectedCategory === category.id ? styles.active : ''
                                    }`}
                            >
                                <span className={styles.filterIcon}>{category.icon}</span>
                                <span>{category.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className={styles.gallery}>
                    {filteredItems.map((item) => (
                        <div key={item.id} className={styles.galleryItem}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                    priority={false}
                                />
                                <div className={styles.overlay}>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                    <p className={styles.itemCategory}>{item.category}</p>
                                    {item.description && (
                                        <p className={styles.itemDescription}>{item.description}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className={styles.empty}>
                        <p>No items found in this category.</p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function PortfolioPage() {
    return (
        <>
            <Navbar />
            <Suspense fallback={
                <main className={styles.main}>
                    <div className={styles.header}>
                        <div className="container">
                            <h1 className={styles.title}>Portfolio</h1>
                            <p className={styles.subtitle}>Loading...</p>
                        </div>
                    </div>
                </main>
            }>
                <PortfolioContent />
            </Suspense>
            <Footer />
        </>
    );
}
