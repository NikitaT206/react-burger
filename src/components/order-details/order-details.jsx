import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'
import orderDetailsStyles from './order-details.module.css'
import Modal from '../modal/modal'
import PropTypes from 'prop-types'

export default function OrderDetails(props) {
  return (
    <ModalOverlay onOverlayClick={props.onClose}>
      <Modal onCloseClick={props.onClose}>
        <div className={`${orderDetailsStyles.container} pt-30 pb-30`}>
        <p className={`${orderDetailsStyles.digits} text text_type_digits-large pb-8`}>034536</p>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <div className={`${orderDetailsStyles.iconContainer} mb-15`}>
          <CheckMarkIcon type="primary"/>
        </div>
        <p className='text text_type_main-default pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
      </div>
      </Modal>
    </ModalOverlay>
  )
}

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired
}

