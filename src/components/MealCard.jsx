export default function MealCard({meal}) {
    return (
        <div className="overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-[0_40px_120px_-30px_rgba(15,23,42,0.25)] border border-slate-200 dark:border-slate-700">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="h-72 w-full object-cover"
      />
      <div className="px-6 py-8 sm:px-8">
        {meal.strCategory && (
        <span className="inline-flex rounded-full bg-emerald-100 dark:bg-emerald-900 px-3 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          {meal.strCategory}
        </span>
    )}
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {meal.strMeal}
        </h1>
        {meal.strInstructions && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          {meal.strInstructions?.slice(0,100)}...
        </p>
        )}
      </div>
    </div>
    )
}