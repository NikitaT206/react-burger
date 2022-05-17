import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import modalStyles from './modal.module.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ModalOverlay from '../modal-overlay/modal-overlay'
import ReactDOM from 'react-dom';

export default function Modal({onCloseClick, children}) {

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
        onCloseClick()
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  })

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onOverlayClick={onCloseClick}/>
      <div className={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={modalStyles.closeIconContainer} onClick={onCloseClick}>
          <CloseIcon type="primary"/>
        </div>
      {children}
      </div>
    </>,
    container
  )
}

Modal.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}