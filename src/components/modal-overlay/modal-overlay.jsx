import modalOverlayStyles from './modal-overlay.module.css'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../sevrices/slices/mainSlice'

export default function ModalOverlay() {
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeModal())
  }
  return (
    <div className={modalOverlayStyles.overlay} onClick={handleClose}/>
  )
}



