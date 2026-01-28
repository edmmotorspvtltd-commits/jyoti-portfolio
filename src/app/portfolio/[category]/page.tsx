'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioItems } from '@/data/portfolio';
import { categories } from '@/data/categories';
import styles from './category.module.css';

export default function CategoryPage() {
    const params = useParams();
    const categoryId = params.category as string;

    const category = categories.find(cat => cat.id === categoryId);
    const filteredItems = portfolioItems.filter(item => item.category === categoryId);

    if (!category) {
        return (
            <>
                <Navbar />
                <main className={styles.main}>
                    <div className="container">
                        <h1>Category not found</h1>
                        <Link href="/portfolio" className="btn btn-primary">
                            Back to Portfolio
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.header}>
                    <div className="container">
                        <div className={styles.breadcrumb}>
                            <Link href="/">Home</Link> / <Link href="/portfolio">Portfolio</Link> / {category.name}
                        </div>
                        <h1 className={styles.title}>
                            <span className={styles.icon}>{category.icon}</span>
                            {category.name}
                        </h1>
                        <p className={styles.subtitle}>{category.description}</p>
                        <p className={styles.count}>{filteredItems.length} photos</p>
                    </div>
                </div>

                <div className="container">
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
                            <p>No photos in this category yet.</p>
                            <Link href="/portfolio" className="btn btn-primary">
                                View All Portfolio
                            </Link>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
