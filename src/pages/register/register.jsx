import registerStyles from './register.module.css'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, useHistory, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setRegister, setRegisterForm } from '../../services/slices/formsSlice'
import { useEffect } from 'react'
import { getUserMe, setLoggedIn } from '../../services/slices/userSlice'

export function Register() {
  const dispatch = useDispatch()
  const history = useHistory()
  const {email, password, name} = useSelector(state => state.forms.register.form)
  const {form, success, loading} = useSelector(state => state.forms.register)
  const { isLoggedIn } = useSelector(state => state.user)

  function onChangeHandler(event) {
    dispatch(setRegisterForm({...form, [event.target.name]: event.target.value}))
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    dispatch(setRegister(form))
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
    <div className={registerStyles.container}>
      <h3 className={`${registerStyles.title} text text_type_main-medium pb-6`}>Регистрация</h3>
      
      <form className={`${registerStyles.form} pb-20`} onSubmit={onSubmitHandler}>
        <Input placeholder='Имя' type='text' name='name' value={name} onChange={onChangeHandler}/>
        <Input placeholder='E-mail' type='email' name='email' value={email} onChange={onChangeHandler}/>
        <Input placeholder='Пароль' icon='ShowIcon' type='password' name='password' value={password} onChange={onChangeHandler}/>
        <Button type="primary" size="medium" disabled={loading}>Войти</Button>
      </form>

      <nav className={registerStyles.links}>
        <p className={`${registerStyles.text} text text_type_main-default text_color_inactive`}>Уже зарегистрированы? 
          <Link to={'/login'} className={registerStyles.link}>Войти</Link>
        </p>
      </nav>

    </div>
  )
}