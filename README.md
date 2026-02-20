# Kicks - Premium Sneaker Store

A modern e-commerce storefront built with Next.js, showcasing sneakers and athletic footwear with real-time data from the Platzi Fake Store API.

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Data Fetching**: RTK Query (Redux Toolkit Query)
- **State Management**: Context API for cart functionality
- **UI Components**: Ant Design
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **API**: Platzi Fake Store API (https://fakeapi.platzi.com)

## Features

- Product browsing with real-time API data
- Category filtering and navigation
- Shopping cart with Context API
- Smooth animations and transitions with Framer Motion
- Responsive mobile-first design
- TypeScript for type safety
- Server-side rendering with Next.js

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # Redux and Ant Design providers
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/         # Page sections
│   │   ├── HeaderSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── ProductsSection.tsx
│   │   └── FooterSection.tsx
│   └── ui/               # Reusable UI components
├── context/              # React Context providers
│   └── CartContext.tsx   # Shopping cart state
├── store/               # Redux store configuration
│   ├── store.ts         # Store setup
│   └── api/
│       └── productsApi.ts  # RTK Query API endpoints
└── lib/                 # Utility functions

```

## API Integration

The application uses the Platzi Fake Store API:

- **Products**: `https://api.escuelajs.co/api/v1/products`
- **Categories**: `https://api.escuelajs.co/api/v1/categories`

RTK Query handles:
- Automatic caching
- Background refetching
- Loading states
- Error handling

## State Management

### RTK Query
Used for server state management and API data fetching with automatic caching.

### Context API
Used for client-side state:
- Shopping cart items
- Cart operations (add, remove, update quantity)
- Total calculations

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Key Components

### RTK Query API (`src/store/api/productsApi.ts`)
- `useGetProductsQuery` - Fetch products with pagination
- `useGetProductByIdQuery` - Fetch single product
- `useGetCategoriesQuery` - Fetch all categories
- `useGetProductsByCategoryQuery` - Filter products by category

### Context API (`src/context/CartContext.tsx`)
- `addToCart` - Add product to cart
- `removeFromCart` - Remove product from cart
- `updateQuantity` - Update product quantity
- `getTotalItems` - Get total cart items
- `getTotalPrice` - Calculate total price

## Animations

Framer Motion is used throughout for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Stagger animations for lists

## Styling

- Tailwind CSS for utility-first styling
- Ant Design for pre-built components
- Custom CSS variables for brand colors
- Responsive design with mobile-first approach
