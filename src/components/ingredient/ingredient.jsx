import React from 'react'
import ingredientStyles from './ingredient.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default class Ingredient extends React.Component {

  render() {
    return (
      <div className={`${ingredientStyles.ingredient}`}>

        <div className={`${ingredientStyles.imageContainer} pl-4 pr-4 pb-2`}>
          <img className={ingredientStyles.image} src={this.props.item.image} alt={this.props.item.name}/>
        </div>

        <div className={`${ingredientStyles.priceContainer} pb-2`}>
          {/* <span className={ingredientStyles.price}>{this.props.item.price}</span> */}
          <span className={ingredientStyles.price}>{20}</span>
          <CurrencyIcon/>
        </div>

        <p className={ingredientStyles.ingredientName}>{this.props.item.name}</p>

        <Counter count={1} size='default'/>

      </div>
    )
  }
}