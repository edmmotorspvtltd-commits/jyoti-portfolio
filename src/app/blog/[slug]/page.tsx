import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, blogPosts } from '@/data/blog';
import { FaWhatsapp, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './post.module.css';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} - Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <article className={styles.article}>
                    <div className="container">
                        <div className={styles.breadcrumb}>
                            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / {post.title}
                        </div>

                        <header className={styles.header}>
                            <div className={styles.category}>{post.category}</div>
                            <h1 className={styles.title}>{post.title}</h1>

                            <div className={styles.meta}>
                                <span className={styles.author}>By {post.author}</span>
                                <span className={styles.separator}>•</span>
                                <span className={styles.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                                {post.readTime && (
                                    <>
                                        <span className={styles.separator}>•</span>
                                        <span className={styles.readTime}>{post.readTime}</span>
                                    </>
                                )}
                            </div>
                        </header>

                        <div className={styles.featuredImage}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>


                        <div className={styles.content}>
                            {post.content.split('\n').map((line, index) => {
                                // Handle headings
                                if (line.startsWith('# ')) {
                                    return <h1 key={index}>{line.substring(2)}</h1>;
                                }
                                if (line.startsWith('## ')) {
                                    return <h2 key={index}>{line.substring(3)}</h2>;
                                }
                                if (line.startsWith('### ')) {
                                    return <h3 key={index}>{line.substring(4)}</h3>;
                                }

                                // Handle bullet points
                                if (line.startsWith('- ')) {
                                    return <li key={index}>{line.substring(2)}</li>;
                                }

                                // Handle numbered lists
                                if (/^\d+\.\s/.test(line)) {
                                    return <li key={index}>{line.replace(/^\d+\.\s/, '')}</li>;
                                }

                                // Handle bold text
                                if (line.includes('**')) {
                                    const parts = line.split('**');
                                    return (
                                        <p key={index}>
                                            {parts.map((part, i) =>
                                                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                                            )}
                                        </p>
                                    );
                                }

                                // Handle empty lines
                                if (line.trim() === '') {
                                    return <br key={index} />;
                                }

                                // Regular paragraphs
                                return <p key={index}>{line}</p>;
                            })}
                        </div>

                        <div className={styles.tags}>
                            {post.tags.map((tag) => (
                                <span key={tag} className={styles.tag}>#{tag}</span>
                            ))}
                        </div>

                        {/* Social Sharing Section */}
                        <div className={styles.shareSection}>
                            <h3 className={styles.shareTitle}>Share this post</h3>
                            <div className={styles.shareButtons}>
                                <a
                                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + `https://yourwebsite.com/blog/${slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.shareButton} ${styles.whatsapp}`}
                                    aria-label="Share on WhatsApp"
                                >
                                    <FaWhatsapp /> WhatsApp
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourwebsite.com/blog/${slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.shareButton} ${styles.twitter}`}
                                    aria-label="Share on Twitter"
                                >
                                    <FaTwitter /> Twitter
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourwebsite.com/blog/${slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.shareButton} ${styles.facebook}`}
                                    aria-label="Share on Facebook"
                                >
                                    <FaFacebook /> Facebook
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourwebsite.com/blog/${slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.shareButton} ${styles.linkedin}`}
                                    aria-label="Share on LinkedIn"
                                >
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <Link href="/blog" className={styles.backButton}>
                                ← Back to Blog
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
