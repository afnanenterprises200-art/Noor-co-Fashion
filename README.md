# Noor & Co. — Pakistani Fashion E-commerce

A React + Vite mobile-first e-commerce starter for a premium Pakistani women's fashion brand.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Hosting

This is a standard Vite React app and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages (with SPA routing configuration), or any static hosting provider that supports a Vite build.

For a simple shared-hosting setup, run `npm run build` and upload the contents of `dist/` to `public_html`.

## WhatsApp

Edit `WA_NUMBER` in `src/main.jsx`:

```js
const WA_NUMBER = "923001234567";
```

Use the full international number without `+` or spaces.

## Replace placeholder photography

The starter currently uses remote Unsplash fashion/editorial placeholders. Replace the image URLs in `src/main.jsx` with your own optimized campaign/product images before launch.

## Product data

All 30 starter products live in the `products` array in `src/main.jsx`. The fields already map cleanly to a future database/CMS:

- id
- name
- category
- style
- type
- price
- salePrice
- sizes
- colors
- fabric
- stock
- newArrival
- featured
- bestseller
- desc
- images

A real backend can replace this array later without redesigning the UI.

## Notes

- Cart, wishlist, product selection, filters and COD checkout work client-side.
- Checkout currently demonstrates the flow and does not send orders to a backend.
- Connect checkout to your preferred database/order API before taking live orders.
- Replace policy placeholders with your final legal text.
