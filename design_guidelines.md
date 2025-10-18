# Alice Fruits E-Commerce Website - Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (E-commerce: Shopify, Instacart, Fresh produce sites)
**Justification:** Food e-commerce requires high visual appeal with appetite-triggering imagery, strong brand presence, and seamless shopping experience. The exotic fruits business model demands showcase of product variety and quality.

**Key Design Principles:**
- Fresh, vibrant aesthetic that emphasizes product quality
- Trust-building through professional presentation
- Seamless shopping flow from browse to checkout
- Mobile-first responsive design (critical for food delivery apps)

## Color Palette

**Primary Colors:**
- Deep Teal: 171 50% 20% (brand primary, headers, CTAs)
- Rich Teal Hover: 171 50% 16% (interactive states)
- Golden Yellow: 42 60% 55% (accents, secondary CTAs, highlights)

**Supporting Colors:**
- Cream Background: 42 40% 96% (page backgrounds, cards)
- Warm White: 42 20% 98% (card surfaces, overlays)
- Dark Text: 171 30% 15% (primary text)
- Medium Gray: 171 10% 45% (secondary text)
- Light Border: 171 15% 88% (dividers, borders)

**Semantic Colors:**
- Success Green: 142 70% 45% (in stock, order confirmed)
- Alert Orange: 25 90% 55% (low stock warnings)
- Error Red: 0 70% 50% (out of stock, form errors)

## Typography

**Font Families:**
- Primary: 'Inter' (Google Fonts) - Clean, modern readability for UI elements
- Display: 'Playfair Display' (Google Fonts) - Elegant serif for hero headlines and section titles

**Type Scale:**
- Headline (Hero): 3.5rem/4rem (desktop), 2.5rem (mobile), Playfair Display, font-weight 700
- Section Title: 2.5rem/3rem, Playfair Display, font-weight 600
- Subsection: 1.5rem, Inter, font-weight 600
- Body Large: 1.125rem, Inter, font-weight 400
- Body: 1rem, Inter, font-weight 400
- Small/Caption: 0.875rem, Inter, font-weight 400
- Button Text: 1rem, Inter, font-weight 600

## Layout System

**Spacing Primitives:** Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-4 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8

**Grid System:**
- Container: max-w-7xl mx-auto px-4 to px-6
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Feature Grid: grid-cols-1 md:grid-cols-3
- Checkout: 2-column layout (cart + form) on desktop, stacked mobile

## Component Library

**Navigation:**
- Sticky header with deep teal background, logo left, navigation center, cart icon right
- Transparent header over hero transitioning to solid on scroll
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Full-width background image of vibrant exotic fruits display
- Overlay gradient (teal to transparent) for text legibility
- Centered content: Logo, headline "Fresh Exotic Fruits Delivered", ORDER NOW button (golden yellow)
- Height: 80vh minimum

**Product Cards:**
- White rounded cards with subtle shadow (shadow-md hover:shadow-lg)
- Product image (square aspect ratio, rounded-t-lg)
- Fruit name (Playfair Display, text-xl)
- Price (golden yellow, text-2xl, font-bold)
- Stock status badge (top-right corner)
- Add to Cart button (deep teal, full-width)

**Shopping Cart:**
- Slide-out drawer from right side
- Item list with thumbnail, name, quantity controls, price
- Subtotal, delivery fee breakdown
- Checkout button (golden yellow, prominent)

**Forms:**
- Input fields: cream background, teal border, rounded-lg
- Focus state: teal ring, border-2
- Labels: text-sm font-medium above inputs
- Error states: red border, error message below

**CTAs:**
- Primary: Golden yellow background, deep teal text, rounded-full, px-8 py-3
- Secondary: Deep teal background, white text
- Outline: Transparent background with teal border (for hero over images, add backdrop-blur-sm bg-white/20)

**Footer:**
- Deep teal background, cream text
- 3-column layout: Business info, Quick links, Contact/Social
- Contact: Phone numbers (9566461298, 7305455757)
- Social: Instagram/Facebook icons (@alice.fruitss)

## Images

**Hero Image:**
- Large, high-quality hero image featuring colorful array of exotic fruits
- Professional food photography with natural lighting
- Placement: Full-width background behind hero content

**Product Images:**
- Individual fruit photography on white/cream background
- Square format (1:1 aspect ratio), minimum 800x800px
- Consistent lighting and styling across all products
- Show texture and freshness of fruits

**Additional Images:**
- About section: Team/warehouse photo showing authenticity
- Delivery section: Delivery vehicle or packaged fruit boxes
- Quality section: Close-up shots highlighting fruit quality

## Page Sections

**Homepage Flow:**
1. Hero with ORDER NOW CTA
2. Featured Products carousel (4-6 exotic fruits)
3. Why Choose Us (3-column: Fresh Quality, Wholesale Pricing, Home Delivery)
4. Product Categories grid
5. Testimonials/Social proof
6. Contact/Order CTA section
7. Footer

**Product Listing:**
- Filter sidebar (fruit type, price range, availability)
- Product grid with pagination
- Sort options (Featured, Price, Alphabetical)

**Product Detail:**
- Large product images with zoom
- Description, nutritional info, origin
- Quantity selector, Add to Cart
- Related products below

**Checkout Flow:**
- Cart review
- Delivery address form
- Contact information
- Order confirmation

This design creates a premium, trustworthy exotic fruits marketplace that balances visual appeal with e-commerce functionality, using the client's distinctive teal and yellow brand colors throughout.