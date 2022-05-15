import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import navigationStyles from './navigation.module.css'

export default function Navigation() {
  return (
    <nav className={navigationStyles.navigation}>

      <a href='.#' className={`${navigationStyles.link} pt-4 pb-4 pr-5 pl-5 mr-2`}>
        <BurgerIcon type='primary'/>
        <span className='text text_type_main-default ml-2'>Конструктор</span>
      </a>

      <a href='.#' className={`${navigationStyles.linkInactive} pt-4 pb-4 pr-5 pl-5`}>
        <ListIcon type='secondary'/>
        <span className='text text_type_main-default ml-2'>Лента заказов</span>
      </a>

      <a href='.#' className={`${navigationStyles.linkInactive} pt-4 pb-4 pr-5 pl-5`}>
        <ProfileIcon type='secondary'/>
        <span className='text text_type_main-default ml-2'>Личный кабинет</span>
      </a>

    </nav>
  )
}