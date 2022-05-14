import React from 'react'
import IngredientsList from '../ingredients-list/ingredients-list'
import Tabs from '../tabs/tabs'
import burgerIngredientsStyles from './burger-ingredients.module.css'

export default class BurgerIngredients extends React.Component {
 
  render() {
    
    return (
      <section className={`${burgerIngredientsStyles.section} pt-10 mr-10`}>
        <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
        <Tabs/>
        <IngredientsList/>
      </section>
    )
  }
}