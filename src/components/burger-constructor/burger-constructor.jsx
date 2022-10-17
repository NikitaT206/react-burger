import styles from './burger-constructor.module.css'
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { getOrderNumber, setOrderDetails } from '../../services/slices/orderDetailSlice'
import { useDrop } from 'react-dnd'
import {setConstructorIngredients, setCostructorBun} from '../../services/slices/constructorIngredientsSlice'
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
    <section className={`${styles.section} pt-25`}>

      <div className={`${styles.list} pl-4`} ref={dropTarget}>

        {constructorBun ? (
          <div className={`${styles.element} pl-8`} >
            <ConstructorElement
              type='top'
              isLocked={true}
              text={constructorBun.name + ' (верх)'}
              price={constructorBun.price}
              thumbnail={constructorBun.image}
            />
          </div>
        ) : <div className={`${styles.bunPlugTop} text text_type_main-medium`}>Булка</div>}
        
        <div className={`${styles.fillings} pb-4 pt-4`}>
          {constructorIngredients.length ? (
            constructorIngredients.map((item, index) => {
              return <ContructorIngredient item={item} index={index} key={item.key}/>
            })
          ) : <div className={`${styles.ingredientsPlug} text text_type_main-medium`}>Ингредиенты</div>}
        </div>
       
        {constructorBun ? (
          <div className={`${styles.element} pl-8`}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={constructorBun.name + ' (низ)'}
              price={constructorBun.price}
              thumbnail={constructorBun.image}
            />
          </div>
        ) : <div className={`${styles.bunPlugBottom} text text_type_main-medium`}>Булка</div>}
          
      </div>

      <div className={`${styles.order} pt-10`}>
        <div className={`${styles.flexContainer} pr-10`}>
          <p className='text text_type_digits-medium'>{setTotalPrice()}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large" onClick={onMakeOrder}>Оформить заказ</Button>
      </div>

    </section>
  )
}