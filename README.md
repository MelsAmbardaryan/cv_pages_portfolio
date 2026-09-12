# cv_pages_portfolio

A personal portfolio site built with Next.js (App Router).

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Environment variables

Create a `.env.local` file (not committed) with:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Without it, the Contact section falls back to a plain "email me directly" message instead of the form.

### Setting up Formspree (contact form)

1. Sign up at https://formspree.io (free tier is enough).
2. Create a new form and set its notification email to mambardaryan9721@gmail.com.
3. Copy the form's endpoint URL (looks like `https://formspree.io/f/xxxxxxxx`).
4. Add it to `.env.local` as shown above, restart `npm run dev`.
5. When deploying, add the same variable in your host's project settings (e.g. Vercel → Project → Settings → Environment Variables).
