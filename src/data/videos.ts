// 🎯 VIDEOS DATA - Easy to update!

export interface Video {
    id: string;
    title: string;
    description?: string;
    thumbnail: string;
    videoUrl: string;
    category: string;
    duration?: string;
    featured?: boolean;
}

export const videos: Video[] = [
    {
        id: 'video-1',
        title: 'Fashion Runway 2024',
        description: 'Behind the scenes of the latest fashion show',
        thumbnail: '/images/fashion/DSC00070.JPG',
        videoUrl: '/videos/fashion-runway.mp4',
        category: 'fashion',
        duration: '2:30',
        featured: true
    },
    {
        id: 'video-2',
        title: 'Lifestyle Photoshoot',
        description: 'Casual lifestyle photography session',
        thumbnail: '/images/lifestyle/DSC08214.jpg',
        videoUrl: '/videos/lifestyle-shoot.mp4',
        category: 'lifestyle',
        duration: '1:45',
        featured: true
    },
    {
        id: 'video-3',
        title: 'Beauty Campaign',
        description: 'Professional beauty and makeup showcase',
        thumbnail: '/images/beauty/RAJ01718.JPG',
        videoUrl: '/videos/beauty-campaign.mp4',
        category: 'beauty',
        duration: '3:00',
        featured: true
    }
];

// Get featured videos
export const getFeaturedVideos = () =>
    videos.filter(video => video.featured);
