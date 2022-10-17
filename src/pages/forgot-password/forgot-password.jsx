import forgotPasswordStyles from './forgot-password.module.css'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, Redirect, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { sendEmail, setForgotPasswordForm } from '../../services/slices/formsSlice'
import { useEffect } from 'react'

export function ForgotPassword() {
  const dispatch = useDispatch()
  const {email} = useSelector(state => state.forms.forgotPassword.form)
  const {success, loading} = useSelector(state => state.forms.forgotPassword)
  const history = useHistory()
  const { isLoggedIn } = useSelector(state => state.user)
  
  function onChangeHandler(event) {
    dispatch(setForgotPasswordForm(event.target.value))
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    dispatch(sendEmail(email))
  }

  useEffect(() => {
    if (success) {
      history.push('/reset-password')
    }
  }, [history, success])

  if (isLoggedIn) {
    return (
      <Redirect to={'/'}/>
    )
  }

  return (
    <div className={forgotPasswordStyles.container}>
      <h3 className={`${forgotPasswordStyles.title} text text_type_main-medium pb-6`}>Восстановление пароля</h3>
      <form className={`${forgotPasswordStyles.form} pb-20`} onSubmit={onSubmitHandler}>
        <Input placeholder='Укажите e-mail' type='email' name='email' onChange={onChangeHandler} value={email}/>
        <Button type="primary" size="medium" htmlType='submit' disabled={loading}>Восстановить</Button>
      </form>
      <nav className={forgotPasswordStyles.links}>
        <p className={`${forgotPasswordStyles.text} text text_type_main-default text_color_inactive`}>Вспомнили пароль?
          <Link to={'/login'} className={forgotPasswordStyles.link}>Войти</Link>
        </p>
      </nav>
    </div>

  )
}