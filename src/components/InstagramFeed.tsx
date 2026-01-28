import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { siteConfig } from '@/data/config';
import styles from './InstagramFeed.module.css';

// Sample Instagram posts - replace with actual Instagram API data later
const instagramPosts = [
    { id: '1', image: '/images/fashion/DSC00070.JPG', likes: 1234 },
    { id: '2', image: '/images/fashion/RAJ02594.JPG', likes: 2156 },
    { id: '3', image: '/images/lifestyle/DSC08214.jpg', likes: 987 },
    { id: '4', image: '/images/beauty/RAJ01718.JPG', likes: 1543 },
    { id: '5', image: '/images/fashion/DSC00313.JPG', likes: 1876 },
    { id: '6', image: '/images/lifestyle/DSC08218.jpg', likes: 1298 },
];

export default function InstagramFeed() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <FaInstagram className={styles.instagramIcon} />
                        <h2 className={styles.title}>Follow on Instagram</h2>
                    </div>
                    <p className={styles.subtitle}>
                        Stay updated with my latest photoshoots and behind-the-scenes moments
                    </p>
                </div>

                <div className={styles.grid}>
                    {instagramPosts.map((post) => (
                        <a
                            key={post.id}
                            href={siteConfig.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.post}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={post.image}
                                    alt="Instagram post"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.stats}>
                                        <span className={styles.likes}>❤️ {post.likes.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        <FaInstagram /> View on Instagram
                    </Link>
                </div>
            </div>
        </section>
    );
}
