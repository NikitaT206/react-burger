import React from 'react'
import ingredientStyles from './ingredient.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

export default class Ingredient extends React.Component {

  render() {
    return (
      <li className={`${ingredientStyles.ingredient}`}>

        <div className={`${ingredientStyles.imageContainer} pl-4 pr-4 pb-2`}>
          <img className={ingredientStyles.image} src={this.props.item.image} alt={this.props.item.name}/>
        </div>

        <div className={`${ingredientStyles.priceContainer} pb-2`}>
          <span className='text text_type_digits-default'>{this.props.item.price}</span>
          <CurrencyIcon type='primary'/>
        </div>

        <p className={`${ingredientStyles.ingredientName} text text_type_main-default`}>{this.props.item.name}</p>

        <Counter count={1} size='default'/>

      </li>
    )
  }
}

Ingredient.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired
  })
}