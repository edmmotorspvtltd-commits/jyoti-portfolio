// 🎯 BLOG POSTS DATA - Easy to update!

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    tags: string[];
    image: string;
    featured?: boolean;
    readTime?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'blog-1',
        title: 'My Journey into Professional Modeling',
        slug: 'journey-into-professional-modeling',
        excerpt: 'Discover how I started my modeling career and the lessons I learned along the way. From my first photoshoot to walking the runway.',
        content: `
# My Journey into Professional Modeling

Starting a career in modeling wasn't something I had planned from childhood, but it became a passion that transformed my life. Here's my story...

## The Beginning

It all started when a photographer noticed me at a local event. I was hesitant at first, but decided to give it a try. That first photoshoot was nerve-wracking but exhilarating.

## Learning the Craft

Professional modeling is much more than just posing for the camera. I learned about:
- Understanding lighting and angles
- Working with different photographers and their styles
- Maintaining professionalism on set
- Building a diverse portfolio

## Challenges and Growth

Every career has its challenges. For me, it was learning to handle rejection and staying confident. Each "no" taught me something valuable and made me stronger.

## Advice for Aspiring Models

If you're thinking about modeling:
1. Build a strong portfolio
2. Stay professional and punctual
3. Take care of your health and fitness
4. Network with industry professionals
5. Never stop learning

The journey continues, and I'm excited for what's ahead!
    `,
        author: 'Jyoti',
        date: '2024-01-15',
        category: 'Career',
        tags: ['modeling', 'career', 'journey', 'tips'],
        image: '/api/images/fashion/DSC00070.JPG',
        featured: true,
        readTime: '5 min read'
    },
    {
        id: 'blog-2',
        title: 'Fashion Photography Tips: What Models Should Know',
        slug: 'fashion-photography-tips',
        excerpt: 'Essential tips for models to excel in fashion photography sessions. Learn how to work with photographers and create stunning images.',
        content: `
# Fashion Photography Tips: What Models Should Know

Fashion photography is an art form that requires collaboration between the model and photographer. Here are my top tips...

## Understanding Your Angles

Every face and body has its best angles. Spend time in front of a mirror to discover yours. Practice different poses and expressions.

## Communication is Key

Always communicate with your photographer. Ask questions, share ideas, and be open to direction. The best photos come from great teamwork.

## Preparation Matters

- Get enough sleep before a shoot
- Stay hydrated
- Bring your portfolio and comp cards
- Arrive early and ready to work

## Posing Techniques

Natural poses often work best. Avoid stiff, uncomfortable positions. Move fluidly and let the photographer capture the best moments.

## Building Relationships

The modeling industry is built on relationships. Be professional, kind, and easy to work with. Your reputation matters as much as your portfolio.
    `,
        author: 'Jyoti',
        date: '2024-01-10',
        category: 'Photography',
        tags: ['photography', 'fashion', 'tips', 'modeling'],
        image: '/api/images/fashion/RAJ02594.JPG',
        featured: true,
        readTime: '4 min read'
    },
    {
        id: 'blog-3',
        title: 'Behind the Scenes: A Day in the Life of a Model',
        slug: 'day-in-life-of-model',
        excerpt: 'Ever wondered what a typical day looks like for a professional model? Join me as I share my daily routine and experiences.',
        content: `
# Behind the Scenes: A Day in the Life of a Model

People often ask me what my typical day looks like. The truth is, no two days are exactly the same, but here's a glimpse...

## Morning Routine

My day usually starts early - around 6 AM. I begin with:
- Light exercise or yoga
- Healthy breakfast
- Skincare routine
- Checking my schedule and emails

## Photoshoot Days

On shoot days, I arrive at the location early. The day includes:
- Hair and makeup (can take 1-3 hours)
- Wardrobe selection and fitting
- The actual photoshoot (4-8 hours)
- Multiple outfit and location changes

## Maintaining Fitness

Staying in shape is crucial. I work out 4-5 times a week, focusing on:
- Cardio for endurance
- Strength training
- Flexibility exercises
- Healthy eating habits

## Networking and Meetings

Building relationships is essential. I attend:
- Industry events
- Portfolio reviews
- Meetings with agencies
- Networking sessions with photographers

## Self-Care

The industry can be demanding, so self-care is vital:
- Regular skincare treatments
- Adequate sleep
- Mental health breaks
- Spending time with loved ones

It's a demanding but rewarding career that I absolutely love!
    `,
        author: 'Jyoti',
        date: '2024-01-05',
        category: 'Lifestyle',
        tags: ['lifestyle', 'routine', 'modeling', 'wellness'],
        image: '/api/images/lifestyle/DSC08214.jpg',
        featured: true,
        readTime: '6 min read'
    },
    // 🎯 ADD NEW BLOG POSTS HERE - Just copy this template and fill in your content!
    {
        id: 'blog-4',
        title: 'Building a Successful Modeling Portfolio',
        slug: 'building-successful-modeling-portfolio',
        excerpt: 'Learn how to create a modeling portfolio that gets you noticed by agencies and clients. Essential tips for portfolio building.',
        content: `
# Building a Successful Modeling Portfolio

Your portfolio is your most important marketing tool as a model. Here's how to build one that stands out...

## Quality Over Quantity

Don't include every photo you've ever taken. Choose 15-20 of your absolute best images that showcase:
- Different looks and styles
- Variety in poses and expressions
- Professional quality photography
- Your versatility

## Essential Portfolio Shots

Every modeling portfolio should include:
1. **Headshots** - Clear, well-lit face shots
2. **Full body shots** - Show your physique and proportions
3. **Fashion shots** - Editorial style images
4. **Commercial shots** - Friendly, approachable looks
5. **Beauty shots** - Close-ups highlighting features

## Working with Photographers

Collaborate with professional photographers to build your portfolio. Consider:
- TFP (Time for Print) collaborations when starting
- Investing in professional shoots as you progress
- Building relationships with photographers
- Getting variety in styles and settings

## Keeping It Updated

Your portfolio should evolve with your career:
- Update every 3-6 months
- Remove outdated images
- Add new work that shows growth
- Keep it fresh and current

## Digital vs. Physical

In today's digital age, you need both:
- **Digital portfolio**: Easy to share via email/social media
- **Physical portfolio**: For in-person meetings and castings
- **Online presence**: Website, Instagram, modeling platforms

Remember, your portfolio is a living document that grows with your career!
        `,
        author: 'Jyoti',
        date: '2024-01-20',
        category: 'Career',
        tags: ['portfolio', 'modeling', 'photography', 'career'],
        image: '/api/images/fashion/DSC00313.JPG',
        featured: true,
        readTime: '5 min read'
    }
];

// Get featured blog posts
export const getFeaturedPosts = () =>
    blogPosts.filter(post => post.featured);

// Get post by slug
export const getPostBySlug = (slug: string) =>
    blogPosts.find(post => post.slug === slug);

// Get posts by category
export const getPostsByCategory = (category: string) =>
    blogPosts.filter(post => post.category === category);
