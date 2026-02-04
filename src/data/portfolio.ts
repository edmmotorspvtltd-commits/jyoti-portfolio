export interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    image: string;
    date: string;
    featured?: boolean;
    description?: string;
}

// 🎯 EASY TO UPDATE: Add your portfolio images here!
// Just add a new object with your image details
export const portfolioItems: PortfolioItem[] = [
    // Fashion Category - Saree Collection
    {
        id: 'fashion-saree-1',
        title: 'Traditional Saree Elegance',
        category: 'fashion',
        image: '/api/images/fashion/RAJ02594.JPG',
        date: '2024-01-15',
        featured: true,
        description: 'Traditional Indian saree photoshoot'
    },
    {
        id: 'fashion-saree-2',
        title: 'Saree Fashion Editorial',
        category: 'fashion',
        image: '/api/images/fashion/RAJ02687.JPG',
        date: '2024-01-14',
        featured: true
    },
    {
        id: 'fashion-saree-3',
        title: 'Classic Saree Look',
        category: 'fashion',
        image: '/api/images/fashion/RAJ02697.JPG',
        date: '2024-01-13',
        featured: false
    },
    {
        id: 'fashion-saree-4',
        title: 'Saree Collection',
        category: 'fashion',
        image: '/api/images/fashion/RAJ02699.JPG',
        date: '2024-01-12',
        featured: true
    },

    // Fashion - Purple Dress
    {
        id: 'fashion-purple-1',
        title: 'Purple Evening Gown',
        category: 'fashion',
        image: '/api/images/fashion/DSC00070.JPG',
        date: '2024-01-11',
        featured: true
    },
    {
        id: 'fashion-purple-2',
        title: 'Elegant Purple Dress',
        category: 'fashion',
        image: '/api/images/fashion/DSC00140.JPG',
        date: '2024-01-10',
        featured: false
    },
    {
        id: 'fashion-purple-3',
        title: 'Purple Fashion',
        category: 'fashion',
        image: '/api/images/fashion/DSC00313.JPG',
        date: '2024-01-09',
        featured: true
    },

    // Fashion - Salwar Suit
    {
        id: 'fashion-salwar-1',
        title: 'Traditional Salwar Suit',
        category: 'fashion',
        image: '/api/images/fashion/DSC00379.JPG',
        date: '2024-01-08',
        featured: false
    },
    {
        id: 'fashion-salwar-2',
        title: 'Ethnic Wear Collection',
        category: 'fashion',
        image: '/api/images/fashion/DSC00387.JPG',
        date: '2024-01-07',
        featured: true
    },
    {
        id: 'fashion-salwar-3',
        title: 'Designer Salwar',
        category: 'fashion',
        image: '/api/images/fashion/DSC00388.JPG',
        date: '2024-01-06',
        featured: false
    },

    // Lifestyle Category - White One Piece
    {
        id: 'lifestyle-white-1',
        title: 'White One Piece Elegance',
        category: 'lifestyle',
        image: '/api/images/lifestyle/DSC08214.jpg',
        date: '2024-01-05',
        featured: true
    },
    {
        id: 'lifestyle-white-2',
        title: 'Casual White Dress',
        category: 'lifestyle',
        image: '/api/images/lifestyle/DSC08217.jpg',
        date: '2024-01-04',
        featured: false
    },

    // Lifestyle - Short Dress
    {
        id: 'lifestyle-short-1',
        title: 'Chic Short Dress',
        category: 'lifestyle',
        image: '/api/images/lifestyle/DSC08218.jpg',
        date: '2024-01-03',
        featured: true
    },
    {
        id: 'lifestyle-short-2',
        title: 'Modern Lifestyle Look',
        category: 'lifestyle',
        image: '/api/images/lifestyle/DSC08220.jpg',
        date: '2024-01-02',
        featured: false
    },
    {
        id: 'lifestyle-3',
        title: 'Lifestyle Photography',
        category: 'lifestyle',
        image: '/api/images/lifestyle/DSC08221.jpg',
        date: '2024-01-01',
        featured: true
    },
    {
        id: 'lifestyle-4',
        title: 'Casual Elegance',
        category: 'lifestyle',
        image: '/api/images/lifestyle/DSC09185.jpg',
        date: '2023-12-31',
        featured: false
    },

    // Beauty Category - Single Purple Dress
    {
        id: 'beauty-purple-1',
        title: 'Beauty Portrait',
        category: 'beauty',
        image: '/api/images/beauty/RAJ01718.JPG',
        date: '2023-12-30',
        featured: true
    },
    {
        id: 'beauty-purple-2',
        title: 'Glamour Shot',
        category: 'beauty',
        image: '/api/images/beauty/RAJ01719.JPG',
        date: '2023-12-29',
        featured: false
    },
    {
        id: 'beauty-purple-3',
        title: 'Beauty Editorial',
        category: 'beauty',
        image: '/api/images/beauty/RAJ01720.JPG',
        date: '2023-12-28',
        featured: true
    },
    {
        id: 'beauty-4',
        title: 'Portrait Photography',
        category: 'beauty',
        image: '/api/images/beauty/RAJ01726.JPG',
        date: '2023-12-27',
        featured: false
    },

    // Additional Fashion Images
    {
        id: 'fashion-4',
        title: 'Fashion Forward',
        category: 'fashion',
        image: '/api/images/fashion/DSC00404.JPG',
        date: '2023-12-26',
        featured: false
    },
    {
        id: 'fashion-5',
        title: 'Haute Couture',
        category: 'fashion',
        image: '/api/images/fashion/DSC00408.JPG',
        date: '2023-12-25',
        featured: true
    },
    {
        id: 'fashion-6',
        title: 'Designer Collection',
        category: 'fashion',
        image: '/api/images/fashion/DSC00413.JPG',
        date: '2023-12-24',
        featured: false
    },
    {
        id: 'fashion-7',
        title: 'Fashion Statement',
        category: 'fashion',
        image: '/api/images/fashion/DSC00415.JPG',
        date: '2023-12-23',
        featured: true
    },
    {
        id: 'fashion-8',
        title: 'Runway Ready',
        category: 'fashion',
        image: '/api/images/fashion/DSC00419.JPG',
        date: '2023-12-22',
        featured: false
    },
    {
        id: 'fashion-9',
        title: 'Style Icon',
        category: 'fashion',
        image: '/api/images/fashion/DSC00422.JPG',
        date: '2023-12-21',
        featured: true
    },
    {
        id: 'fashion-10',
        title: 'Fashion Photography',
        category: 'fashion',
        image: '/api/images/fashion/DSC00424.JPG',
        date: '2023-12-20',
        featured: false
    },

    // More Lifestyle
    {
        id: 'lifestyle-5',
        title: 'Lifestyle Shoot',
        category: 'lifestyle',
        image: '/api/images/lifestyle/RAJ01479.JPG',
        date: '2023-12-19',
        featured: true
    },
    {
        id: 'lifestyle-6',
        title: 'Casual Style',
        category: 'lifestyle',
        image: '/api/images/lifestyle/RAJ01480.JPG',
        date: '2023-12-18',
        featured: false
    }
];

// Get featured items for homepage
export const getFeaturedItems = () =>
    portfolioItems.filter(item => item.featured);

// Get items by category
export const getItemsByCategory = (category: string) =>
    category === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === category);
