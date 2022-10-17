import mainStyles from './main.module.css'
import { useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'



export function Main() {
  const {ingredients} = useSelector(state => state.ingredients)

  return (
    <>
      {ingredients.length > 0 && ( 
        <main className={mainStyles.flexContainer}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </DndProvider>
        </main>
      )}
    </>
  )
}