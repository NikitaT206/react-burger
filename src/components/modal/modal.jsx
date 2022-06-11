import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import modalStyles from './modal.module.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ModalOverlay from '../modal-overlay/modal-overlay'
import ReactDOM from 'react-dom';

export default function Modal({onClose, children}) {

  const [container] = useState(() => {
    const element = document.createElement('div')
    return element
  })

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  })


  useEffect(() => {
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  })

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose}/>
      <div className={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={modalStyles.closeIconContainer} onClick={onClose}>
          <CloseIcon type="primary"/>
        </div>
      {children}
      </div>
    </>,
    container
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}