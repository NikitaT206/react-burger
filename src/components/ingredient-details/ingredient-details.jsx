import ModalOverlay from '../modal-overlay/modal-overlay'
import Modal from '../modal/modal'
import ingredientDetailsStyles from './ingredient-details.module.css'

export default function IngredientDetails(props) {
  return (
    <ModalOverlay onOverlayClick={props.onClose}>
      <Modal onCloseClick={props.onClose}>
        <div className={`${ingredientDetailsStyles.container} pt-10 pr-10 pb-15 pl-10`}>
        <h3 className={`${ingredientDetailsStyles.title} text text_type_main-large`}>Детали ингредиента</h3>
        <img className={`${ingredientDetailsStyles.image} pb-4`} alt='aaa' src={props.ingredient.image}/>
        <p className={`${ingredientDetailsStyles.name} text text_type_main-medium pb-8`}>{props.ingredient.name}</p>

        <div className={ingredientDetailsStyles.details}>

          <div className={`${ingredientDetailsStyles.detail} pr-5`}>
            <p className={`${ingredientDetailsStyles.detailText} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
            <p className={`${ingredientDetailsStyles.detailDigits} text text_type_digits-default`}>{props.ingredient.calories}</p>
          </div>

          <div className={`${ingredientDetailsStyles.detail} pr-5`}>
            <p className={`${ingredientDetailsStyles.detailText} text text_type_main-default text_color_inactive`}>Белки, г</p>
            <p className={`${ingredientDetailsStyles.detailDigits} text text_type_digits-default`}>{props.ingredient.proteins}</p>
          </div>

          <div className={`${ingredientDetailsStyles.detail} pr-5`}>
            <p className={`${ingredientDetailsStyles.detailText} text text_type_main-default text_color_inactive`}>Жиры, г</p>
            <p className={`${ingredientDetailsStyles.detailDigits} text text_type_digits-default`}>{props.ingredient.fat}</p>
          </div>

          <div className={`${ingredientDetailsStyles.detail}`}>
            <p className={`${ingredientDetailsStyles.detailText} text text_type_main-default text_color_inactive`}>Углеводы, г</p>
            <p className={`${ingredientDetailsStyles.detailDigits} text text_type_digits-default`}>{props.ingredient.carbohydrates}</p>
          </div>
        
        </div>
      </div>
      </Modal>
    </ModalOverlay>
    
  )
}