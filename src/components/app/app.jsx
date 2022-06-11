import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-details/order-details'
import { useDispatch, useSelector } from 'react-redux'
import { setIngredients, setIngredientsList } from '../../sevrices/slices/ingredientsSlice'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const {ingredients} = useSelector(state => state.ingredients)
  const {orderDetails} = useSelector(state => state.orderDetail)
  const {ingredientDetails} = useSelector(state => state.ingredientDetail)

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
