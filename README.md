# Anirban Bhattacharjee — Artist Portfolio & Studio Manager

A full-stack Next.js 14 application: public artist portfolio + password-protected admin dashboard with student CRM, class scheduling, payment tracking, and Google Calendar integration.

---

## 🚀 Deploy to Vercel in 5 minutes

### Step 1 — Push to GitHub

```bash
# Inside the project folder:
git init
git add .
git commit -m "Initial commit"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/violin-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"** → select your repo
3. Leave all build settings as default (Vercel auto-detects Next.js)
4. Click **"Deploy"** — the site will be live in ~60 seconds without any env vars yet

### Step 3 — Add Environment Variables

In your Vercel project dashboard → **Settings → Environment Variables**, add:

| Variable | Value | Required |
|---|---|---|
| `ADMIN_PASSCODE` | Your chosen passcode (e.g. `violin2024`) | ✅ |
| `ADMIN_JWT_SECRET` | Any long random string | ✅ |
| `GOOGLE_CLIENT_ID` | From Google Cloud Console | For Calendar |
| `GOOGLE_CLIENT_SECRET` | From Google Cloud Console | For Calendar |
| `GOOGLE_REDIRECT_URI` | `https://YOUR-APP.vercel.app/api/calendar/callback` | For Calendar |
| `GOOGLE_REFRESH_TOKEN` | From OAuth flow (see below) | For Calendar |
| `SMTP_HOST` | e.g. `smtp.gmail.com` | For email alerts |
| `SMTP_PORT` | `587` | For email alerts |
| `SMTP_USER` | Your email | For email alerts |
| `SMTP_PASS` | App password | For email alerts |
| `NOTIFY_EMAIL` | Where to send alerts | For email alerts |

After adding variables, click **Redeploy**.

---

## 🗓️ Setting up Google Calendar (optional but recommended)

### Step 1 — Create Google Cloud credentials

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (e.g. "Violin Portfolio")
3. Go to **APIs & Services → Library**
4. Search "Google Calendar API" → **Enable** it
5. Go to **APIs & Services → Credentials**
6. Click **"Create Credentials" → "OAuth 2.0 Client ID"**
7. Application type: **Web application**
8. Under **Authorised redirect URIs** add:
   - `http://localhost:3000/api/calendar/callback` (for local dev)
   - `https://YOUR-APP.vercel.app/api/calendar/callback` (for production)
9. Click **Create** — copy your **Client ID** and **Client Secret**

### Step 2 — Add to Vercel env vars

Add `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `GOOGLE_REDIRECT_URI` to Vercel.

### Step 3 — Authorise Calendar access

1. Go to your live site `/admin`
2. Log in with your passcode
3. Click the **"Calendar"** tab
4. Click **"Connect Google Calendar"** — you'll be redirected to Google
5. Sign in and allow access
6. You'll be redirected back to `/api/calendar/callback` which shows your **refresh token**
7. Copy the `GOOGLE_REFRESH_TOKEN` value and add it to Vercel env vars
8. **Redeploy** — Calendar is now connected ✓

---

## 💻 Local Development

```bash
# 1. Clone / enter the folder
cd violin-portfolio

# 2. Install dependencies
npm install

# 3. Copy env example
cp .env.example .env.local
# Edit .env.local and fill in at minimum ADMIN_PASSCODE

# 4. Run dev server
npm run dev

# Open http://localhost:3000
# Admin:  http://localhost:3000/admin
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js              # Root layout (Navbar + Footer)
│   ├── page.js                # Home — hero, bio, gurus preview, performances
│   ├── gurus/page.js          # Gurus & Lineage
│   ├── students/page.js       # Students' Corner (public)
│   ├── contact/page.js        # Contact form
│   ├── admin/page.js          # 🔒 Admin dashboard
│   └── api/
│       ├── auth/route.js      # Login / logout
│       ├── students/
│       │   ├── route.js       # Student CRUD
│       │   └── classes/route.js  # Class scheduling CRUD
│       ├── contact/route.js   # Inquiry CRUD + email notification
│       ├── performances/route.js  # Public calendar events
│       └── calendar/
│           ├── route.js       # Admin calendar list + push event
│           └── callback/route.js  # Google OAuth callback
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── ScrollReveal.js
└── lib/
    ├── auth.js                # JWT sign/verify
    ├── db.js                  # In-memory data store (swap for DB)
    └── googleCalendar.js      # Google Calendar API helpers
```

---

## 🔒 Admin Dashboard Features

Navigate to `/admin` and enter your passcode to access:

- **Overview** — stats cards + next classes + latest inquiries at a glance
- **Students** — full CRUD: add/edit/delete students, toggle payment status
- **Classes** — schedule sessions, set status (pending/confirmed/cancelled), push to Google Calendar with one click
- **Inquiries** — view all contact form submissions, mark as read
- **Calendar** — view upcoming Google Calendar events, connect/manage Calendar integration

---

## 🗄️ Upgrading the Data Store

The current `src/lib/db.js` uses an in-memory Map — data resets when the serverless function restarts. For persistent storage, replace it with any of:

- **Vercel Postgres** (free tier) — `npm install @vercel/postgres`
- **PlanetScale / Neon** — drop-in MySQL/Postgres
- **MongoDB Atlas** — `npm install mongoose`
- **Upstash Redis** — `npm install @upstash/redis`

The API routes and admin UI don't need to change — only `src/lib/db.js`.

---

## 🎨 Design System

Built with **Tailwind CSS** extended with a warm parchment + deep umber + gold palette:

- **Fonts:** Cormorant Garamond (display) + Jost (body)
- **Animations:** fade-up, shimmer, expand-x, float, pulse-ring — all respecting `prefers-reduced-motion`
- **Interactions:** scroll-reveal (`IntersectionObserver`), nav frost-glass on scroll, card hover lifts, portrait frame offset border

---

## 📄 License

MIT — feel free to fork and adapt for any artist portfolio.
