import ingredientsListStyles from './ingredients-list.module.css'
import IngredientsTypeList from '../ingredients-type-list/ingredients-type-list'
import { useSelector } from 'react-redux'

export default function IngredientsList() {
  const {buns, sauces, mains} = useSelector(state => state.main)
 
  return (
    <ul className={ingredientsListStyles.list}>
      <IngredientsTypeList title='Булки' ingredients={buns} id='buns'/>
      <IngredientsTypeList title='Соусы' ingredients={sauces} id='sauces'/>
      <IngredientsTypeList title='Начинки' ingredients={mains} id='mains'/>
    </ul>
  )
}