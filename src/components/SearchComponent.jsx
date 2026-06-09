import React from 'react'

export default function SearchComponent( { search, setSearch, handleSearch}) {

    const onSearch = (event) => {
        event.preventDefault()
        handleSearch(search)
    }

  return (
    <form  onSubmit={onSearch} className="mb-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
      <label htmlFor="meal-search" className="sr-only">
        Search meals
      </label>
      <input
        id="meal-search"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search meals, recipes, ingredients"
        className="min-w-0 flex-1 rounded-full border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        Search
      </button>
    </form>
  )
}
