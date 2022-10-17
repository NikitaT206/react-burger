import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import Navigation from '../navigation/navigation'
import styles from './app-header.module.css'

export default function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>

      <div className={styles.logoContainer}>
        <Logo/>
      </div>

      <Navigation/>
    </header>
  )
}
