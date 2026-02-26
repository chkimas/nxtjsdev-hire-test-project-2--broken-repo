import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "A simple user dashboard built with Next.js and Tailwind CSS."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8">
          <header className="mb-8 border-b border-slate-800 pb-4">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
              User Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Browse users and view basic profile details.
            </p>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}

