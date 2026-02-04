import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { siteConfig } from '@/data/config';
import styles from './InstagramFeed.module.css';

// Sample Instagram posts - replace with actual Instagram API data later
const instagramPosts = [
    { id: '1', image: '/api/images/fashion/DSC00070.JPG', likes: 1234 },
    { id: '2', image: '/api/images/fashion/RAJ02594.JPG', likes: 2156 },
    { id: '3', image: '/api/images/lifestyle/DSC08214.jpg', likes: 987 },
    { id: '4', image: '/api/images/beauty/RAJ01718.JPG', likes: 1543 },
    { id: '5', image: '/api/images/fashion/DSC00313.JPG', likes: 1876 },
    { id: '6', image: '/api/images/lifestyle/DSC08218.jpg', likes: 1298 },
];

const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: siteConfig.social.instagram, color: '#E4405F' },
    { name: 'Facebook', icon: FaFacebook, url: siteConfig.social.facebook, color: '#1877F2' },
    { name: 'Twitter', icon: FaTwitter, url: siteConfig.social.twitter, color: '#1DA1F2' },
    { name: 'LinkedIn', icon: FaLinkedin, url: siteConfig.social.linkedin, color: '#0A66C2' },
    { name: 'YouTube', icon: FaYoutube, url: siteConfig.social.youtube, color: '#FF0000' },
];

export default function InstagramFeed() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Follow Me On</h2>
                    <p className={styles.subtitle}>
                        Stay connected and updated with my latest work across all platforms
                    </p>
                    <div className={styles.socialLinks}>
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                    style={{ '--social-color': social.color } as React.CSSProperties}
                                    title={social.name}
                                >
                                    <Icon />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
