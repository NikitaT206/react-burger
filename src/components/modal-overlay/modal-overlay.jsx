import modalOverlayStyles from './modal-overlay.module.css'
export default function ModalOverlay(props) {
  return (
    <div className={modalOverlayStyles.overlay} onClick={props.onOverlayClick}>
      {props.children}
    </div>
  )
}