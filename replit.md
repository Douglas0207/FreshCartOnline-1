# Alice Fruits - Ecommerce Website

## Project Overview
Alice Fruits is a premium ecommerce website for an exotic and seasonal fruits wholesale dealer. The site offers home delivery services and showcases a beautiful catalog of exotic fruits from around the world.

## Brand Identity
- **Business Name**: Alice Fruits
- **Tagline**: Exotic fruits & Wholesale Dealer
- **Primary Color**: Deep Teal (#1a4d4d / HSL 171 50% 20%)
- **Accent Color**: Golden Yellow (#d4a645 / HSL 42 60% 55%)
- **Logo**: Features "alice" text in golden yellow with a leaf motif on deep teal background

## Contact Information
- **Phone Numbers**: 9566461298, 7305455757
- **Social Media**: @alice.fruitss (Instagram & Facebook)
- **Email**: alice.fruitss@example.com

## Technical Stack
- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **State Management**: Zustand (for cart)
- **Data Fetching**: TanStack Query
- **Routing**: Wouter
- **Storage**: In-memory storage (MemStorage)

## Features
- Homepage with hero section and featured products
- Product catalog with filtering (all/exotic/seasonal)
- Individual product detail pages
- Shopping cart with persistent state
- Checkout flow with order placement
- About page highlighting company values
- Contact page with business information
- Responsive design for mobile and desktop

## Project Structure
```
client/src/
├── components/
│   ├── ui/          # shadcn components
│   ├── Header.tsx   # Navigation header with cart
│   ├── Footer.tsx   # Footer with contact info
│   ├── Hero.tsx     # Homepage hero section
│   ├── ProductCard.tsx  # Product display card
│   ├── CartDrawer.tsx   # Shopping cart sidebar
│   └── FeaturesSection.tsx
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductDetail.tsx
│   ├── Checkout.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── lib/
│   ├── cart-store.ts    # Zustand cart state
│   └── queryClient.ts
└── App.tsx

server/
├── routes.ts    # API endpoints
└── storage.ts   # Data storage interface

shared/
└── schema.ts    # Shared TypeScript types
```

## Design System
Following design_guidelines.md:
- Typography: Playfair Display (headings), Inter (body)
- Color tokens configured in index.css
- Consistent spacing using Tailwind scale
- hover-elevate and active-elevate-2 utilities for interactions
- Card-based layouts with proper borders and shadows

## Current Development Status
- Phase 1: Schema & Frontend (In Progress)
  - ✅ Data schemas defined (Product, Order, CartItem)
  - ✅ Cart state management with Zustand
  - ✅ All React components built
  - ✅ All pages created
  - ✅ Routing configured
  - ⏳ Ready for backend implementation

## Next Steps
1. Implement backend API routes for products and orders
2. Set up in-memory storage with sample product data
3. Connect frontend to backend APIs
4. Test complete user journey
