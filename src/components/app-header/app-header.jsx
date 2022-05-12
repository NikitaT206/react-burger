import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import Navigation from '../navigation/navigation'
import appHeaderStyles from './app-header.module.css'

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${appHeaderStyles.header} pt-4 pb-4`}>

        <div className={appHeaderStyles.logoContainer}>
          <Logo/>
        </div>

        <Navigation/>
       
      </header>
    )
  }
}