import React from 'react';
import ingredientsListStyles from './ingredients-list.module.css'
import { data } from '../../utils/data';
import IngredientsTypeList from '../ingredients-type-list/ingredients-type-list';

const buns = data.filter(item => item.type === 'bun')
const sauces = data.filter(item => item.type === 'sauce')
const mains = data.filter(item => item.type === 'main')

export default class IngredientsList extends React.Component {
  render() {
    return (
      <ul className={ingredientsListStyles.list}>
        <li>
         <IngredientsTypeList title='Булки' ingredients={buns}/>
        </li>
        <li>
         <IngredientsTypeList title='Соусы' ingredients={sauces}/>
        </li>
        <li>
         <IngredientsTypeList title='Начинки' ingredients={mains}/>
        </li>
      </ul>
    )
  }
}