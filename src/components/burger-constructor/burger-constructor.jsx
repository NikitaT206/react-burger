import burgerConstructorStyles from './burger-constructor.module.css'
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor(props) {
  const bun = props.bun

  return (
    <section className={`${burgerConstructorStyles.section} pt-25`}>

      <div className={`${burgerConstructorStyles.list} pl-4`}>

        {props.bun && (
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
          {props.fillings.map((item) => {
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
       
        {props.bun && (
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
          <p className='text text_type_digits-medium'>{props.totalPrice}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large" onClick={props.onMakeOrder}>Оформить заказ</Button>
      </div>

    </section>
  )
}