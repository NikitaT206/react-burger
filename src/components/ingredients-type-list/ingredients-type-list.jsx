import React from 'react';
import Ingredient from '../ingredient/ingredient';
import ingredientsTypeListStyles from './ingredients-type-list.module.css'

export default class IngredientsTypeList extends React.Component {
  render() {
    return (
      <ul className={ingredientsTypeListStyles.list}>
        <li className={`${ingredientsTypeListStyles.listItem} pb-10`}>
          <h3 className={`${ingredientsTypeListStyles.title} pb-6`}>{this.props.title}</h3>
          <div className={`${ingredientsTypeListStyles.flexContainer} pr-2 pl-4`}>
            {this.props.ingredients.map(item => {
              return <Ingredient item={item} key={item._id}/>
            })}
          </div>
         
        </li>
      </ul>
    )
  }
}