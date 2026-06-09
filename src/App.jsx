import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Ingredients from "./views/Ingredients"
import MealsByInredients from "./views/MealsByIngredient"
import MealPage from "./views/MealPage"

function App() {
    

    return (
       <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/ingredients" element={<Ingredients />}/>
        <Route path = "/ingredients/:ingredient" element={<MealsByInredients />}/>
        <Route path = "/:meal" element={<MealPage />}/>
       </Routes>
    )
}

export default App