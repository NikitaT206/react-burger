import styles from './ingredient-detail.module.css'

export function IngredientDetail({title, value}) {
  return (
    <li className={`${styles.detail}`}>
      <p className='text text_type_main-default text_color_inactive'>{title}</p>
      <p className='text text_type_digits-default text_color_inactive'>{value}</p>
    </li>
  )
}