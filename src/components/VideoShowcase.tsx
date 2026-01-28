'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getFeaturedVideos } from '@/data/videos';
import { FaPlay, FaTimes } from 'react-icons/fa';
import styles from './VideoShowcase.module.css';

export default function VideoShowcase() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const videos = getFeaturedVideos();

    const openVideo = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Video Portfolio</h2>
                    <p className={styles.subtitle}>
                        Watch my latest modeling work and behind-the-scenes moments
                    </p>
                </div>

                <div className={styles.grid}>
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className={styles.videoCard}
                            onClick={() => openVideo(video.videoUrl)}
                        >
                            <div className={styles.thumbnail}>
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.playOverlay}>
                                    <div className={styles.playButton}>
                                        <FaPlay />
                                    </div>
                                </div>
                                {video.duration && (
                                    <span className={styles.duration}>{video.duration}</span>
                                )}
                            </div>
                            <div className={styles.videoInfo}>
                                <h3 className={styles.videoTitle}>{video.title}</h3>
                                {video.description && (
                                    <p className={styles.videoDescription}>{video.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Modal */}
                {selectedVideo && (
                    <div className={styles.modal} onClick={closeVideo}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.closeButton} onClick={closeVideo}>
                                <FaTimes />
                            </button>
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                className={styles.video}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
