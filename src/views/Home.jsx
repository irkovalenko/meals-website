import {useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import SearchComponent from '../components/SearchComponent'
import MealCard from '../components/MealCard'
import { Link } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function Home() {
    const [search, setSearch] = useState('')
        const [meals, setMeals] = useState([])
        const mealForLink = (meal) => {
  return meal.toLowerCase().replace(/\s+/g, '-')
}
    
        useEffect(() => {
            const fetchRandomMeals = async () => {
                try {
                    const promises = Array.from({ length: 10 }, () =>
                        fetch('https://www.themealdb.com/api/json/v2/1/randomselection.php').then(r => r.json())
                    );
                    const results = await Promise.all(promises);
                    const randomMeals = results.flatMap(r => r.meals || []);
                    setMeals(randomMeals);
                } catch (error) {
                    console.error('Error fetching random meals:', error);
                }
            };
            fetchRandomMeals();
        }, []);
    
        const handleSearch = async (query) => {
            try {
                const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
                const response = await fetch(url);
                const data = await response.json();
                setMeals(data.meals || []);
            } catch (error) {
                console.error('Error fetching meals:', error)
            }
        };
  return (
     <MainLayout>
                <div className="mb-8 w-full">
                    <SearchComponent search={search} setSearch={setSearch} handleSearch={handleSearch} />
                </div>
                {meals.length === 0 && <p className="text-center py-8 text-black dark:text-white">No meals found</p>}
                <div className="grid w-full gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {meals.map(meal => (
                        <Link key={meal.idMeal} to={`/${mealForLink(meal.strMeal)}`}>
                        <MealCard key={meal.idMeal} meal={meal} />
                        </Link>
                    ))}
                </div>
            </MainLayout>
  )
}
