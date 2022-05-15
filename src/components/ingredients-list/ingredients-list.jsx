import ingredientsListStyles from './ingredients-list.module.css'
import { data } from '../../utils/data'
import IngredientsTypeList from '../ingredients-type-list/ingredients-type-list'

const buns = data.filter(item => item.type === 'bun')
const sauces = data.filter(item => item.type === 'sauce')
const mains = data.filter(item => item.type === 'main')

export default function IngredientsList() {
  return (
    <ul className={ingredientsListStyles.list}>
      <IngredientsTypeList title='Булки' ingredients={buns}/>
      <IngredientsTypeList title='Соусы' ingredients={sauces}/>
      <IngredientsTypeList title='Начинки' ingredients={mains}/>
    </ul>
  )
}