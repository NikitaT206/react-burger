import React from 'react'
import Ingredient from '../ingredient/ingredient'
import ingredientsTypeListStyles from './ingredients-type-list.module.css'
import PropTypes from 'prop-types'

export default class IngredientsTypeList extends React.Component {
  render() {
    return (
      <li className={`${ingredientsTypeListStyles.listItem} pb-10`}>
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

IngredientsTypeList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  title: PropTypes.string.isRequired
}