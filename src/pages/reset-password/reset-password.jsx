import resetPasswordStyles from './reset-password.module.css'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, Redirect, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, setResetPasswordForm } from '../../services/slices/formsSlice'
import { useEffect } from 'react'

export function ResetPassword() {
  const dispatch = useDispatch()
  const history = useHistory()
  const {password, token} = useSelector(state => state.forms.resetPassword.form)
  const {form, success, loading} = useSelector(state => state.forms.resetPassword)
  const forgotPasswordSuccess = useSelector(state => state.forms.forgotPassword.success)

  const { isLoggedIn } = useSelector(state => state.user)

  function onChangeHandler(event) {
    dispatch(setResetPasswordForm({...form, [event.target.name]: event.target.value}))
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    dispatch(resetPassword(form))
  }

  useEffect(() => {
    if (success) {
      history.push('/')
    }
  }, [success, history])

  if (!forgotPasswordSuccess && !isLoggedIn) {
    return (
      <Redirect to={'/'}/>
    )
  }

  return (
    <div className={resetPasswordStyles.container}>
      <h3 className={`${resetPasswordStyles.title} text text_type_main-medium pb-6`}>Восстановление пароля</h3>
      <form className={`${resetPasswordStyles.form} pb-20`} onSubmit={onSubmitHandler}>
        <Input 
          placeholder='Введите новый пароль' 
          icon='ShowIcon' 
          type='password' 
          name='password' 
          value={password} 
          onChange={onChangeHandler}
        />
        <Input 
          placeholder='Введите код из письма' 
          type='text' 
          name='token' 
          value={token} 
          onChange={onChangeHandler}
        />
        <Button type="primary" size="medium" disabled={loading}>Сохранить</Button>
      </form>
      <nav className={resetPasswordStyles.links}>
        <p className={`${resetPasswordStyles.text} text text_type_main-default text_color_inactive`}>Вспомнили пароль?
          <Link to={'/login'} className={resetPasswordStyles.link}>Войти</Link>
        </p>
      </nav>
    </div>

  )
}