export default function Card({ingredient}) {
    return (
        <div className="overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-[0_40px_120px_-30px_rgba(15,23,42,0.25)] border border-slate-200 dark:border-slate-700">
      <div className="px-6 py-8 sm:px-8">
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {ingredient.strIngredient}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          {ingredient.strDescription?.slice(0,100)}...
        </p>
      </div>
    </div>
    )
}