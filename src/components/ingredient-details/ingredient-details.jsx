import Modal from '../modal/modal'
import ingredientDetailsStyles from './ingredient-details.module.css'
import { IngredientDetail } from '../ingredient-detail/ingredient-detail'
import { useDispatch, useSelector } from 'react-redux'
import { clearIngredient, closeIngredientDetails } from '../../sevrices/slices/ingredientDetailSlice'

export default function IngredientDetails() {
  const dispatch = useDispatch()
  const {ingredient} = useSelector(state => state.ingredientDetail)

  function onCLoseHandler() {
    dispatch(clearIngredient())
    dispatch(closeIngredientDetails())
  }

  return (
      <Modal onClose={onCLoseHandler}>
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

