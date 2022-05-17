import ingredientStyles from './ingredient.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientType } from '../../utils/types'
import PropTypes from 'prop-types'

export default function Ingredient({item, onIngredientClick}) {

  function onClickHandler() {
    onIngredientClick(item)
  }
  
  return (
    <li className={`${ingredientStyles.ingredient}`} onClick={onClickHandler}>

      <div className={`${ingredientStyles.imageContainer} pl-4 pr-4 pb-2`}>
        <img className={ingredientStyles.image} src={item.image} alt={item.name}/>
      </div>

      <div className={`${ingredientStyles.priceContainer} pb-2`}>
        <span className='text text_type_digits-default'>{item.price}</span>
        <CurrencyIcon type='primary'/>
      </div>

      <p className={`${ingredientStyles.ingredientName} text text_type_main-default`}>{item.name}</p>

      <Counter count={1} size='default'/>

    </li>
  )
}

Ingredient.propTypes = {
  item: ingredientType.isRequired,
  onIngredientClick: PropTypes.func.isRequired
}