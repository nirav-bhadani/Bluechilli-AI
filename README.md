# Welcome to your Lovable project

## SMTP Enquiry Setup

Both the Contact form and Newsletter form now submit to `POST /api/enquiry`, which sends emails through SMTP to `hello@bluechilli.ai`.

1. Copy `.env.example` to `.env` (for local) and configure the same variables in your Vercel project settings.
2. Set these required variables:
	- `SMTP_HOST`
	- `SMTP_PORT`
	- `SMTP_SECURE` (`true` for port 465, usually `false` for 587)
	- `SMTP_USER`
	- `SMTP_PASS`
	- `SMTP_FROM`
	- `ENQUIRY_TO` (set to `hello@bluechilli.ai`)
3. Optional: set `VITE_ENQUIRY_API_URL` only if your API lives on a different domain.

### Local testing

`npm run dev` serves only the frontend. To test `/api/enquiry` locally, run with Vercel dev:

```bash
npx vercel dev
```
