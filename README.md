# Model Portfolio Website

A stunning, professional model portfolio built with Next.js featuring elegant dark theme, easy content management, and Google Sheets + email integration.

## ✨ Features

- 🎨 **Elegant Dark Theme** - Premium design with gold accents
- 📸 **Portfolio Gallery** - Category-based filtering system
- 📧 **Contact Form** - Google Sheets integration + auto-email confirmation
- 🚀 **Fast & Responsive** - Optimized for all devices
- 📝 **Easy to Update** - Simple data files, no database needed
- 🎬 **Smooth Animations** - Professional micro-interactions

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `env.example` to `.env.local`:

```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration (see Setup Guide below).

### 3. Update Your Information

Edit `src/data/config.ts` with your personal information:
- Model name
- Bio and tagline
- Contact information
- Social media links
- Model stats

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📸 Adding Portfolio Images

### Easy 2-Step Process:

**Step 1:** Add your image to the appropriate folder:
```
public/images/
  ├── fashion/
  ├── beauty/
  ├── lifestyle/
  ├── editorial/
  └── commercial/
```

**Step 2:** Add entry to `src/data/portfolio.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Shoot Name',
  category: 'fashion',  // or beauty, lifestyle, etc.
  image: '/images/fashion/your-image.jpg',
  date: '2024-01-15',
  featured: true  // Shows on homepage
}
```

That's it! The website automatically updates. ✨

## 🎨 Adding New Categories

Edit `src/data/categories.ts`:

```typescript
{
  id: 'new-category',
  name: 'New Category',
  icon: '✨',
  description: 'Description here'
}
```

Then create the folder: `public/images/new-category/`

## 📧 Google Sheets Setup

### Step 1: Create Google Sheet

1. Create a new Google Sheet
2. Add headers: `Name`, `Email`, `Phone`, `Message Type`, `Message`, `Timestamp`

### Step 2: Create Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete default code and paste:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.messageType,
    data.message,
    data.timestamp
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Deploy > New deployment**
4. Choose **Web app**
5. Set "Who has access" to **Anyone**
6. Click **Deploy**
7. Copy the **Web app URL**

### Step 3: Add to Environment

Paste the URL in `.env.local`:

```
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK=your_apps_script_url_here
```

## 📧 Email Setup (Optional)

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add to `.env.local`:

```
RESEND_API_KEY=your_api_key_here
FROM_EMAIL=noreply@yourdomain.com
```

4. Install Resend:

```bash
npm install resend
```

5. Update `src/app/api/contact/route.ts` to use Resend (uncomment the code).

### Option 2: Other Services

You can also use SendGrid, Nodemailer, or any email service. Update the `sendEmail` function in `src/app/api/contact/route.ts`.

## 📁 Project Structure

```
model-portfolio/
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # Reusable components
│   ├── data/            # 🎯 EDIT THESE FILES
│   │   ├── config.ts    # Personal info
│   │   ├── portfolio.ts # Portfolio images
│   │   └── categories.ts # Categories
│   └── lib/             # Utilities
├── public/
│   └── images/          # 📸 ADD IMAGES HERE
└── styles/              # Global styles
```

## 🎨 Customization

### Change Color Theme

Edit `src/app/globals.css`:

```css
:root {
  --color-accent-gold: #d4af37;  /* Change to your color */
  /* ... other variables */
}
```

### Change Fonts

Edit `src/app/globals.css`:

```css
@import url('your-google-fonts-url');

:root {
  --font-heading: 'Your Font', serif;
  --font-body: 'Your Font', sans-serif;
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Other Platforms

Works with Netlify, Railway, or any platform supporting Next.js.

## 📝 Content Management

All content is managed through simple TypeScript files:

- **Personal Info**: `src/data/config.ts`
- **Portfolio Items**: `src/data/portfolio.ts`
- **Categories**: `src/data/categories.ts`

No database or CMS required!

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Integration**: Google Sheets API
- **Email**: Resend / SendGrid / Nodemailer

## 📧 Support

For issues or questions, check the documentation or contact the developer.

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ using Next.js**
