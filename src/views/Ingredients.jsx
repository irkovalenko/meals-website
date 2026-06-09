import { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([])
  const [setIsLoading] = useState(true)
  const [setError] = useState(null)

  const ingredientForLink = (ingredient) => {
  return ingredient.toLowerCase().replace(/\s+/g, '-')
}

  useEffect(() => {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load ingredients')
        }
        return response.json()
      })
      .then((data) => {
        setIngredients(data.meals || [])
      })
      .catch((fetchError) => {
        console.error(fetchError)
        setError('Unable to load ingredients. Please try again later.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <MainLayout>
      <div className="space-y-6">
         {ingredients.length === 0 && <p className="text-center py-8 text-black dark:text-white">No meals found</p>}
                        <div className="grid w-full gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {ingredients.map(ingredient => (
                                <Link key={ingredient.idIngredient} to={`/ingredients/${ingredientForLink(ingredient.strIngredient)}`}>
                                <Card key={ingredient.idIngredient} ingredient={ingredient} />
                                </Link>

                            ))}
                        </div>
      </div>
    </MainLayout>
  )
}
