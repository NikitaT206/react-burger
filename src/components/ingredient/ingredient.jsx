import ingredientStyles from './ingredient.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientType } from '../../utils/types'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { setIngredient, setIngredientDetails } from '../../sevrices/slices/mainSlice'
import { useDrag } from 'react-dnd'
import { useEffect, useState } from 'react'

export default function Ingredient({item}) {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const {constructorIngredients} = useSelector(state => state.main)
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
  })

  function onClickHandler() {
    dispatch(setIngredient(item))
    dispatch(setIngredientDetails())
  }

  function counterHandler() {
    const filtered = constructorIngredients.filter(i => i.name === item.name)
    setCount(filtered.length)
  }

  useEffect(() => {
    counterHandler()
  }, [constructorIngredients])
  
  return (
    
    <li className={`${ingredientStyles.ingredient}`} onClick={onClickHandler} ref={dragRef} draggable>

      <div className={`${ingredientStyles.imageContainer} pl-4 pr-4 pb-2`}>
        <img className={ingredientStyles.image} src={item.image} alt={item.name}/>
      </div>

      <div className={`${ingredientStyles.priceContainer} pb-2`}>
        <span className='text text_type_digits-default'>{item.price}</span>
        <CurrencyIcon type='primary'/>
      </div>

      <p className={`${ingredientStyles.ingredientName} text text_type_main-default`}>{item.name}</p>

      {count > 0 && <Counter count={count} size='default'/>}

    </li>
  )
}

Ingredient.propTypes = {
  item: ingredientType.isRequired,
}