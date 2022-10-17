import { NavLink, Switch, Route } from 'react-router-dom'
import { ProfileForm } from '../../components/profile-form/profile-form'
import profileStyles from './profile.module.css'

export function Profile() {
  return (
    <div className={profileStyles.container}>
      <div className={profileStyles.leftSide}>

        <nav className={profileStyles.links}>
          <NavLink 
            to={'/profile'}
            exact
            activeClassName={`${profileStyles.linkActive} text text_type_main-medium`}
            className={`${profileStyles.link} text text_type_main-medium`}
          >Профиль</NavLink>
          <NavLink 
            to={'/profile/orders'}
            exact
            activeClassName={`${profileStyles.linkActive} text text_type_main-medium`}
            className={`${profileStyles.link} text text_type_main-medium`}
          >История заказов</NavLink>
          <NavLink 
            to={'/profile/logout'}
            exact
            activeClassName={`${profileStyles.linkActive} text text_type_main-medium`}
            className={`${profileStyles.link} text text_type_main-medium`}
          >Выход</NavLink>
        </nav>

        <p className={`${profileStyles.description} text text_type_main-default text_color_inactive`}>В этом разделе вы можете
изменить свои персональные данные</p>

      </div>

      <div className={profileStyles.rightSide}>
        <Switch>
          <Route exact path={'/profile'}>
            <ProfileForm/>
          </Route>
          <Route exact path={'/profile/orders'}>
            <h1>404</h1>
          </Route>
          <Route exact path={'/profile/logout'}>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </div>
  )
}