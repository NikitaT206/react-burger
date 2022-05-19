import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import Navigation from '../navigation/navigation'
import appHeaderStyles from './app-header.module.css'

export default function AppHeader({toogleBurgerMenu, burgerMenuOpen}) {
  return (
    <header className={`${appHeaderStyles.header} pt-4 pb-4`}>

      <div className={appHeaderStyles.logoContainer}>
        <Logo/>
      </div>

      <Navigation toogleBurgerMenu={toogleBurgerMenu} burgerMenuOpen={burgerMenuOpen}/>
    </header>
  )
}
