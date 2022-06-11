import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect, useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-details/order-details'
import { useDispatch, useSelector } from 'react-redux'
import { clearIngredient, setIngredients, setIngredientsList } from '../../sevrices/slices/mainSlice'
import { setIngredient } from '../../sevrices/slices/mainSlice'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const {ingredients, ingredient, orderDetails, ingredientDetails} = useSelector(state => state.main)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIngredients())
  }, [dispatch])

  useEffect(() => {
    if (ingredients) {
      dispatch(setIngredientsList())
    }
  }, [ingredients, dispatch])

  return (
    <div className={appStyles.app}>
      <AppHeader/>

      {ingredients.length > 0 && ( 
        <main className={appStyles.flexContainer}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </DndProvider>

        </main>
      )}
     
      {ingredientDetails && <IngredientDetails />}
      {orderDetails  && <OrderDetails />}
      
    </div>
  )
}

export default App;
