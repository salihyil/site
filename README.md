# Portfolio Website

A modern and responsive portfolio website built with Next.js 13, React, TypeScript, and Tailwind CSS. Features a clean design, dark mode support, and a contact form with email integration.

## Features🌙 Dark mode support

📱 Fully responsive design
🎨 Smooth animations with Framer Motion
📧 Contact form with email integration
📊 Server-side rendering with Next.js 13
🎯 Section tracking with Intersection Observer
💅 Styled with Tailwind CSS
🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 13 (App Router)
  **Language:** TypeScript
  **Styling:** Tailwind CSS
  **Animation:** Framer Motion
  **Email Service:** React Email & Resend
  **Icons:** React Icons
  **UI Components:**
- React Vertical Timeline
- React Intersection Observer
- React Hot Toast
  **Deployment:** Vercel

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:

```bash
cd portfolio
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```plaintext
RESEND_API_KEY=your_resend_api_key
SEND_ME=your_email@example.com
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Main application routes and layouts
- `components/`: Reusable UI components
- `context/`: React context providers
- `lib/`: Utility functions and data
- `public/`: Static assets
- `email/`: Email templates
- `actions/`: Server actions

## Key Components

- Dynamic section tracking
- Smooth scrolling navigation
- Interactive project cards
- Skills showcase
- Experience timeline
- Contact form with email integration
- Theme switcher (Dark/Light mode)

## Deployment

The project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically build and deploy your application.

## License

This project is open source and available under the MIT License.

## Contact

For any questions or feedback, please reach out through the contact form on the website or directly via email.
