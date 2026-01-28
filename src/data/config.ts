// 🎯 SITE CONFIGURATION - Easy to update!

export const siteConfig = {
    // Model Information
    modelName: 'Jyoti soni',
    tagline: 'Professional Model & Fashion Influencer',
    bio: 'Celebrating the beauty of Indian fashion—where I truly shine. Specializing in traditional wear, bridal lehengas, ethnic sarees, and cultural styling. Also versatile in contemporary Western fashion and lifestyle shoots. Available for editorial, commercial, and runway work across India.',

    // Contact Information
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Jaipur Rajasthan India',

    // Social Media Links
    social: {
        instagram: 'https://www.instagram.com/the_jyoti_06/',
        twitter: '',
        facebook: '',
        linkedin: '',
        tiktok: ''
    },

    // Model Stats
    stats: {
        height: "5'9\"",
        bust: '34"',
        waist: '24"',
        hips: '36"',
        shoeSize: '8',
        hairColor: 'Brown',
        eyeColor: 'Hazel'
    },

    // Agency Information (optional)
    agency: {
        name: 'Elite Model Management',
        website: 'https://elitemodel.com',
        contact: 'agency@example.com'
    },

    // Google Sheets Configuration (for contact form)
    googleSheets: {
        // You'll add your Google Apps Script URL here
        webhookUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK || ''
    },

    // Email Configuration (for auto-reply)
    emailConfig: {
        // You'll add your email service API key here
        apiKey: process.env.EMAIL_API_KEY || '',
        fromEmail: process.env.FROM_EMAIL || 'noreply@yourportfolio.com',
        fromName: 'Your Name - Portfolio'
    }
};
