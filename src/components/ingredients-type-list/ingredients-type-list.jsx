import React from 'react';
import Ingredient from '../ingredient/ingredient';
import ingredientsTypeListStyles from './ingredients-type-list.module.css'

export default class IngredientsTypeList extends React.Component {
  render() {
    return (
      <li className='pb-10'>
        <h3 className='text text_type_main-medium pb-6'>{this.props.title}</h3>
        <ul className={`${ingredientsTypeListStyles.list} pr-2 pl-4`}>
          {this.props.ingredients.map(item => {
            return <Ingredient item={item} key={item._id}/>
          })}
        </ul>
      </li>
    )
  }
}