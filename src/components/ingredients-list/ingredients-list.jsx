import ingredientsListStyles from './ingredients-list.module.css'
import IngredientsTypeList from '../ingredients-type-list/ingredients-type-list'
import PropTypes from 'prop-types'
import { ingredientType } from '../../utils/types'

export default function IngredientsList(props) {
  return (
    <ul className={ingredientsListStyles.list}>
      <IngredientsTypeList title='Булки' ingredients={props.buns} onIngredientClick={props.onIngredientClick}/>
      <IngredientsTypeList title='Соусы' ingredients={props.sauces} onIngredientClick={props.onIngredientClick}/>
      <IngredientsTypeList title='Начинки' ingredients={props.mains} onIngredientClick={props.onIngredientClick}/>
    </ul>
  )
}

IngredientsList.propTypes = {
  buns: PropTypes.arrayOf(ingredientType).isRequired,
  sauces: PropTypes.arrayOf(ingredientType).isRequired,
  mains: PropTypes.arrayOf(ingredientType).isRequired,
  onIngredientClick: PropTypes.func.isRequired
}