# Mahalle Video Club

A production-oriented Persian RTL movie/TV-series catalog starter for a licensed local video club.

## Stack
Next.js + TypeScript + React + Tailwind-ready CSS + PostgreSQL + Prisma + bcrypt + HLS.js + QR-ready architecture.

## Setup
1. Copy `.env.example` to `.env` and set `DATABASE_URL` and `AUTH_SECRET`.
2. Install dependencies: `npm install`
3. Generate Prisma client: `npm run db:generate`
4. Create database tables: `npx prisma migrate dev --name init`
5. Seed demo data: `npm run db:seed`
6. Start: `npm run dev`

Demo admin: `admin` / `ChangeMe123!` — change this immediately in a real deployment.

## Streaming
Use licensed HLS sources. Store video privately and put credentials only on the server. The demo uses a public test stream solely for development. Browser playback cannot guarantee prevention of copying or screen recording.

## Production checklist
- Use a strong `AUTH_SECRET`.
- Change the seeded admin password.
- Put HLS assets behind private object storage/CDN and signed URLs.
- Add your production storage/upload adapter.
- Configure HTTPS, secure cookies, backups, monitoring and rate limits.
- Only publish content for which the shop has online exhibition rights.

## Features
- RTL Persian customer catalog
- Latest releases sorted by publication date
- Iranian/foreign/series sections
- Search
- Movie/series detail pages
- HLS player with download control disabled in the UI
- Protected admin login
- Basic movie creation workflow
- PostgreSQL/Prisma schema for movies, series, seasons, episodes, genres, views and settings
- Fictional seed data only
