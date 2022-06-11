import Tabs from '../tabs/tabs'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import IngredientsTypeList from '../ingredients-type-list/ingredients-type-list'

export default function BurgerIngredients() {
  const {buns, sauces, mains} = useSelector(state => state.ingredients)
  const bunsRef = useRef()
  const saucesRef = useRef()
  const mainsRef = useRef()
  return (
    <section className={`${burgerIngredientsStyles.section} pt-10 mr-10`}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <Tabs bunsRef={bunsRef} saucesRef={saucesRef} mainsRef={mainsRef}/>
      <ul className={burgerIngredientsStyles.list}>
        <IngredientsTypeList currentRef={bunsRef} title='Булки' ingredients={buns} id='buns'/>
        <IngredientsTypeList currentRef={saucesRef} title='Соусы' ingredients={sauces} id='sauces'/>
        <IngredientsTypeList currentRef={mainsRef}title='Начинки' ingredients={mains} id='mains'/>
      </ul>
    </section>
  )
}