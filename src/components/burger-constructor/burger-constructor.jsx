import burgerConstructorStyles from './burger-constructor.module.css'
import { data } from '../../utils/data'
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const buns = data.filter(item => item.type === 'bun')
const fillings = data.filter(item => item.type !== 'bun')
const totalPrice = buns[0].price + fillings.reduce((a, b) => a + b.price, 0)

export default function BurgerConstructor() {
  return (
    <section className={`${burgerConstructorStyles.section} pt-25`}>

      <div className={`${burgerConstructorStyles.list} pl-4`}>

        <div className={`${burgerConstructorStyles.element} pl-8`}>
          <ConstructorElement
            type='top'
            isLocked={true}
            text={buns[0].name + ' (верх)'}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </div>
        
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
       

        <div className={`${burgerConstructorStyles.element} pl-8`}>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={buns[0].name + ' (низ)'}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </div>
          
      </div>

      <div className={`${burgerConstructorStyles.order} pt-10`}>
        <div className={`${burgerConstructorStyles.flexContainer} pr-10`}>
          <p className='text text_type_digits-medium'>{totalPrice}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large">Оформить заказ</Button>
      </div>

    </section>
  )
}