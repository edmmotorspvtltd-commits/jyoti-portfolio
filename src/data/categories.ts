export interface Category {
    id: string;
    name: string;
    icon: string;
    description: string;
}

export const categories: Category[] = [
    {
        id: 'all',
        name: 'All',
        icon: '✨',
        description: 'View all portfolio items'
    },
    {
        id: 'fashion',
        name: 'Fashion',
        icon: '👗',
        description: 'High fashion, runway, designer collaborations'
    },
    {
        id: 'beauty',
        name: 'Beauty',
        icon: '💄',
        description: 'Makeup, skincare, beauty campaigns'
    },
    {
        id: 'lifestyle',
        name: 'Lifestyle',
        icon: '🌟',
        description: 'Casual, everyday looks and lifestyle shoots'
    },
    {
        id: 'editorial',
        name: 'Editorial',
        icon: '📰',
        description: 'Magazine features and artistic shoots'
    },
    {
        id: 'commercial',
        name: 'Commercial',
        icon: '🏢',
        description: 'Brand campaigns and advertisements'
    }
];
