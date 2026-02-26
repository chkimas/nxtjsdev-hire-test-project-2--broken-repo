## User Dashboard

User Dashboard is a small Next.js application built with TypeScript and Tailwind CSS. It provides a simple interface for browsing a list of users and viewing basic details for each user.

The app is designed to resemble an internal admin or team dashboard where you can quickly scan who is on the team and see lightweight profile information.

### Features

- **User list**: A dashboard-style index page that fetches and displays a list of users in a responsive card grid.
- **User detail view**: A dedicated detail page at `/users/[id]` where you can see more information for a specific user.
- **Profile display name**: A simple form on the detail page that lets you adjust the display name for a user, stored in local React state.

All user information is provided via mock data and there is no backing database. The API routes simply return hardcoded JSON for demonstration purposes.

### Tech stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS

### Getting started

1. **Install dependencies**

   From the project root:

   ```bash
   npm install
   ```

2. **Environment variables**

   Copy `.env.example` to `.env.local` and adjust values as needed:

   ```bash
   cp .env.example .env.local
   ```

   The app uses a public API base URL for client-side requests:

   - `NEXT_PUBLIC_API_BASE_URL`: Base URL for API requests (for local development this can typically be `http://localhost:3000`).

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Then open `http://localhost:3000` in your browser.

4. **Build for production**

   To create an optimized production build:

   ```bash
   npm run build
   ```

   And to run the production server:

   ```bash
   npm start
   ```

### Project structure

- `app/` – Next.js app router entry, layouts, and pages.
  - `page.tsx` – Dashboard index page that loads and displays the list of users.
  - `users/[id]/page.tsx` – User detail view for a specific user.
  - `api/users/route.ts` – API route serving the list of users.
- `lib/users.ts` – Shared mock user data and helpers for retrieving individual users.
- `app/globals.css` – Global Tailwind and base styles.

This repository is intended as a compact example of a modern Next.js dashboard-style application using TypeScript and Tailwind CSS.

