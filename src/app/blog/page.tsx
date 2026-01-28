import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import styles from './page.module.css';

export const metadata = {
    title: 'Blog - Modeling Tips, Career Advice & Behind the Scenes',
    description: 'Read about modeling tips, career advice, photography insights, and behind-the-scenes stories from a professional model.',
};

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.header}>
                    <div className="container">
                        <h1 className={styles.title}>Blog</h1>
                        <p className={styles.subtitle}>
                            Modeling tips, career advice, and behind-the-scenes insights
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className={styles.grid}>
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className={styles.card}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className={styles.category}>{post.category}</div>
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.meta}>
                                        <span className={styles.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        {post.readTime && (
                                            <>
                                                <span className={styles.separator}>•</span>
                                                <span className={styles.readTime}>{post.readTime}</span>
                                            </>
                                        )}
                                    </div>

                                    <h2 className={styles.postTitle}>{post.title}</h2>
                                    <p className={styles.excerpt}>{post.excerpt}</p>

                                    <div className={styles.tags}>
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className={styles.tag}>#{tag}</span>
                                        ))}
                                    </div>

                                    <div className={styles.readMore}>
                                        Read More →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
