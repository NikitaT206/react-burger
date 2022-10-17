import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'
import styles from './profile-form.module.css'

export function ProfileForm() {
  const {user} = useSelector(state => state.user)
  return (
    <form className={styles.form}>
      <Input type='text' placeholder='Имя' name='name' icon='EditIcon' value={user.name || ''}/>
      <Input type='text' placeholder='Логин' name='login' icon='EditIcon' value={user.email || ''}/>
      <Input type='password' placeholder='Пароль' name='password' icon='EditIcon' value={user.name || ''}/>
    </form>
  )
}