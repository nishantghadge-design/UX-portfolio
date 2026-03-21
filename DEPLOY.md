# 🚀 Deployment Guide — nishantghadge.com

**Stack:** Static HTML/CSS/JS + Decap CMS  
**Hosting:** Netlify (free) + Bluehost DNS  
**Time to deploy:** ~20 minutes

---

## Overview

We're deploying to **Netlify** (free tier) instead of directly to Bluehost because:
- Netlify gives you automatic deploys every time you push to GitHub
- The CMS editor (`/admin`) requires Netlify's Git Gateway for authentication
- Better performance (global CDN) vs Bluehost shared hosting
- Free SSL certificate auto-renewed
- Your domain `nishantghadge.com` stays on Bluehost — we just update DNS to point to Netlify

---

## Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **New repository** (top right, `+` icon)
3. Name it: `nishantghadge-portfolio`
4. Set to **Private** (recommended) or Public
5. Click **Create repository**
6. On your computer, open Terminal and run:

```bash
cd path/to/nishantghadge-site    # navigate to the project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nishantghadge-portfolio.git
git push -u origin main
```

---

## Step 2 — Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up with your GitHub account
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** and authorize Netlify
4. Select your `nishantghadge-portfolio` repo
5. Settings (should auto-detect):
   - **Branch:** `main`
   - **Build command:** *(leave empty)*
   - **Publish directory:** `public`
6. Click **Deploy site**
7. Wait ~30 seconds — your site will be live at a random URL like `amazing-name-123.netlify.app`

---

## Step 3 — Enable Identity + Git Gateway (for CMS)

1. In Netlify dashboard, go to your site → **Site configuration → Identity**
2. Click **Enable Identity**
3. Under **Registration**, set to **Invite only**
4. Scroll to **Services → Git Gateway** → click **Enable Git Gateway**
5. Go to **Identity → Invite users** → enter your email → send invite
6. Check your email, click the invite link, and set a password
7. Now you can log into `nishantghadge.com/admin` with that email + password

---

## Step 4 — Add Your Custom Domain on Netlify

1. In Netlify, go to **Domain management → Add a domain**
2. Enter: `nishantghadge.com` → click **Verify**
3. Netlify will show you **nameservers** like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
   (yours will be slightly different — copy them exactly)

---

## Step 5 — Update DNS on Bluehost

1. Log into [bluehost.com](https://bluehost.com)
2. Go to **Domains → Manage** → find `nishantghadge.com`
3. Click **DNS / Nameservers** → **Edit Nameservers**
4. Replace the existing nameservers with Netlify's nameservers from Step 4
5. Save changes

⏱ DNS propagation takes **15 minutes to 48 hours** (usually under 2 hours).

---

## Step 6 — Enable HTTPS

1. Back in Netlify → **Domain management**
2. Once DNS has propagated, click **Verify DNS configuration**
3. Then click **Provision SSL certificate**
4. Your site is now live at `https://nishantghadge.com` ✅

---

## Step 7 — Editing Content (CMS)

1. Go to `https://nishantghadge.com/admin`
2. Log in with the email/password you set in Step 3
3. You'll see:
   - **Site Settings** — edit hero text, about section, contact info
   - **Case Studies** — add/edit/delete case studies, upload images
   - **Design Principles** — edit your 4 principles
4. After saving, Netlify auto-deploys — site updates within ~30 seconds

---

## Step 8 — Adding Case Study Images

**Via CMS:**
1. Go to `/admin` → **Case Studies** → select a case study
2. Click the image field → **Choose an image** → upload your file
3. Save and publish

**Via GitHub:**
1. Add images to `public/assets/images/`
2. Commit and push — auto-deploys to live site

---

## Future Updates

Any time you push to `main` on GitHub, Netlify auto-deploys.

```bash
git add .
git commit -m "Updated case study images"
git push
```

Done — live in ~30 seconds.

---

## Troubleshooting

| Issue | Fix |
|---|---|
| Site not loading after DNS change | Wait up to 48hrs for DNS propagation |
| CMS login not working | Check Identity is enabled and Git Gateway is on |
| Images not showing | Check path starts with `/assets/images/filename.jpg` |
| Changes not live | Check Netlify deploy log for errors |

---

## Support

- Netlify docs: https://docs.netlify.com
- Decap CMS docs: https://decapcms.org/docs
- DNS help: https://docs.netlify.com/domains-https/custom-domains/
