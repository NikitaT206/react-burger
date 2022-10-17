import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-details.module.css'
import Modal from '../modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { closeOrderDetails } from '../../services/slices/orderDetailSlice'

export default function OrderDetails() {
  const dispatch = useDispatch()
  const {orderNumber} = useSelector(state => state.orderDetail)
  return (
      <Modal onClose={() => dispatch(closeOrderDetails())}>
        <div className={`${styles.container} pt-30 pb-30`}>
        <p className={`${styles.digits} text text_type_digits-large pb-8`}>{orderNumber}</p>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <div className={`${styles.iconContainer} mb-15`}>
          <CheckMarkIcon type="primary"/>
        </div>
        <p className='text text_type_main-default pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
      </div>
      </Modal>
  )
}

