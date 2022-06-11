import modalOverlayStyles from './modal-overlay.module.css'

export default function ModalOverlay({onClose}) {
  return (
    <div className={modalOverlayStyles.overlay} onClick={onClose}/>
  )
}



