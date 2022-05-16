import modalOverlayStyles from './modal-overlay.module.css'
import { useEffect, useState } from 'react'
import ReactDOM from "react-dom" 

export default function ModalOverlay(props) {
  const [container] = useState(() => {
    const element = document.createElement('div')
    element.classList.add(`${modalOverlayStyles.overlay}`)
    return element
  })

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  })

  return (
    ReactDOM.createPortal(
      (
        <div className={modalOverlayStyles.overlay} onClick={props.onOverlayClick}>
          {props.children}
        </div>
      ),
      container
    )
  )
}



