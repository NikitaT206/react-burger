import Modal from '../modal/modal'
import ingredientDetailsStyles from './ingredient-details.module.css'
import PropTypes from 'prop-types'
import { ingredientType } from '../../utils/types'
import { IngredientDetail } from '../ingredient-detail/ingredient-detail'

export default function IngredientDetails({onClose, ingredient, }) {
  return (
      <Modal onCloseClick={onClose}>
        <div className={`${ingredientDetailsStyles.container} pt-10 pr-10 pb-15 pl-10`}>
        <h3 className={`${ingredientDetailsStyles.title} text text_type_main-large`}>Детали ингредиента</h3>
        <img className={`${ingredientDetailsStyles.image} pb-4`} alt='aaa' src={ingredient.image}/>
        <p className={`${ingredientDetailsStyles.name} text text_type_main-medium pb-8`}>{ingredient.name}</p>

        <ul className={ingredientDetailsStyles.details}>

          <IngredientDetail title='Калории,ккал' value={ingredient.calories}/>
          <IngredientDetail title='Белки, г' value={ingredient.proteins}/>
          <IngredientDetail title='Жиры, г' value={ingredient.fat}/>
          <IngredientDetail title='Углеводы, г' value={ingredient.carbohydrates}/>

        </ul>
      </div>
      </Modal>
  )
}

IngredientDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  ingredient: ingredientType.isRequired
}

