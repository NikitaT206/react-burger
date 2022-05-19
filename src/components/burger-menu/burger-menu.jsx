import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useState } from 'react'
import burgerMenuStyles from './burger-menu.module.css'

export default function BurgerMenu({burgerMenuOpen}) {
  const [showPersonal, setShowPersonal] = useState(false)
  const burgerMenuClass = burgerMenuOpen ? burgerMenuStyles.burgerMenu : burgerMenuStyles.burgerMenuHide
  const personalLinksClass = showPersonal ? burgerMenuStyles.personalLinks : burgerMenuStyles.personalLinksHide
  const linkArrowClass = showPersonal ? burgerMenuStyles.linkArrow : burgerMenuStyles.linkArrowRotate

  function tooglePersonalList(e) {
    stopPropagation(e)
    setShowPersonal(!showPersonal)
  }

  function stopPropagation(e) {
    e.stopPropagation()
  }

  useEffect(() => {
    if (!burgerMenuOpen) {
      setShowPersonal(false)
    }
  }, [burgerMenuOpen])

  return (
    <div 
      className={burgerMenuClass} 
      onClick={() => setShowPersonal(false)}
    >

      <h2 className={`${burgerMenuStyles.title} text text_type_main-large`}>Меню</h2>

      <nav className={burgerMenuStyles.links}>

        <div className={burgerMenuStyles.personalLink} >

          <div className={burgerMenuStyles.link} onClick={tooglePersonalList}>
            <ProfileIcon/>
            <p className={`${burgerMenuStyles.linkText} text text_type_main-default`}>Личный кабинет</p>
            <div className={linkArrowClass}></div>
          </div>
         
          <nav className={personalLinksClass} onClick={stopPropagation}>
            <a href='.#' className={`${burgerMenuStyles.personalListLink} text text_type_main-default`}>Профиль</a>
            <a href='.#' className={`${burgerMenuStyles.personalListLink} text text_type_main-default`}>История заказов</a>
            <a href='.#' className={`${burgerMenuStyles.personalListLink} text text_type_main-default`}>Выход</a>
          </nav>

        </div>

        <a className={burgerMenuStyles.link} href='.#'>
          <BurgerIcon/>
          <p className={`${burgerMenuStyles.linkText} text text_type_main-default`}>Конструктор бургеров</p>
        </a>

        <a className={burgerMenuStyles.link} href='.#'>
          <ListIcon/>
          <p className={`${burgerMenuStyles.linkText} text text_type_main-default`}>Лента заказов</p>
        </a>
        
      </nav>
    </div>
  )
}