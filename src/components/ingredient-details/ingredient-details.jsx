import styles from './ingredient-details.module.css'
import Modal from '../modal/modal'
import { IngredientDetail } from '../ingredient-detail/ingredient-detail'
import { useDispatch, useSelector } from 'react-redux'
import { setIngredient } from '../../services/slices/ingredientDetailSlice'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function IngredientDetails() {
  const dispatch = useDispatch()
  const {ingredient} = useSelector(state => state.ingredientDetail)
  const {ingredients} = useSelector(state => state.ingredients)
  const history = useHistory()

  useEffect(() => {
    const ingredientId = history.location.pathname.replace('/ingredient/', '')
    if (ingredients.length) {
      const find = ingredients.find(item => item._id === ingredientId)
      dispatch(setIngredient(find))
    }
   
  }, [ingredients])

  return (
    // <Modal onClose={onCLoseHandler}>
      <div className={`${styles.container} pt-10 pr-10 pb-15 pl-10`}>
        <h3 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h3>
        <img className={`${styles.image} pb-4`} alt='aaa' src={ingredient.image}/>
        <p className={`${styles.name} text text_type_main-medium pb-8`}>{ingredient.name}</p>

        <ul className={styles.details}>

          <IngredientDetail title='Калории,ккал' value={ingredient.calories}/>
          <IngredientDetail title='Белки, г' value={ingredient.proteins}/>
          <IngredientDetail title='Жиры, г' value={ingredient.fat}/>
          <IngredientDetail title='Углеводы, г' value={ingredient.carbohydrates}/>

        </ul>
      </div>
    // </Modal>
  )
}

