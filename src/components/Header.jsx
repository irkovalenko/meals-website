import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-400">Meal Search</p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Discover recipes for every craving</h1>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
          <NavLink to="/" className={ ( {isActive}) => isActive ? 'text-indigo-600 p-2' : 'text-white p-2' }>Home</NavLink>
          <NavLink to="/ingredients" className={ ( {isActive}) => isActive ? 'text-indigo-600 p-2' : 'text-white p-2' }>Ingredients</NavLink>
          
        </nav>
      </div>
    </header>
  )
}
