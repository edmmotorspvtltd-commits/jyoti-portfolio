import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import Stats from '@/components/Stats';
import FeaturedIn from '@/components/FeaturedIn';
import Testimonials from '@/components/Testimonials';
import VideoShowcase from '@/components/VideoShowcase';
import InstagramFeed from '@/components/InstagramFeed';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedItems } from '@/data/portfolio';
import styles from './page.module.css';

export default function Home() {
  const featuredItems = getFeaturedItems();

  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />

        {/* Stats Section */}
        <Stats />

        {/* Featured In Section - Press & Publications */}
        <FeaturedIn />

        {/* Full-Width Showcase Images */}
        <section className={styles.showcaseSection}>
          <div className={styles.showcaseImage}>
            <Image
              src="/images/fashion/RAJ02594.JPG"
              alt="Fashion showcase"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className={styles.showcaseOverlay}>
              <h2 className={styles.showcaseTitle}>Fashion & Editorial</h2>
              <p className={styles.showcaseText}>Bringing elegance to every frame</p>
            </div>
          </div>

          <div className={styles.showcaseImage}>
            <Image
              src="/images/lifestyle/DSC08214.jpg"
              alt="Lifestyle showcase"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.showcaseOverlay}>
              <h2 className={styles.showcaseTitle}>Lifestyle & Beauty</h2>
              <p className={styles.showcaseText}>Authentic moments, timeless style</p>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className={styles.featured}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured Portfolio</h2>
              <p className={styles.sectionSubtitle}>
                A collection of my best work across various styles and projects
              </p>
            </div>

            <div className={styles.grid}>
              {featuredItems.slice(0, 6).map((item) => (
                <Link
                  href="/portfolio"
                  key={item.id}
                  className={styles.card}
                >
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
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardCategory}>{item.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.ctaSection}>
              <Link href="/portfolio" className="btn btn-primary">
                View Full Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <VideoShowcase />

        {/* Testimonials Section - What People Say */}
        <Testimonials />

        {/* CTA Banner - Ready to Create Magic */}
        <CTABanner />

        {/* Instagram Feed Section */}
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
