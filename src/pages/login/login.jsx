import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import loginStyles from './login.module.css'
import {Link, Redirect, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin, setLoginForm } from '../../services/slices/formsSlice'
import { useEffect } from 'react'
import { getUserMe, setLoggedIn } from '../../services/slices/userSlice'

export function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const {email, password} = useSelector(state => state.forms.login.form)
  const {form, success, loading} = useSelector(state => state.forms.login)
  const { isLoggedIn } = useSelector(state => state.user)

  function onChangeHandler(event) {
    dispatch(setLoginForm({...form, [event.target.name]: event.target.value}))
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    dispatch(setLogin(form))
  }

  useEffect(() => {
    if (success) {
      dispatch(getUserMe())
      history.push('/')
    }
  }, [history, success])

  if (isLoggedIn) {
    return (
      <Redirect to={'/'}/>
    )
  }

  return (
    <div className={loginStyles.container}>
      <h3 className={`${loginStyles.title} text text_type_main-medium pb-6`} >Вход</h3>
      <form className={`${loginStyles.form} pb-20`} onSubmit={onSubmitHandler}>
        <Input placeholder='E-mail' type='email' name='email' value={email} onChange={onChangeHandler}/>
        <Input placeholder='Пароль' icon='ShowIcon' type='password' name='password' value={password} onChange={onChangeHandler}/>
        <Button type="primary" size="medium" disabled={loading}>Войти</Button>
      </form>
      <nav className={loginStyles.links}>
        <p className={`${loginStyles.text} text text_type_main-default text_color_inactive`}>Вы — новый пользователь? 
          <Link to={'/register'} className={loginStyles.link}>Зарегистрироваться</Link>
        </p>
        <p className={`${loginStyles.text} text text_type_main-default text_color_inactive`}>Забыли пароль? 
          <Link to={'/forgot-password'} className={loginStyles.link}>Восстановить пароль</Link>
        </p>
      </nav>
    </div>

  )
}