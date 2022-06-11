import burgerConstructorStyles from './burger-constructor.module.css'
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrderNumber, setConstructorIngredients, setCostructorBun, setOrderDetails, setTotalPrice } from '../../sevrices/slices/mainSlice'
import { useDrop } from 'react-dnd'
import { ContructorIngredient } from '../constructor-ingredient/constructor-ingredient'

export default function BurgerConstructor() {
  const {constructorIngredients, constructorBun, totalPrice} = useSelector(state => state.main)
  const dispatch = useDispatch()
  const onDropHandler = (item) => {
    item.type === 'bun' ?
    dispatch(setCostructorBun(item)) :
    dispatch(setConstructorIngredients([...constructorIngredients, {...item, key: Math.random()}]))
  }

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item)
    }
  })

  function onMakeOrder() {
    if (constructorIngredients.length && constructorBun._id) {
      const ingredientsId = constructorIngredients.map(item => item._id).concat(constructorBun._id)
      dispatch(getOrderNumber(ingredientsId))
      dispatch(setOrderDetails())
    }
  }

  useEffect(() => {
    dispatch(setTotalPrice())
  }, [dispatch, constructorIngredients, constructorBun])

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
            return <ContructorIngredient item={item} index={index} key={index}/>
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
          <p className='text text_type_digits-medium'>{totalPrice + (constructorBun ? constructorBun.price * 2 : 0)}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large" onClick={onMakeOrder}>Оформить заказ</Button>
      </div>

    </section>
  )
}