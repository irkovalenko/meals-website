import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MealCard from '../components/MealCard'
import MainLayout from '../layouts/MainLayout'

// Helper function to convert URL slug back to ingredient name
const slugToIngredient = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function MealsByIngredient() {
  const { ingredient: ingredientSlug } = useParams()
  const ingredient = slugToIngredient(ingredientSlug)
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!ingredient) {
      return
    }

    const fetchMeals = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to load meals for ingredient.')
        }

        const data = await response.json()
        setMeals(data.meals || [])
      } catch (fetchError) {
        console.error('Error fetching meals:', fetchError)
        setError('Unable to load meals for this ingredient.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMeals()
  }, [ingredient])

  const mealForLink = (meal) => {
  return meal.toLowerCase().replace(/\s+/g, '-')
}

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="rounded-4xl bg-white p-6 shadow-sm border border-slate-200">
          <h2 className="text-3xl font-semibold text-slate-900">Meals with {ingredient}</h2>
          <p className="mt-2 text-slate-600">Showing meals that include the selected ingredient.</p>
        </div>

        {isLoading && <p className="text-center py-8 text-slate-600">Loading meals...</p>}
        {!isLoading && error && <p className="text-center py-8 text-red-600">{error}</p>}
        {!isLoading && !error && meals.length === 0 && (
          <p className="text-center py-8 text-slate-600">No meals found for this ingredient.</p>
        )}
        {!isLoading && !error && meals.length > 0 && (
          <div className="grid w-full gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {meals.map((meal) => (
              <Link key={meal.idMeal} to={`/${mealForLink(meal.strMeal)}`}>
              <MealCard key={meal.idMeal} meal={meal} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  )
}
 
