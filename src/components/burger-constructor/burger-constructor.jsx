import burgerConstructorStyles from './burger-constructor.module.css'
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { getOrderNumber, setOrderDetails } from '../../sevrices/slices/orderDetailSlice'
import { useDrop } from 'react-dnd'
import {setConstructorIngredients, setCostructorBun} from '../../sevrices/slices/constructorIngredientsSlice'
import { ContructorIngredient } from '../constructor-ingredient/constructor-ingredient'
import { v4 as uuidv4 } from 'uuid';

export default function BurgerConstructor() {
  const {constructorIngredients, constructorBun} = useSelector(state => state.burgerConstructor)
  const dispatch = useDispatch()
  const onDropHandler = (item) => {
    item.type === 'bun' ?
    dispatch(setCostructorBun(item)) :
    dispatch(setConstructorIngredients([...constructorIngredients, {...item, key: uuidv4()}]))
  }

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item)
    }
  })

  function onMakeOrder() {
    if (constructorIngredients.length && constructorBun._id) {
      const ingredientsId = constructorIngredients.map(item => item._id)
      const data = [constructorBun._id, ...ingredientsId, constructorBun._id]
      dispatch(getOrderNumber(data))
      dispatch(setOrderDetails())
    }
  }

  const setTotalPrice = useCallback(() => {
    const fillingsPrice = constructorIngredients.length ? constructorIngredients.reduce((a, b) => a + b.price, 0) : 0
    const bunPrice = constructorBun ? constructorBun.price * 2 : 0
   
    return fillingsPrice + bunPrice
  }, [constructorIngredients, constructorBun])

  return (
    <section className={`${burgerConstructorStyles.section} pt-25`}>

      <div className={`${burgerConstructorStyles.list} pl-4`} ref={dropTarget}>

        {constructorBun && (
          <div className={`${burgerConstructorStyles.element} pl-8`} >
            <ConstructorElement
              type='top'
              isLocked={true}
              text={constructorBun.name + ' (верх)'}
              price={constructorBun.price}
              thumbnail={constructorBun.image}
            />
          </div>
        )}
        
        <div className={`${burgerConstructorStyles.fillings} pb-4 pt-4`}>
          {constructorIngredients.map((item, index) => {
            return <ContructorIngredient item={item} index={index} key={item.key}/>
          })
          }
        </div>
       
        {constructorBun && (
          <div className={`${burgerConstructorStyles.element} pl-8`}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={constructorBun.name + ' (низ)'}
              price={constructorBun.price}
              thumbnail={constructorBun.image}
            />
          </div>
        )}
          
      </div>

      <div className={`${burgerConstructorStyles.order} pt-10`}>
        <div className={`${burgerConstructorStyles.flexContainer} pr-10`}>
          <p className='text text_type_digits-medium'>{setTotalPrice()}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large" onClick={onMakeOrder}>Оформить заказ</Button>
      </div>

    </section>
  )
}