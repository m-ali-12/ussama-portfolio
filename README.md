# Pro Portfolio (Next.js + Tailwind) — Vercel Ready

یہ ایک **complete multi-page professional portfolio** ہے (Home, About, Resume, Services, Portfolio, Contact) — بالکل ویسا modern dark style جیسے آپ کی video میں تھا۔

## 1) Run locally
```bash
npm install
npm run dev
```
Open: http://localhost:3000

## 2) Customize (اپنا data یہاں edit کرو)
`src/lib/data.ts`

- name, email, social links
- skills
- experience / education
- projects (title, description, links, cover)

## 3) Project images
Images: `public/projects/`
- p1.jpg, p2.jpg, p3.jpg, p4.jpg (آپ اپنی screenshots replace کر سکتے ہو)

## 4) Resume PDF
`public/Nouman-Resume.pdf` کو اپنے original CV PDF سے replace کر دیں۔

## 5) Deploy on Vercel (GitHub)
1. GitHub پر repo create کرو
2. اس code کو push کرو
3. Vercel میں **New Project** → GitHub repo select → Deploy

Done ✅
