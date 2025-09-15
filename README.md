# Task (aurora-luxury-homes)

Aurora Luxury Homes

Aurora Luxury Homes is a web application for displaying real estate property data. Built with React/Next.js, it integrates a Retool API for authentication and property information, Zustand for state management, Material UI for components, SCSS for custom styling, and i18n for multi-language support. The project emphasizes a clean, responsive, and modular architecture, ensuring a seamless experience on both desktop and mobile devices.

Features

    ✅User authentication via API (plaintext credentials):

    Users can log in through the Retool API.
    Authentication is protected using a Higher-Order Component (HOC) for route guarding.
    Zustand manages global session state and user information.
    Supports multiple languages via i18n.

    🏠Property Listing

    Fetches a list of properties from the Retool API.
    Displays key details: property name, address, price, and thumbnail.
    Users can view more detailed information for each property.

    🔍Search and Filters

    Zustand stores authentication status, property data, and search/filter state.
    Keeps track of selected properties and session information.

    ⚙️ State Management:

    Zustand stores authentication state, property data, and search filters.
    Tracks selected properties and user session efficiently.

    🎨 Responsive Design

    Material UI components for a consistent UI.
    SCSS for custom layouts and styling adjustments.
    Optimized layouts for mobile and desktop screens.

    📄 Additional Views

    Login: Login screen with username and password validation.
    Profile: View of the authenticated user's profile with personal details.
    Contact: Contact form to submit inquiries or requests.
    About: Page with company information and services offered.

🛠 Technologies Used:

    React / Next.js: Framework for dynamic interfaces and server-side rendered pages.
    Zustand: Lightweight global state management.
    Material UI: Responsive UI components.
    SCSS: Custom styling for layouts and components.
    Retool API: Mock API for authentication and property data.
    i18n: Multilingual support.


## Retool API Base URLs for Fake Data

The following environment variables are defined in .env to store the Retool API endpoints:
For authentication (login, session verification).
    NEXT_PUBLIC_API_BASE_URL_USERS=https://retoolapi.dev/fake/apiUser

To fetch the property list and details.
    NEXT_PUBLIC_BASE_URL_PROPERTIES=


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### List of implemented icons

- [real-estate](https://www.flaticon.es/icono-gratis/real-estate_9144451?term=estate&related_id=9144451)

### Image created by gemini

- [Logo](https://gemini.google.com/app)
- [Slogan_EN_c](https://gemini.google.com/app)
- [Slogan_ES_c](https://gemini.google.com/app)