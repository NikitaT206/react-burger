import ingredientsListStyles from './ingredients-list.module.css'
import IngredientsTypeList from '../ingredients-type-list/ingredients-type-list'
import PropTypes from 'prop-types'
import { ingredientType } from '../../utils/types'

export default function IngredientsList({buns, sauces, mains, onIngredientClick}) {
  return (
    <ul className={ingredientsListStyles.list}>
      <IngredientsTypeList title='Булки' ingredients={buns} onIngredientClick={onIngredientClick}/>
      <IngredientsTypeList title='Соусы' ingredients={sauces} onIngredientClick={onIngredientClick}/>
      <IngredientsTypeList title='Начинки' ingredients={mains} onIngredientClick={onIngredientClick}/>
    </ul>
  )
}

IngredientsList.propTypes = {
  buns: PropTypes.arrayOf(ingredientType).isRequired,
  sauces: PropTypes.arrayOf(ingredientType).isRequired,
  mains: PropTypes.arrayOf(ingredientType).isRequired,
  onIngredientClick: PropTypes.func.isRequired
}