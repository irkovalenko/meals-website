import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Recipe from '../components/Recipe'
import MainLayout from '../layouts/MainLayout'

const slugToMealName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function MealPage() {
  const { meal: mealSlug } = useParams()
  const mealName = mealSlug ? slugToMealName(mealSlug) : ''
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!mealName) {
      return
    }

    const fetchMeals = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(mealName)}`
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to load meal detail page.')
        }

        const data = await response.json()
        setMeals(data.meals || [])
      } catch (fetchError) {
        console.error('Error fetching meals:', fetchError)
        setError('Unable to load meal page.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMeals()
  }, [mealName])

  return (
    <MainLayout>
      <div className="space-y-6">

        {isLoading && <p className="text-center py-8 text-slate-600">Loading page...</p>}
        {!isLoading && error && <p className="text-center py-8 text-red-600">{error}</p>}
        {!isLoading && !error && meals.length === 0 && (
          <p className="text-center py-8 text-slate-600">No details.</p>
        )}
        {!isLoading && !error && meals.length > 0 && (
          <div className="grid w-full">
            {meals.map((meal) => (
              <Recipe key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  )
}
 
