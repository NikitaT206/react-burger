import Ingredient from '../ingredient/ingredient'
import ingredientsTypeListStyles from './ingredients-type-list.module.css'
import PropTypes from 'prop-types'
import { ingredientType } from '../../utils/types'

export default function IngredientsTypeList({title, ingredients, onIngredientClick}) {
  return (
    <li className={`${ingredientsTypeListStyles.listItem} pb-10`}>
      <h3 className='text text_type_main-medium pb-6'>{title}</h3>
      <ul className={`${ingredientsTypeListStyles.list} pr-2 pl-4`}>
        {ingredients.map(item => {
          return <Ingredient item={item} key={item._id} onIngredientClick={onIngredientClick}/>
        })}
      </ul>
    </li>
  )
}

IngredientsTypeList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
  title: PropTypes.string.isRequired,
  onIngredientClick: PropTypes.func.isRequired
}