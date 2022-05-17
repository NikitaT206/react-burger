import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import modalStyles from './modal.module.css'
import PropTypes from 'prop-types'

export default function Modal(props) {
  return (
    <div className={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
      <div className={modalStyles.closeIconContainer} onClick={props.onCloseClick}>
        <CloseIcon type="primary"/>
      </div>
      {props.children}
    </div>
  )
}

Modal.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}