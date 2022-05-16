import ingredientStyles from './ingredient.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientType } from '../../utils/types'

export default function Ingredient(props) {

  function onClickHandler() {
    props.onIngredientClick(props.item)
  }
  
  return (
    <li className={`${ingredientStyles.ingredient}`} onClick={onClickHandler}>

      <div className={`${ingredientStyles.imageContainer} pl-4 pr-4 pb-2`}>
        <img className={ingredientStyles.image} src={props.item.image} alt={props.item.name}/>
      </div>

      <div className={`${ingredientStyles.priceContainer} pb-2`}>
        <span className='text text_type_digits-default'>{props.item.price}</span>
        <CurrencyIcon type='primary'/>
      </div>

      <p className={`${ingredientStyles.ingredientName} text text_type_main-default`}>{props.item.name}</p>

      <Counter count={1} size='default'/>

    </li>
  )
}

Ingredient.propTypes = {
  item: ingredientType
}