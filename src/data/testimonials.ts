// 🎯 TESTIMONIALS DATA - Easy to update!

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company?: string;
    image?: string;
    quote: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: 'testimonial-1',
        name: 'Rajesh Kumar',
        role: 'Fashion Photographer',
        company: 'Studio Elite',
        quote: 'Working with Jyoti has been an absolute pleasure. Her professionalism and natural ability to embody different styles make every photoshoot a success. Highly recommended!',
        rating: 5
    },
    {
        id: 'testimonial-2',
        name: 'Priya Sharma',
        role: 'Creative Director',
        company: 'Fashion Forward Magazine',
        quote: 'Jyoti brings incredible energy and versatility to every shoot. She understands the vision instantly and delivers beyond expectations every single time.',
        rating: 5
    },
    {
        id: 'testimonial-3',
        name: 'Amit Patel',
        role: 'Brand Manager',
        company: 'Luxury Brands Inc',
        quote: 'Professional, punctual, and absolutely stunning on camera. Jyoti has been our go-to model for multiple campaigns. She truly elevates our brand image.',
        rating: 5
    },
    {
        id: 'testimonial-4',
        name: 'Neha Verma',
        role: 'Makeup Artist',
        company: 'Glamour Studio',
        quote: 'A dream to work with! Jyoti is not only beautiful but also incredibly collaborative. She makes everyone on set feel comfortable and inspired.',
        rating: 5
    }
];
