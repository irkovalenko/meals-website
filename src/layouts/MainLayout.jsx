import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout({children}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <section className="w-full">{children}</section>
      </main>

      <Footer />
    </div>
  )
}
