import burgerConstructorStyles from './burger-constructor.module.css'
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientType } from '../../utils/types'
import PropTypes from 'prop-types'

export default function BurgerConstructor({bun, fillings, totalPrice, onMakeOrder}) {

  return (
    <section className={`${burgerConstructorStyles.section} pt-25`}>

      <div className={`${burgerConstructorStyles.list} pl-4`}>

        {bun && (
          <div className={`${burgerConstructorStyles.element} pl-8`}>
          <ConstructorElement
            type='top'
            isLocked={true}
            text={bun.name + ' (верх)'}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        )}
        
        <div className={`${burgerConstructorStyles.fillings} pb-4 pt-4`}>
          {fillings.map((item) => {
            return (
              <div className={burgerConstructorStyles.flexContainer} key={item._id}>
                <div className={burgerConstructorStyles.icon}>
                  <DragIcon type='primary'/>
                </div>
                  
                <ConstructorElement 
                  isLocked={false}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            )})
          }
        </div>
       
        {bun && (
          <div className={`${burgerConstructorStyles.element} pl-8`}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={bun.name + ' (низ)'}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
        
          
      </div>

      <div className={`${burgerConstructorStyles.order} pt-10`}>
        <div className={`${burgerConstructorStyles.flexContainer} pr-10`}>
          <p className='text text_type_digits-medium'>{totalPrice}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large" onClick={onMakeOrder}>Оформить заказ</Button>
      </div>

    </section>
  )
}

BurgerConstructor.propTypes = {
  bun: ingredientType,
  fillings: PropTypes.arrayOf(ingredientType),
  totalPrice: PropTypes.number.isRequired,
  onMakeOrder: PropTypes.func.isRequired
}