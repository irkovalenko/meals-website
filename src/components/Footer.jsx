import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-slate-700">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Meal Search. Crafted with Tailwind CSS.</p>
        <p className="text-slate-500">Browse meals, save favorites, and get inspired.</p>
      </div>
    </footer>
  )
}
