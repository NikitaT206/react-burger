import modalOverlayStyles from './modal-overlay.module.css'
import PropTypes from 'prop-types'

export default function ModalOverlay(props) {
  return (
    <div className={modalOverlayStyles.overlay} onClick={props.onOverlayClick}>
      {props.children}
    </div>
  )
}

ModalOverlay.propTypes = {
  onOverlayClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}



