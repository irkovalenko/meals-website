export default function Recipe({meal}) {
    return (
        <div className="overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-[0_40px_120px_-30px_rgba(15,23,42,0.25)] border border-slate-200 dark:border-slate-700">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="h-72 w-full object-cover"
      />
      <div className="px-6 py-8 sm:px-8">
        <span className="inline-flex rounded-full bg-emerald-100 dark:bg-emerald-900 px-3 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          {meal.strCategory}
        </span>
        <span className="ml-2 inline-flex rounded-full bg-emerald-100 dark:bg-orange-900 px-3 py-1 text-sm font-semibold text-orange-700 dark:text-orange-300">
          {meal.strCountry}
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {meal.strMeal}
        </h1>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Ingredients</h2>
          <ul className="mt-4 space-y-2">
            {(() => {
              const ingredients = []
              for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`]
                const measure = meal[`strMeasure${i}`]
                if (ingredient && ingredient.trim()) {
                  ingredients.push({ name: ingredient, measure: measure || '' })
                }
              }
              return ingredients.map((ingredient, index) => (
                <li key={index} className="text-base text-slate-600 dark:text-slate-400">
                  <span className="font-semibold">{ingredient.measure}</span> {ingredient.name}
                </li>
              ))
            })()}
          </ul>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Instructions</h2>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          {meal.strInstructions}
        </p>
      </div>
    </div>
    )
}