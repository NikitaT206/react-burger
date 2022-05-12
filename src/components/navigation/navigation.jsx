import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import navigationStyles from './navigation.module.css'

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className={navigationStyles.navigation}>

        <a href='.#' className={`${navigationStyles.link} pt-4 pb-4 pr-5 pl-5 mr-2`}>
          <BurgerIcon type='primary'/>
          <span className={`${navigationStyles.text} ml-2`}>Конструктор</span>
        </a>

        <a href='.#' className={`${navigationStyles.linkInactive} pt-4 pb-4 pr-5 pl-5`}>
          <ListIcon type='secondary'/>
          <span className={`${navigationStyles.text} ml-2`}>Лента заказов</span>
        </a>

        <a href='.#' className={`${navigationStyles.linkInactive} pt-4 pb-4 pr-5 pl-5`}>
          <ProfileIcon type='secondary'/>
          <span className={`${navigationStyles.text} ml-2`}>Личный кабинет</span>
        </a>

      </nav>
    )
  }
}