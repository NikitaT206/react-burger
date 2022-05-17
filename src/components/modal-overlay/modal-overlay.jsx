import modalOverlayStyles from './modal-overlay.module.css'
import PropTypes from 'prop-types'

export default function ModalOverlay({onOverlayClick}) {
  return (
    <div className={modalOverlayStyles.overlay} onClick={onOverlayClick}/>
  )
}

ModalOverlay.propTypes = {
  onOverlayClick: PropTypes.func.isRequired,
}



