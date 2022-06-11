import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import orderDetailsStyles from './order-details.module.css'
import Modal from '../modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../sevrices/slices/mainSlice'

export default function OrderDetails() {
  const dispatch = useDispatch()
  const {orderNumber} = useSelector(state => state.main)
  return (
      <Modal onCloseClick={() => dispatch(closeModal())}>
        <div className={`${orderDetailsStyles.container} pt-30 pb-30`}>
        <p className={`${orderDetailsStyles.digits} text text_type_digits-large pb-8`}>{orderNumber}</p>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <div className={`${orderDetailsStyles.iconContainer} mb-15`}>
          <CheckMarkIcon type="primary"/>
        </div>
        <p className='text text_type_main-default pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
      </div>
      </Modal>
  )
}

