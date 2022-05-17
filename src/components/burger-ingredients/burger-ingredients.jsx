import IngredientsList from '../ingredients-list/ingredients-list'
import Tabs from '../tabs/tabs'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import PropTypes from 'prop-types'
import { ingredientType } from '../../utils/types'

export default function BurgerIngredients(props) {
  return (
    <section className={`${burgerIngredientsStyles.section} pt-10 mr-10`}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <Tabs/>
      <IngredientsList 
        buns={props.buns}
        sauces={props.sauces} 
        mains={props.mains} 
        onIngredientClick={props.onIngredientClick}
      />
    </section>
  )
}

BurgerIngredients.propTypes = {
  buns: PropTypes.arrayOf(ingredientType).isRequired,
  sauces: PropTypes.arrayOf(ingredientType).isRequired,
  mains: PropTypes.arrayOf(ingredientType).isRequired,
  onIngredientClick: PropTypes.func.isRequired
}